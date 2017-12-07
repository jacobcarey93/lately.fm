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
import headphones1 from './ContactSvg/headphones1.svg';
import headphones2 from './ContactSvg/headphones2.svg';
import { Link } from 'react-router-dom';
import SpotifyPlayer from 'react-spotify-player';
import axios from 'axios';
import { connect } from 'react-redux';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainSlideVisible: false,
      menuAnimation: false,
      contactSlideVisible: false,
      searchText: '',
      playerSlideVisible: false,
    }

    this.openSlide = this.openSlide.bind(this);
    this.crissCross = this.crissCross.bind(this);
    this.openContactSlide = this.openContactSlide.bind(this);
    this.openMusicPlayerSlide = this.openMusicPlayerSlide.bind(this);

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
    if (this.state.playerSlideVisible === true) {
      this.setState({
        playerSlideVisible: false,
        menuAnimation: !this.state.menuAnimation
      })
    } else {
      this.setState({
        menuAnimation: !this.state.menuAnimation
      })
    }
  }

  openContactSlide() {
    this.setState({
      contactSlideVisible: !this.state.contactSlideVisible
    })
  }

  openMusicPlayerSlide() {
    if (this.state.mainSlideVisible === true) {
      this.setState({
        mainSlideVisible: false,
        playerSlideVisible: !this.state.playerSlideVisible
      })
    } else {
      this.setState({
        playerSlideVisible: !this.state.playerSlideVisible
      })
    }
  }

  render() {
    const size = {
      width: '100%',
      height: '100%',
    }
    const view = 'list';
    const theme = 'black';

    const navPlaylist = this.props.playlists


    return (

      // main divs
      <div className={this.state.mainSlideVisible ? 'nav_slide nav_open' : 'nav_slide'} >
        <div className="nav_head_parent_container charcoal">
          <div className="nav_head_child_container">

            {/* lately logo */}
            <div className="nav_head_child_left">
              <Link to='/homepage'>
                <span className="nav_head_title lato">LATELY.FM</span>
              </Link>
            </div>


            <div className='nav_head_child_right'>



              {/* search image */}
              {/* <img src='http://www.iconsdb.com/icons/preview/white/search-12-xxl.png' className='nav_search_img' />
              <div>
                <div id="wrap">
                  <input id="search" name="search" type="text" placeholder="search" onChange={this.handleSearchChange} className='nav_input_one' /><input id="search_submit" value="Rechercher" type="submit" className='nav_input_two' />
                </div>
              </div> */}

              {/* headphones image */}
              <div className='nav_headphones_main'>
                <img src={headphones1} className='nav_headphones_img' alt='headphones' onClick={this.openMusicPlayerSlide} />
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
          <Link to='/playlists'>
            <div className='nav_literally_just_stacking_stuff'>
              <img src={playlists} className='nav_icon_size' alt='playlists' />
              <span>PLAYLISTS</span>
            </div>
          </Link>
          <Link to='/videos'>
            <div className='nav_literally_just_stacking_stuff'>
              <img src={video} className='nav_icon_size' alt='video' />
              <span>VIDEO</span>
            </div>
          </Link>
          <div className='nav_literally_just_stacking_stuff'>
            <a href='https://soundcloud.com/latelyfm'><img src={records} className='nav_icon_size' alt='records' /></a>
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


        <div className={this.state.playerSlideVisible ? 'nav_music_player_main nav_music_player_open' : 'nav_music_player_main'}>
          <SpotifyPlayer
            uri="spotify:user:lately.fm:playlist:1ZQIpi9J3YloDt6xwIhs1o"
            size={size}
            view={view}
            theme={theme}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

const mapDispatchToProps = {
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);