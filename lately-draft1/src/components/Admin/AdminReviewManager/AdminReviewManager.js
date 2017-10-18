import React, { Component } from 'react';
import './AdminReviewManager.css';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';

class AdminReviewManager extends Component {
  constructor(){
    super()

    this.state = {
      artist_name: '',
      album_image: '',
      review_content: '',
      review_date: ''
    }

    this.handleNameChange = this.handleNameChange.bind( this );
    this.handleImageChange = this.handleImageChange.bind( this );
    this.handleContentChange = this.handleContentChange.bind( this );
    this.handleDateChange = this.handleDateChange.bind( this );
    this.addReview = this.addReview.bind( this );

  }

  handleNameChange( event ) {
    this.setState({ artist_name: event.target.value }) 
  }

  handleImageChange( event ) {
    this.setState({ album_image: event.target.value }) 
  }

  handleContentChange( event ) {
    this.setState({ review_content: event.target.value }) 
  }

  handleDateChange( event ) {
    this.setState({ review_date: event.target.value }) 
  }

  addReview(){
    axios.post('/api/admin/reviews', {
      artist_name: this.state.artist_name,
      album_image: this.state.album_image,
      review_content: this.state.review_content,
      review_date: this.state.review_date
    })
    .then( res => {
      alert('review added')
    })
  }

  render() {
    return (
      <div>
        <p>AdminReviewManager</p>
        <p>Artist Name:<input onClick={this.handleNameChange}></input></p>
        <p>Album Image Url:<input onClick={this.handleImageChange}></input></p>
        <p>Review:<input onClick={this.handleContentChange}></input></p>
        <p>Date:<input onClick={this.handleDateChange}></input></p>
        <button onClick={this.addReview}>ADD</button>
      </div>
    );
  }
}

export default AdminReviewManager;
