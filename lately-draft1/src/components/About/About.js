import React, { Component } from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';
import Lately_03 from '../../assets/Lately_03.mp4'

class About extends Component {
  render() {
    return (
      <div className='about_main'>
        <video autoPlay loop muted playsInline className='nav_video-background'>
          <source src={Lately_03} type='video/mp4' />
        </video>
        <Navbar className='nav_fix' />
        <div className='about_parent'>
          <div className='about_header'>ABOUT</div>
          <div className='about_content'>LATELY.FM MUSIC YOU SHOULD BE LISTENING TO</div>
          <br />
          <br />
          <div className='about_content'>This is a demo application ONLY. If you have any questions, or issues please contact the owner of this domain at jacob.n.carey93@gmail.com </div>
        </div>
      </div>
    );
  }
}

export default About;