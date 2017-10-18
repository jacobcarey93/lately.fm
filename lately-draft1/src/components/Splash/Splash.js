import React, { Component } from 'react';
import './Splash.css';
import Lately_01 from '../../assets/Lately_01.mp4';

class Splash extends Component {
    render() {
        return (
            <div>
                <video autoPlay loop muted playsInline className='video-background'>
                    <source src={Lately_01} type='video/mp4' />
                </video>
                <div className='flex'>
                    <a href='/homepage' className='link'>
                        <h1 className='spaced_out'>L  A  T  E  L  Y  .  F  M</h1>
                        <h3 className='slightly_spaced'>MUSIC YOU SHOULD BE LISTENING TO.</h3>
                    </a>
                </div>
            </div>
        );
    }
}

export default Splash;
