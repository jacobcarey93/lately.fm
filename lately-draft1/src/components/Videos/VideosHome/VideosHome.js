import React, { Component } from 'react';
import './VideosHome.css';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';

class VideosHome extends Component {
  constructor(){
    super()

    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    axios.get('/api/videos')
      .then(res => {
        this.setState({
          videos: res.data
        })
      })
    }

  render() {
    return (
      <div>
        <Navbar className='nav_fix' />
        <div className='main_parent'>
          <div className='video_parent'>
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

export default VideosHome;
