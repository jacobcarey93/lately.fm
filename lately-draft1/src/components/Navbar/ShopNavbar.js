import React, { Component } from 'react';
import './ShopNavbar.css';
import video from '../../assets/video.svg';
import about from '../../assets/about.svg';
import artists from '../../assets/artists.svg';
import contact from '../../assets/contact.svg';
import playlists from '../../assets/playlists.svg';
import records from '../../assets/records.svg';
import review from '../../assets/review.svg';
import shop from '../../assets/shop.svg';
import axios from 'axios';
import facebook from './ContactSvg/facebook.svg';
import twitter from './ContactSvg/twitter.svg';
import instagram from './ContactSvg/instagram.svg';
import soundcloud from './ContactSvg/soundcloud.svg';
import spotify from './ContactSvg/spotify.svg';
import shoppingcart from './ContactSvg/shoppingcart.svg';
import gohome from './ContactSvg/gohome.svg';
import login from './ContactSvg/login.svg';


export default class ShopNavbar extends Component {
  constructor() {
    super();
    this.state = {
      mainSlideVisible: false,
      menuAnimation: false,
      contactSlideVisible: false,
      searchText: '',
    }

    this.openSlide = this.openSlide.bind(this);
    this.crissCross = this.crissCross.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind( this );
    this.openContactSlide = this.openContactSlide.bind( this );
    // this.search = this.search.bind( this );

  }

  openSlide() {
    if (this.state.contactSlideVisible && this.state.mainSlideVisible === true) {
      this.setState({
        contactSlideVisible: false,
        mainSlideVisible: false
      })
    } else {
      this.setState({
        mainSlideVisible: !this.state.mainSlideVisible
      })
    }
  }

  crissCross() {
    this.setState({
      menuAnimation: !this.state.menuAnimation
    })
  }

  openContactSlide() {
    this.setState({
      contactSlideVisible: !this.state.contactSlideVisible
    })
  }

  handleSearchChange( event ) {
    this.setState({ 
      text: event.target.value 
    }) 
  }
  
  // come back to this i dont think it works
  // search(){
      //   axios.get('http://localhost:3000/' + this.state.text)
      //   .then( (res) => {
          //     console.log(res)
          //   })
          // }
          
          
          render() {
              return (
                  
                  // main divs
      <div className={this.state.mainSlideVisible ? 'nav_slide nav_open' : 'nav_slide'} >
        <div className="nav_head_parent_container charcoal">
          <div className="nav_head_child_container">

            {/* lately logo */}

            <div className="nav_head_child_left">
              <span className="nav_head_title lato"><a href='/homepage'>LATELY.FM</a></span>
            </div>


            {/* search image */}

            <div className='nav_head_child_right'>
              <img src='http://www.iconsdb.com/icons/preview/white/search-12-xxl.png' className='nav_search_img' />
              <div>
                <div id="wrap">
                  <input id="search" name="search" type="text" placeholder="search" onChange={ this.handleSearchChange}/><input id="search_submit" value="Rechercher" type="submit"  />
                </div>
              </div>
              <div className='nav_shopping_cart'>
                <img src={shoppingcart} className='nav_shopping_icon_size' onClick={this.openContactSlide}/>
                </div>
                <div className='nav_shopping_cart'>
                <a href={ process.env.REACT_APP_LOGIN }><img src={login} className='shopnav_login_icon' /></a>
                </div>
                <div className='nav_shopping_cart'>
                <a href='/homepage'><img src={gohome} className='shopnav_home_icon' /></a>
                </div>
            </div>

          </div>
        </div>

        {/* slideout contact menu */}
        
        <div className={this.state.contactSlideVisible ? 'nav_contact_slide nav_open_contact' : 'nav_contact_slide'}>
          <div className='shopnav_pullout_cart'>
            <p><u>CART</u></p>
          </div>
        </div>

      </div>
    )
  }
}