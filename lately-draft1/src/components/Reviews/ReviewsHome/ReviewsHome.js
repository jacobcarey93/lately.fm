import React, { Component } from 'react';
import './ReviewsHome.css';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';

class ReviewsHome extends Component {
  constructor(){
    super()

    this.state = {
      reviews: []
    }
  }
  

  componentDidMount() {
    axios.get('/api/reviews')
      .then(res => {
        this.setState({
          reviews: res.data
        })
      })
    }

  render() {
    return (
      <div className='main'>
        <Navbar className='nav_fix'/>
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
        </div>
      </div>
    );
  }
}

export default ReviewsHome;
