import React, { Component } from 'react';
import './ReviewsHome.css';
import Navbar from '../../Navbar/Navbar'
import axios from 'axios';

class ReviewsHome extends Component {
  constructor(){
    super()

    this.state = {
      reviews: [],
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
      <div className='home_reviews_main'>
      <Navbar className='nav_fix' />
      <div className='home_reviews_parent'>
        <div className='home_review_header'>REVIEWS</div>
        {this.state.reviews === 0 ? <p>loading..</p> : this.state.reviews.map((review, index) => {
          return (
            <div className='home_highlight_review'>
              <div className='home_review_styles'>
                <div>
                <img src={review.album_image} className='home_image_styles' alt={review.artist_name}/>
                </div>
                <h2>{review.artist_name}</h2>
                <p>{review.review_date}</p>
              </div>
              <div className='home_review_description'>{review.review_content}</div>
            </div>
          )
        })}
      </div>
    </div>
    );
  }
}

export default ReviewsHome;
