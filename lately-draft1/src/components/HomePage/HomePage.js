import React, { Component } from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import YouTube from 'react-youtube';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      artists: [],
      reviews: [],
      videos: [],
    }
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
        this.setState({
          reviews: res.data
        })
      })
    axios.get('/api/new/videos')
      .then(res => {
        videos: res.data
      })
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { 
        autoplay: 0
      }
    }
    return (
      <div className='main1'>
        <Navbar className='navbar' />
        <div className='main2'>
          <div className='child2'>
            {this.state.reviews === 0 ? <p>loading...</p> : this.state.reviews.map((review, index) => {
              return (
                <div>
                  <img src={review.album_image} className='review_album_image' />
                </div>
              )
            })}
            <div className='review_header'><a href='/reviews'>REVIEWS</a></div>
          </div>
          <div className='big_daddy'>
            <div className='pic_container1'>
              <div><img src='http://content.acclaimmag.com/content/uploads/2016/01/toro-y-moi-503191b8d6888.jpg' className='image_size1' /></div>
            </div>
            <div className='pic_container2'>
              <div><img src='https://storage.googleapis.com/relevant-magazine/2017/05/WashedOut1.jpg' className='image_size2' /></div>
              <div><img src='https://pulpjuiced.files.wordpress.com/2017/08/maxresdefault.jpg' className='image_size2' /></div>
              <div><img src='http://hvngrymag.com/wp-content/uploads/2015/07/fazerdaze.jpg' className='image_size2' /></div>
              <div><img src='https://i.ytimg.com/vi/WbyyxIZ02Zs/maxresdefault.jpg' className='image_size2' /></div>
            </div>
            <div className='review_header'>ARTISTS</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
