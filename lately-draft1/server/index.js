require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(cors())

// this is all of the auth0 stuff
// app.use(passport.initialize());
// app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db);
})

// passport.use(new Auth0Strategy({
//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENT_ID,
//     clientSecret: process.env.AUTH_CLIENT_SECRET,
//     callbackURL: process.env.AUTH_CALLBACK_URL
// }, 
// function(accessToken, refreshToken, extraParams, profile, done) {
//     console.log(profile)


//     const db = app.get('db')

//     db.find_user([ profile.identities[0].user_id ]).then( user => {
//         if (user[0]){
//             return done(null, user[0].id)
//         } else {
//             const user = profile._json
//             db.create_user([ user.name, user.email, user.picture, user.identities[0].user_id ])
//             .then( user => {
//                 return done(null, user[0].id)
//             })
//         }

//     })
// }))

// app.get('/auth', passport.authenticate('auth0'));
// app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: 'http://localhost:3000/#/private',
//     failureRedirect: '/auth'
// }));
// app.get('/auth/me', (req, res) => {
//     if(!req.user){
//         return res.status(404).send('User Not Found')
//     } 
//     return res.status(200).send(req.user);
// })

// app.get('/auth/logout', ( req, res ) => {
//     req.logOut();
//     res.redirect(302, 'http://localhost:3000/#/')
// })

// passport.serializeUser( function( id, done ) {
//     done(null, id);
// })

// passport.deserializeUser( function( id, done ) {
//     app.get('db').find_current_user([ id ])
//     .then( user => {
//         done(null, user[0])
//     })
// })

app.post('/api/payment', function (req, res, next) {
  //convert amount to pennies
  const amountArray = req.body.amount.toString().split('');
  const pennies = [];
  for (var i = 0; i < amountArray.length; i++) {
    if (amountArray[i] === ".") {
      if (typeof amountArray[i + 1] === "string") {
        pennies.push(amountArray[i + 1]);
      } else {
        pennies.push("0");
      }
      if (typeof amountArray[i + 2] === "string") {
        pennies.push(amountArray[i + 2]);
      } else {
        pennies.push("0");
      }
      break;
    } else {
      pennies.push(amountArray[i])
    }
  }
  const convertedAmt = parseInt(pennies.join(''));

  const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function (err, charge) {
    if (err) return res.sendStatus(500)
    return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
});

//home page endpoints
app.get('/api/new/artists', (req, res, next) => {
  const db = app.get('db')

  db.get_newest_artists()
    .then((artists) => res.status(200).send(artists))
    .catch(() => res.status(500).send())
})

app.get('/api/new/reviews', (req, res, next) => {
  const db = app.get('db')

  db.get_newest_reviews()
    .then((reviews) => res.status(200).send(reviews))
    .catch(() => res.status(500).send())
})

app.get('/api/new/videos', (req, res, next) => {
  const db = app.get('db')

  db.get_newest_videos()
    .then((videos) => res.status(200).send(videos))
    .catch(() => res.status(500).send())
})

//review endpoints
app.get('/api/reviews', (req, res, next) => {
  const db = app.get('db')

  db.get_all_reviews()
    .then((reviews) => res.status(200).send(reviews))
    .catch(() => res.status(500).send())
})

//artist endpoints
app.get('/api/artists', (req, res, next) => {
  const db = app.get('db')

  db.get_all_artists()
    .then((artists) => res.status(200).send(artists))
    .catch(() => res.status(500).send())
})

//video endpoints
app.get('/api/videos', (req, res, next) => {
  const db = app.get('db')

  db.get_all_videos()
    .then((videos) => res.status(200).send(videos))
    .catch(() => res.status(500).send())
})

//store endpoints
app.get('/api/shop', ( req, res, next ) => {
  const db = app.get('db')
  
  db.get_all_products()
  .then( (products) => res.status(200).send( products ) )
  .catch( () => res.status(500).send( ) )
})

app.get('/api/product/:id', ( req, res, next ) => {
  const db = app.get('db')
  const { params } = req
  
  db.get_product([ params.id ])
  .then( ( product ) => res.status(200).send( product ) )
  .catch( () => res.status(500).send( ) )
})

//front end admin end points
app.post('/api/admin/artist', ( req, res, next ) => {
  const db = app.get('db')
  const { artist_name, artist_image, artist_summary } = req.body
  
  db.create_artist([ artist_name, artist_image, artist_summary ])
  .then( () => res.status(200).send( ) )
  .catch( () => res.status(500).send( ) )
})

app.post('/api/admin/product', ( req, res, next ) => {
  const db = app.get('db')
  const { product_name, product_price, product_image, product_description } = req.body
  
  db.create_product([ product_name, product_price, product_image, product_description ])
  .then( () => res.status(200).send( ) )
  .catch( () => res.status(500).send( ) )
})

app.post('/api/admin/reviews', ( req, res, next ) => {
  const db = app.get('db')
  const { artist_name, album_image, review_content, review_date } = req.body
  
  db.create_review([ artist_name, album_image, review_content, review_date ])
  .then( () => res.status(200).send( ) )
  .catch( () => res.status(500).send( ) )
})

app.post('/api/admin/videos', ( req, res, next ) => {
  const db = app.get('db')
  const { video_name, video_description, video_date, video_url } = req.body
  
  db.create_video([ video_name, video_description, video_date, video_url ])
  .then( () => res.status(200).send( ) )
  .catch( () => res.status(500).send( ) )
})

app.delete('/api/admin/artist/:id', ( req, res, next ) => {
  const db = app.get('db')
  const { params } = req

  db.delete_artist([ params.id ])
  .then( () => res.status(200).send('artist deleted'))
  .catch( () => res.status(500).send('failed to delete'))
})

app.delete('/api/admin/review/:id', ( req, res, next ) => {
  const db = app.get('db')
  const { params } = req

  db.delete_review([ params.id ])
  .then( () => res.status(200).send('review deleted'))
  .catch( () => res.status(500).send('failed to delete'))
})

app.delete('/api/admin/video/:id', ( req, res, next ) => {
  const db = app.get('db')
  const { params } = req

  db.delete_video([ params.id ])
  .then( () => res.status(200).send('video deleted'))
  .catch( () => res.status(500).send('failed to delete'))
})

app.delete('/api/admin/product/:id', ( req, res, next ) => {
  const db = app.get('db')
  const { params } = req

  db.delete_product([ params.id ])
  .then( () => res.status(200).send('product deleted'))
  .catch( () => res.status(500).send('failed to delete'))
})

const PORT = 3005
app.listen(PORT, () => console.log(`Server on port ${PORT},`))