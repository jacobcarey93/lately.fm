import React, { Component } from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import YouTube from 'react-youtube';
import Footer from '../Footer/Footer';

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
        this.setState({
          videos: res.data
        })
      })
  }

  _onReady(event) {
    event.target.pauseVideo();
  }


  render() {
    const opts = {
      height: '390',
      width: '600',
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
                  <img src={review.album_image} className='review_album_image' alt={review.artist_name} />
                </div>
              )
            })}
            <div className='review_header'><a href='/reviews'>REVIEWS</a></div>
          </div>
          <div className='big_daddy'>
            <div className='pic_container1'>
              <div><img src='http://content.acclaimmag.com/content/uploads/2016/01/toro-y-moi-503191b8d6888.jpg' className='image_size1' alt='some pic' /></div>
            </div>
            <div className='pic_container2'>
              <div><img src='https://storage.googleapis.com/relevant-magazine/2017/05/WashedOut1.jpg' className='image_size2' alt='some pic' /></div>
              <div><img src='https://pulpjuiced.files.wordpress.com/2017/08/maxresdefault.jpg' className='image_size2' alt='some pic' /></div>
              <div><img src='http://hvngrymag.com/wp-content/uploads/2015/07/fazerdaze.jpg' className='image_size2' alt='some pic' /></div>
              <div><img src='https://i.ytimg.com/vi/WbyyxIZ02Zs/maxresdefault.jpg' className='image_size2' alt='some pic' /></div>
            </div>
            <div className='review_header'><a href='/artists'>ARTISTS</a></div>
          </div>
          <div className='homepage_videos_parent'>
            <div className='video_header'><a href='/videos'>VIDEOS</a></div>
            {this.state.videos === 0 ? <p>loading..</p> : this.state.videos.map((video, index) => {
              return (
                <div className='homepage_highlight_video'>
                  <div className='homepage_video_styles'>
                    <YouTube
                      videoId={video.video_url}
                      opts={opts}
                      onReady={this._onReady}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default HomePage;