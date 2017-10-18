import React, { Component } from 'react';
import './AdminVideoManager.css';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';

class AdminVideoManager extends Component {
  constructor(){
    super()

    this.state = {
      video_name: '',
      video_description: '',
      video_date: '',
      video_url: ''
    }

    this.handleNameChange = this.handleNameChange.bind( this );
    this.handleUrlChange = this.handleUrlChange.bind( this );
    this.handleDescriptionChange = this.handleDescriptionChange.bind( this );
    this.handleDateChange = this.handleDateChange.bind( this );
    this.addVideo = this.addVideo.bind( this );

  }

  handleNameChange( event ) {
    this.setState({ video_name: event.target.value }) 
  }

  handleUrlChange( event ) {
    this.setState({ video_url: event.target.value }) 
  }

  handleDescriptionChange( event ) {
    this.setState({ video_description: event.target.value }) 
  }

  handleDateChange( event ) {
    this.setState({ video_date: event.target.value }) 
  }

  addVideo(){
    axios.post('/api/admin/videos', {
      video_name: this.state.video_name,
      videoUrl: this.state.video_url,
      video_description: this.state.video_description,
      video_date: this.state.video_date
    })
    .then( res => {
      alert('review added')
    })
  }

  render() {
    return (
      <div>
        <p>AdminVideoManager</p>
        <p>Video Name:<input onClick={this.handleNameChange}></input></p>
        <p>Video Url:<input onClick={this.handleUrlChange}></input></p>
        <p>Description:<input onClick={this.handleDescriptionChange}></input></p>
        <p>Date:<input onClick={this.handleDateChange}></input></p>
        <button onClick={this.addVideo}>ADD</button>
      </div>
    );
  }
}

export default AdminVideoManager;
