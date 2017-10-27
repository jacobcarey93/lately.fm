import React, { Component } from 'react';
import './Navbar.css';
import video from '../../assets/video.svg';
import about from '../../assets/about.svg';
import artists from '../../assets/artists.svg';
import contact from '../../assets/contact.svg';
import playlists from '../../assets/playlists.svg';
import records from '../../assets/records.svg';
import review from '../../assets/review.svg';
import shop from '../../assets/shop.svg';
import facebook from './ContactSvg/facebook.svg';
import twitter from './ContactSvg/twitter.svg';
import instagram from './ContactSvg/instagram.svg';
import soundcloud from './ContactSvg/soundcloud.svg';
import spotify from './ContactSvg/spotify.svg';
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSlideVisible: false,
      menuAnimation: false,
      contactSlideVisible: false,
      searchText: '',
    }

    this.openSlide = this.openSlide.bind(this);
    this.crissCross = this.crissCross.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.openContactSlide = this.openContactSlide.bind(this);
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

  handleSearchChange(event) {
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
                  <input id="search" name="search" type="text" placeholder="search" onChange={this.handleSearchChange} className='nav_input_one'/><input id="search_submit" value="Rechercher" type="submit" className='nav_input_two'/>
                </div>
              </div>

              {/* menu button */}
              <div className="nav_container" onClick={this.openSlide}>
                <div className='nav_container1' onClick={this.crissCross}>
                  <div className={this.state.menuAnimation ? 'change1' : 'bar1'}></div>
                  <div className={this.state.menuAnimation ? 'change2' : 'bar2'}></div>
                  <div className={this.state.menuAnimation ? 'change3' : 'bar3'}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* drop down menu */}
        <div className={this.state.mainSlideVisible ? 'nav_flexin_on_them_hoes' : 'nav_hide_links'}>
          <Link to='/reviews'>
            <div className='nav_literally_just_stacking_stuff'>
              <img src={review} className='nav_icon_size' alt='reviews' />
              <span>REVIEWS</span>
            </div>
          </Link>
          <Link to='/artists'>
            <div className='nav_literally_just_stacking_stuff'>
              <img src={artists} className='nav_icon_size' alt='artists' />
              <span>ARTISTS</span>
            </div>
          </Link>
          <div className='nav_literally_just_stacking_stuff'>
            <a href='https://open.spotify.com/user/lately.fm'>{<img src={playlists} className='nav_icon_size' alt='playlists' />}</a>
            <span>PLAYLISTS</span>
          </div>
          <Link to='/videos'>
            <div className='nav_literally_just_stacking_stuff'>
              <img src={video} className='nav_icon_size' alt='video' />
              <span>VIDEO</span>
            </div>
          </Link>
          <div className='nav_literally_just_stacking_stuff'>
            <a href='https://soundcloud.com/latelyfm'>{<img src={records} className='nav_icon_size' alt='records' />}</a>
            <span>LATELY RECORDS</span>
          </div>

          <a href={process.env.REACT_APP_LOGIN}>
            <div className='nav_literally_just_stacking_stuff'>
              <img src={shop} className='nav_icon_size' alt='store' />
              <span>STORE</span>
            </div>
          </a>
          <Link to='/about'>
            <div className='nav_literally_just_stacking_stuff'>
              <img src={about} className='nav_icon_size' alt='about' />
              <span>ABOUT</span>
            </div>
          </Link>
          <div className='nav_literally_just_stacking_stuff'>
            <a><img src={contact} className='nav_icon_size' alt='contact' onClick={this.openContactSlide} /></a>
            <span>CONTACT</span>
          </div>
        </div>
        
        <div>
          <div className={this.state.contactSlideVisible ? 'nav_contact_slide nav_open_contact' : 'nav_contact_slide'}>
            <a href='https://twitter.com/latelyfm'><img src={twitter} className='nav_contact_icons' alt='twitter' /></a>
            <a href='https://www.facebook.com/latelyfm'><img src={facebook} className='nav_contact_icons' alt='facebook' /></a>
            <a href='https://open.spotify.com/user/lately.fm'><img src={spotify} className='nav_contact_icons' alt='spotify' /></a>
            <a href='https://soundcloud.com/latelyfm'><img src={soundcloud} className='nav_contact_icons' alt='soundcloud' /></a>
            <a href='https://www.instagram.com/lately.fm/'><img src={instagram} className='nav_contact_icons' alt='instagram' /></a>
          </div>
        </div>
      </div>
    )
  }
}