import React, { Component } from 'react';
import './VideosSpecific.css';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';
import YouTube from 'react-youtube';

class VideosSpecific extends Component {
  constructor() {
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
      <div className='spec_videos_main'>
        <Navbar className='nav_fix' />
        <div className='spec_videos_parent'>
          {this.state.videos === 0 ? <p>loading..</p> : this.state.videos.map((video, index) => {
            return (
              <div className='spec_highlight_video'>
                <div className='spec_video_styles'>
                  <YouTube
                    videoId={video.video_url}
                    opts={opts}
                    onReady={this._onReady}
                  />
                  <h2>{video.video_name}</h2>
                  <p>{video.video_date}</p>
                </div>
                <div className='spec_description'>{video.video_description}</div>
              </div>
            )
          })}

        </div>
      </div>
    );
  }
}

export default VideosSpecific;


