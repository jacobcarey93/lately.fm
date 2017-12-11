import React, { Component } from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import YouTube from 'react-youtube';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import SpotifyPlayer from 'react-spotify-player';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      reviews: [],
      videos: [],
      reviewImages: [],
      videoIDs: [],
      playlists: [],
      playlistModalVisible: false,
      modalPlaylistUri: [],
    }

    this.showPlaylistModal = this.showPlaylistModal.bind(this);
    this.setModalPlaylist = this.setModalPlaylist.bind(this);

  }

  componentDidMount() {
    axios.get('/api/new/artists')
      .then(res => {
        this.setState({
          artists: res.data
        })
      })
    axios.get('/api/new/reviews')
      .then(res => {
        const imgArr = [];
        res.data.map((review, index) => {
          imgArr.push(review.album_image)
        })
        this.setState({
          reviewImages: imgArr
        })
      })
    axios.get('/api/new/videos')
      .then(res => {
        const vidArr = [];
        res.data.map((video, index) => {
          vidArr.push(video.video_url)
        })
        this.setState({
          videoIDs: vidArr
        })
      })
    axios.get('/api/playlists')
      .then(playlists => {
        this.setState({
          playlists: playlists.data
        })
      })
  }

  _onReady(event) {
    event.target.pauseVideo();
  }

  showPlaylistModal() {
    this.setState({
      playlistModalVisible: !this.state.playlistModalVisible
    })
  }

  setModalPlaylist(playlist_uri) {
    if (this.state.playlists === []) {
      console.log('loading..')
    } else {
      this.setState({
        modalPlaylistUri: playlist_uri
      })
    }
  }

  render() {
    const opts = {
      height: '340',
      width: '600',
      playerVars: {
        autoplay: 0
      }
    }
    const size = {
      width: '100%',
      height: '100%',
    }
    const view = 'list';
    const theme = 'white';

    return (
      <div className='main1'>
        <Navbar className='navbar' />
        <div className='main2'>

          {/* reviews */}
          <div className='child2'>
            <div className='rightTI'>
              <img src={this.state.reviewImages[0]} className='review_album_image ' alt='album 1' />
              <img src={this.state.reviewImages[1]} className='review_album_image ' alt='album 2' />
              <img src={this.state.reviewImages[2]} className='review_album_image ' alt='album 3' />
              <img src={this.state.reviewImages[3]} className='review_album_image ' alt='album 4' />
              <img src={this.state.reviewImages[4]} className='review_album_image ' alt='album 5' />
              <img src={this.state.reviewImages[0]} className='review_album_image ' alt='album 6' />
              <img src={this.state.reviewImages[1]} className='review_album_image ' alt='album 7' />
              <img src={this.state.reviewImages[2]} className='review_album_image ' alt='album 8' />
              <img src={this.state.reviewImages[3]} className='review_album_image ' alt='album 9' />
              <img src={this.state.reviewImages[4]} className='review_album_image ' alt='album 10' />
            </div>
            <div className='review_header'><a href='/reviews'>REVIEWS</a></div>
          </div>

          {/* artists */}
          <div className='big_daddy'>
            <div className='pic_container1'>
              <div><img src='http://content.acclaimmag.com/content/uploads/2016/01/toro-y-moi-503191b8d6888.jpg' className='image_size1' alt='some pic' /></div>
            </div>
            <div className='pic_container2'>
              <div><img src='https://storage.googleapis.com/relevant-magazine/2017/05/WashedOut1.jpg' className='image_size2' alt='some pic' /></div>
              <div><img src='https://pulpjuiced.files.wordpress.com/2017/08/maxresdefault.jpg' className='image_size2' alt='some pic' /></div>
              <div><img src='http://hvngrymag.com/wp-content/uploads/2015/07/fazerdaze.jpg' className='image_size2' alt='some pic' /></div>
              <div><img src='https://i.ytimg.com/vi/WbyyxIZ02Zs/maxresdefault.jpg' className='image_size2' alt='some pic' /></div>
            </div>
            <div className='review_header'><a href='/artists'>ARTISTS</a></div>
          </div>

          {/* videos */}
          <div className='homepage_videos_parent'>
            <div className='video_header'><a href='/videos'>VIDEOS</a></div>
            <div className='homepage_hightlight_video'>
              <div className='homepage_video_styles'>
                <div className='leftTI'>
                  <YouTube
                    videoId={this.state.videoIDs[0]}
                    opts={opts}
                    onReady={this._onReady}
                  />
                  <YouTube
                    videoId={this.state.videoIDs[1]}
                    opts={opts}
                    onReady={this._onReady}
                  />
                  <YouTube
                    videoId={this.state.videoIDs[2]}
                    opts={opts}
                    onReady={this._onReady}
                  />
                  <YouTube
                    videoId={this.state.videoIDs[3]}
                    opts={opts}
                    onReady={this._onReady}
                  />
                  <YouTube
                    videoId={this.state.videoIDs[0]}
                    opts={opts}
                    onReady={this._onReady}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* playlists */}
          <div className='homepage_playlists_main'>
            <div className='homepage_move_playlists'>
              <div className={this.state.playlistModalVisible ? 'homepage_hide_dates' : 'homepage_playlists_header'}>
                <a href='/playlists'>
                  PLAYLISTS
              </a>
              </div>
              <div className='homepage_playlists_parent'>

                {/* spotify player modal */}
                <div className={this.state.playlistModalVisible ? 'homepage_modal_playlist_main homepage_open_modal_main' : 'homepage_modal_playlist_main'}>

                  {/* spotify modal */}
                  <div className={this.state.playlistModalVisible ? 'homepage_modal_playlist_parent homepage_open_modal_parent' : 'homepage_modal_playlist_parent'}>
                    <SpotifyPlayer
                      uri={this.state.modalPlaylistUri}
                      size={size}
                      view={view}
                      theme={theme}
                    />

                    {/* buttons */}
                    <div className='homepage_modal_btn_main'>
                      {/* <div>
                        <p className={this.state.playlistModalVisible ? 'homepage_modal_btn homepage_open_btn' : 'homepage_modal_btn'}>ADD TO SIDE BAR</p>
                      </div> */}
                      <div onClick={this.showPlaylistModal}>
                        <p className={this.state.playlistModalVisible ? 'homepage_modal_btn homepage_open_btn' : 'homepage_modal_btn'}>CLOSE</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* dates */}
          <div className='homepage_dates_main'>
            {this.state.playlists === 0 ? <p>loading..</p> : this.state.playlists.map((playlist, index) => {
              return (
                <div>
                  <div className={this.state.playlistModalVisible ? 'homepage_hide_dates' : 'homepage_playlists_child'}>
                    <div onClick={this.showPlaylistModal}>
                      <h2 onClick={() => this.setModalPlaylist(playlist.playlist_uri)} className='homepage_playlists_child'><u>{playlist.playlist_date}</u></h2>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

  };
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);














// import React, { Component } from 'react';
// import './HomePage.css';
// import Navbar from '../Navbar/Navbar';
// import axios from 'axios';
// import YouTube from 'react-youtube';
// import Footer from '../Footer/Footer';

// class HomePage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       artists: [],
//       reviews: [],
//       videos: [],
//       reviewImages: [],
//       videoIDs: [],
//     }
//   }

//   componentDidMount() {
//     axios.get('/api/new/artists')
//       .then(res => {
//         this.setState({
//           artists: res.data
//         })
//       })
//     axios.get('/api/new/reviews')
//       .then(res => {
//         const imgArr = [];
//         res.data.map((review, index) => {
//           imgArr.push(review.album_image)
//         })
//         this.setState({
//           reviewImages: imgArr
//         })
//       })
//     axios.get('/api/new/videos')
//       .then(res => {
//         const vidArr = [];
//         res.data.map((video, index) => {
//           vidArr.push(video.video_url)
//         })
//         this.setState({
//           videoIDs: vidArr
//         })
//       })
//   }


//   //   axios.get('/api/new/videos')
//   //     .then(res => {
//   //       this.setState({
//   //         videos: res.data
//   //       })
//   //     })
//   // }

//   // axios.get('/api/new/reviews')
//   // .then(res => {
//   //   this.setState({
//   //     reviews: res.data,
//   //     reviewImages: res.data.map((review, index) => {
//   //       imgArr.push(review.album_image)
//   //     })
//   //   })
//   // })

//   _onReady(event) {
//     event.target.pauseVideo();
//   }


//   render() {
//     const opts = {
//       height: '340',
//       width: '600',
//       playerVars: {
//         autoplay: 0
//       }
//     }
//     return (
//       <div className='main1'>
//         <Navbar className='navbar' />
//         <div className='main2'>
//           <div className='child2'>
//             <div className='rightTI'>
//               <img src={this.state.reviewImages[0]} className='review_album_image ' alt='album 1'/>
//               <img src={this.state.reviewImages[1]} className='review_album_image ' alt='album 2'/>
//               <img src={this.state.reviewImages[2]} className='review_album_image ' alt='album 3'/>
//               <img src={this.state.reviewImages[3]} className='review_album_image ' alt='album 4'/>
//               <img src={this.state.reviewImages[4]} className='review_album_image ' alt='album 5'/>
//               <img src={this.state.reviewImages[0]} className='review_album_image ' alt='album 6'/>
//               <img src={this.state.reviewImages[1]} className='review_album_image ' alt='album 7'/>
//               <img src={this.state.reviewImages[2]} className='review_album_image ' alt='album 8'/>
//               <img src={this.state.reviewImages[3]} className='review_album_image ' alt='album 9'/>
//               <img src={this.state.reviewImages[4]} className='review_album_image ' alt='album 10'/>
//               {/* <img src={this.state.reviewImages[0]} className='review_album_image ' alt='album 11'/>
//               <img src={this.state.reviewImages[1]} className='review_album_image ' alt='album 12'/>
//               <img src={this.state.reviewImages[2]} className='review_album_image ' alt='album 13'/>
//               <img src={this.state.reviewImages[3]} className='review_album_image ' alt='album 14'/>
//               <img src={this.state.reviewImages[4]} className='review_album_image ' alt='album 15'/>
//               <img src={this.state.reviewImages[0]} className='review_album_image ' alt='album 16'/>
//               <img src={this.state.reviewImages[1]} className='review_album_image ' alt='album 17'/>
//               <img src={this.state.reviewImages[2]} className='review_album_image ' alt='album 18'/>
//               <img src={this.state.reviewImages[3]} className='review_album_image ' alt='album 19'/>
//               <img src={this.state.reviewImages[4]} className='review_album_image ' alt='album 20'/>
//               <img src={this.state.reviewImages[0]} className='review_album_image ' alt='album 21'/>
//               <img src={this.state.reviewImages[1]} className='review_album_image ' alt='album 22'/>
//               <img src={this.state.reviewImages[2]} className='review_album_image ' alt='album 23'/>
//               <img src={this.state.reviewImages[3]} className='review_album_image ' alt='album 24'/>
//               <img src={this.state.reviewImages[4]} className='review_album_image ' alt='album 25'/>
//               <img src={this.state.reviewImages[0]} className='review_album_image ' alt='album 26'/>
//               <img src={this.state.reviewImages[1]} className='review_album_image ' alt='album 27'/>
//               <img src={this.state.reviewImages[2]} className='review_album_image ' alt='album 28'/>
//               <img src={this.state.reviewImages[3]} className='review_album_image ' alt='album 29'/>
//               <img src={this.state.reviewImages[4]} className='review_album_image ' alt='album 30'/> */}
//             </div>
//             {/* {this.state.reviewImages === 0 ? <p>loading...</p> : this.state.reviewImages.map((review, index) => {
//               return (
//                 <div>
//                   <img src={review.album_image} className='review_album_image' alt={review.artist_name} />
//                 </div>
//               )
//             })} */}


//             <div className='review_header'><a href='/reviews'>REVIEWS</a></div>
//           </div>
//           <div className='big_daddy'>
//             <div className='pic_container1'>
//               <div><img src='http://content.acclaimmag.com/content/uploads/2016/01/toro-y-moi-503191b8d6888.jpg' className='image_size1' alt='some pic' /></div>
//             </div>
//             <div className='pic_container2'>
//               <div><img src='https://storage.googleapis.com/relevant-magazine/2017/05/WashedOut1.jpg' className='image_size2' alt='some pic' /></div>
//               <div><img src='https://pulpjuiced.files.wordpress.com/2017/08/maxresdefault.jpg' className='image_size2' alt='some pic' /></div>
//               <div><img src='http://hvngrymag.com/wp-content/uploads/2015/07/fazerdaze.jpg' className='image_size2' alt='some pic' /></div>
//               <div><img src='https://i.ytimg.com/vi/WbyyxIZ02Zs/maxresdefault.jpg' className='image_size2' alt='some pic' /></div>
//             </div>
//             <div className='review_header'><a href='/artists'>ARTISTS</a></div>
//           </div>


//           <div className='homepage_videos_parent'>
//             <div className='video_header'><a href='/videos'>VIDEOS</a></div>

//             <div className='homepage_hightlight_video'>
//               <div className='homepage_video_styles'>
//                 <div className='leftTI'>
//                 <YouTube
//                   videoId={this.state.videoIDs[0]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[1]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[2]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[3]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[0]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 {/* <YouTube
//                   videoId={this.state.videoIDs[1]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[2]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[3]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[0]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[1]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[2]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[3]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[0]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[1]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[2]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[3]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[0]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[1]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[2]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[3]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[0]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[1]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[2]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 />
//                 <YouTube
//                   videoId={this.state.videoIDs[3]}
//                   opts={opts}
//                   onReady={this._onReady}
//                 /> */}
//                 </div>
//               </div>
//             </div>


//             {/* {this.state.videos === 0 ? <p>loading..</p> : this.state.videos.map((video, index) => {
//               return (
//                 <div className='homepage_highlight_video'>
//                   <div className='homepage_video_styles'>
//                     <YouTube
//                       videoId={video.video_url}
//                       opts={opts}
//                       onReady={this._onReady}
//                     />
//                   </div>
//                 </div>
//               )
//             })} */}


//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default HomePage;