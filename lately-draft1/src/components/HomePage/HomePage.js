import React, { Component } from 'react';
import './HomePage.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';

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


  render() {
    return (
      <div className='main'>
        <Navbar className='nav_fix' />
        <div className='main_parent'>
          <div className='review_parent'>
            {this.state.reviews === 0 ? <p>Loading...</p> : this.state.reviews.map((review, index) => {
              return (
                <div>
                  <div>
                    <img src={review.album_image} className='image_styles' />
                  </div>
                  <p>{review.artist_name}</p>
                  <p>{review.review_content}</p>
                </div>
              )
            })}
          </div>
          <div className='review_parent'>
            {this.state.artists === 0 ? <p>Loading...</p> : this.state.artists.map((artist, index) => {
              return (
                <div>
                  <div>
                    <img src={artist.artist_image} className='image_styles' />
                  </div>
                  <p>{artist.artist_name}</p>
                  <p>{artist.artist_summary}</p>
                </div>
              )
            })}
          </div>
          <div className='review_parent'>
            {this.state.videos === 0 ? <p>Loading...</p> : this.state.videos.map((video, index) => {
              return (
                <div>
                  <div>
                    {/* <img src={video.video_url} className='image_styles' /> */}
                    <video playsInline className='video-styles'>
                      <source src={video.video_url} type='video/mp4' />
                    </video>
                  </div>
                  <p>{video.video_name}</p>
                  <p>{video.video_description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
