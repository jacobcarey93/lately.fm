import React, { Component } from 'react';
import './Footer.css';
import Navbar from '../Navbar/Navbar';
import Lately_03 from '../../assets/Lately_03.mp4'
import facebook from '../Navbar/ContactSvg/facebook.svg';
import twitter from '../Navbar/ContactSvg/twitter.svg';
import instagram from '../Navbar/ContactSvg/instagram.svg';
import soundcloud from '../Navbar/ContactSvg/soundcloud.svg';
import spotify from '../Navbar/ContactSvg/spotify.svg';


class Footer extends Component {
  render() {
    return (
      <div className='footer_main'>
        <div>
          <a href='https://twitter.com/latelyfm'><img src={twitter} className='footer_contacts' alt='twitter' /></a>
          <a href='https://www.instagram.com/lately.fm/'><img src={instagram} className='footer_contacts' alt='instagram' /></a>
          <a href='https://www.facebook.com/latelyfm'><img src={facebook} className='footer_contacts' alt='facebook' /></a>
          <a href='https://soundcloud.com/latelyfm'><img src={soundcloud} className='footer_contacts' alt='soundcloud' /></a>
          <a href='ttps://open.spotify.com/user/lately.fm'><img src={spotify} className='footer_contacts' alt='spotify' /></a>
        </div>
        <div>
          <p>LATELY.FM ESTABLISHED IN 2016</p>
        </div>
      </div>
    );
  }
}

export default Footer;