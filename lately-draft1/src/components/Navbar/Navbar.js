import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import './Navbar.css';
import video from '../../assets/video.svg'
import about from '../../assets/about.svg'
import artists from '../../assets/artists.svg'
import contact from '../../assets/contact.svg'
import playlists from '../../assets/playlists.svg'
import records from '../../assets/records.svg'
import review from '../../assets/review.svg'
import shop from '../../assets/shop.svg'


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideVisible: false,
      xMarksTheBurger: false,
      theCons: false,
    }

    this.openSlide = this.openSlide.bind( this );
    this.crissCross = this.crissCross.bind( this );
    this.bringInTheCons = this.bringInTheCons.bind( this );

  }

  openSlide() {
    this.setState({
      slideVisible: !this.state.slideVisible
    })
  }

  crissCross(){
    this.setState({
      xMarksTheBurger: !this.state.xMarksTheBurger
    })
  }

  bringInTheCons(){
    this.setState({
      theCons: !this.state.theCons
    })
  }


  render() {
    return (

      <div className={this.state.slideVisible ? 'slide open' : 'slide'} >
      <div className="head_parent_container orange-gradient">
        <div className="head_child_container">
          <div className="head_child_left">
            <span className="head_title lato">LATELY.FM</span>
          </div>
          <div className='head_child_right'>
            <div>
              <img className="search_img" src='http://www.iconsdb.com/icons/preview/white/search-12-xxl.png' alt="search" />
            </div>
            <div className="container" onClick={ this.openSlide }>
              <div className='container1' onClick={ this.crissCross }>
              <div className={ this.state.xMarksTheBurger ? 'change1' : 'bar1' }></div>
              <div className={ this.state.xMarksTheBurger ? 'change2' : 'bar2' }></div>
              <div className={ this.state.xMarksTheBurger ? 'change3' : 'bar3' }></div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className={this.state.slideVisible ? 'flexin_on_them_hoes' : 'hide_links'}>
        <div className='literally_just_stacking_stuff'>
        <a href='reviews'>{<img src={ review } className='icon_size' alt='reviews'/>}</a>
        <span>REVIEWS</span>
        </div>
        <div className='literally_just_stacking_stuff'>
        <a href='artists'>{<img src={ artists } className='icon_size' alt='artists'/>}</a>
        <span>ARTISTS</span>
        </div>
        <div className='literally_just_stacking_stuff'>
        <a href='playlists'>{<img src={ playlists } className='icon_size' alt='playlists'/>}</a>
        <span>PLAYLISTS</span>
        </div>
        <div className='literally_just_stacking_stuff'>
        <a href='videos'>{<img src={ video } className='icon_size' alt='video'/>}</a>
        <span>VIDEO</span>
        </div>
        <div className='literally_just_stacking_stuff'>
        <a href='#'>{<img src={ records } className='icon_size' alt='records'/>}</a>
        <span>LATELY RECORDS</span>
        </div>
        <div className='literally_just_stacking_stuff'>
        <a href='store'>{<img src={ shop } className='icon_size' alt='store'/>}</a>
        <span>STORE</span>
        </div>
        <div className='literally_just_stacking_stuff'>
        <a href='about'>{<img src={ about } className='icon_size' alt='about'/>}</a>
        <span>ABOUT</span>
        </div>
        <div className='literally_just_stacking_stuff'>
        <a href='contact'>{<img src={ contact } className='icon_size' alt='contact'/>}</a>
        <span>CONTACT</span>
        </div>
        </div>
      </div>
    )
  }
}