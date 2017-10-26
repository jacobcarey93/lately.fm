import React, { Component } from 'react';
import './AdminArtistManager.css';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';

class AdminArtistManager extends Component {
  constructor(){
    super()
    this.state = {
      artist_name: '',
      artist_image: '',
      artist_summary: ''
    }

    this.handleNameChange = this.handleNameChange.bind( this );
    this.handleImageChange = this.handleImageChange.bind( this );
    this.handleSummaryChange = this.handleSummaryChange.bind( this );
    this.addArtist = this.addArtist.bind( this );

  }

  handleNameChange( event ) {
    this.setState({ artist_name: event.target.value }) 
  }

  handleImageChange( event ) {
    this.setState({ artist_image: event.target.value }) 
  }

  handleSummaryChange( event ) {
    this.setState({ artist_summary: event.target.value }) 
  }

  addArtist(){
    axios.post('/api/admin/artist', {
      artist_name: this.state.artist_name,
      artist_image: this.state.artist_image,
      artist_summary: this.state.artist_summary
    })
    .then( res => {
      alert('artist added')
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <p>AdminArtistManager</p>
        <p>Artist Name: <input onChange={this.handleNameChange}></input></p>
        <p>Artist Image Url: <input onChange={this.handleImageChange}></input></p>
        <p>Artist Summary: <input onChange={this.handleSummaryChange}></input></p>
        <button onClick={this.addArtist}>ADD</button>
      </div>
    );
  }
}

export default AdminArtistManager;
