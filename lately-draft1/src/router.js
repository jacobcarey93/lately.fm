import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About/About';
import AdminArtistManager from './components/Admin/AdminArtistManager/AdminArtistManager';
import AdminHome from './components/Admin/AdminHome/AdminHome';
import AdminProductManger from './components/Admin/AdminProductManager/AdminProductManager';
import AdminReviewManger from './components/Admin/AdminReviewManager/AdminReviewManager';
import AdminStoreManager from './components/Admin/AdminStoreManager/AdminStoreManager';
import ArtistsHome from './components/Artists/ArtistsHome/ArtistsHome';
import ArtistsSpecific from './components/Artists/ArtistsSpecific/ArtistsSpecific';
import HomePage from './components/HomePage/HomePage';
// import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import PlaylistHome from './components/Playlist/PlaylistHome/PlaylistHome';
import PlaylistSpecific from './components/Playlist/PlaylistSpecific/PlaylistSpecific';
import ReviewsHome from './components/Reviews/ReviewsHome/ReviewsHome';
import ReviewsSpecific from './components/Reviews/ReviewsSpecific/ReviewsSpecific';
import AccountOverview from './components/Store/AccountOverview/AccountOverview';
import StoreHome from './components/Store/StoreHome/StoreHome';
import VideosHome from './components/Videos/VideosHome/VideosHome';
import VideosSpecific from './components/Videos/VideosSpecific/VideosSpecific';
import Splash from './components/Splash/Splash';
import Details from './components/Store/Details/Details';
// import Cart from './components/Store/Cart/Cart';
import Checkout from './components/Store/Checkout/Checkout';
import Stripe from './components/Stripe/Stripe';
import AccountAddress from './components/Store/AccountOverview/AccountAddress/AccountAddress';
import AddressForm from './components/Store/AccountOverview/AccountAddress/AddressForm';

export default (
  <Switch>
    <Route component={ HomePage } exact path="/homepage" />
    <Route component={ About } exact path="/about" />
    <Route component={ AdminArtistManager } exact path="/admin/artistmanager" />
    <Route component={ AdminHome } exact path="/admin/home" />
    <Route component={ AdminProductManger } exact path="/admin/productmanager" />
    <Route component={ AdminReviewManger } exact path="/admin/reviewmanager" />
    <Route component={ AdminStoreManager } exact path="/admin/storemanager" />
    <Route component={ ArtistsHome } exact path="/artists" />
    <Route component={ ArtistsSpecific } exact path="/moreartists" />
    <Route component={ PlaylistHome } exact path="/playlists" />
    <Route component={ PlaylistSpecific } exact path="/playlists/:id" />
    <Route component={ ReviewsHome } exact path="/reviews" />
    <Route component={ ReviewsSpecific } exact path="/morereviews" />
    <Route component={ AccountOverview } exact path="/account" />
    <Route component={ StoreHome } exact path="/store" />
    <Route component={ VideosHome } exact path="/videos" />
    <Route component={ VideosSpecific } exact path="/morevideos" />
    <Route component={ Splash } exact path='/' />
    <Route component={Details} path="/details/:productid" /> 
    {/* <Route component={Cart} path="/cart" />  */}
    <Route component={Checkout} path="/checkout" /> 
    <Route component={Stripe} path="/stripe" /> 
    <Route component={AccountAddress} path="/account/address" /> 
    <Route component={AddressForm} path="/addressform" /> 
  </Switch>
)