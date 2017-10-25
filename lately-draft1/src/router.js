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
// import Navbar from './components/Navbar/Navbar';
import PlaylistHome from './components/Playlist/PlaylistHome/PlaylistHome';
import PlaylistSpecific from './components/Playlist/PlaylistSpecific/PlaylistSpecific';
import ReviewsHome from './components/Reviews/ReviewsHome/ReviewsHome';
import ReviewsSpecific from './components/Reviews/ReviewsSpecific/ReviewsSpecific';
// import AccountCreator from './components/Store/AccountCreator/AccountCreator';
import AccountOverview from './components/Store/AccountOverview/AccountOverview';
// import ProductView from './components/Store/ProductView/ProductView';
import StoreHome from './components/Store/StoreHome/StoreHome';
// import StoreMainPage from './components/Store/StoreMainPage/StoreMainPage';
// import Stripe from './components/Stripe/Stripe';
import VideosHome from './components/Videos/VideosHome/VideosHome';
import VideosSpecific from './components/Videos/VideosSpecific/VideosSpecific';
import Splash from './components/Splash/Splash';
// import TheShopHome from './components/TheShop/TheShopHome/TheShopHome';

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
    {/* <Route component={ AccountCreator } exact path="/createaccount" /> */}
    <Route component={ AccountOverview } exact path="/account/:id" />
    {/* <Route component={ ProductView } exact path="/product/:id" /> */}
    <Route component={ StoreHome } exact path="/store" />
    {/* <Route component={ StoreMainPage } exact path="/mainstore" /> */}
    {/* <Route component={ TheShopHome } exact path="/shophome" /> */}
    <Route component={ VideosHome } exact path="/videos" />
    <Route component={ VideosSpecific } exact path="/morevideos" />
    <Route component={ Splash } exact path='/' />
  </Switch>
)