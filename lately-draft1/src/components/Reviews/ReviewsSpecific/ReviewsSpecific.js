import React, { Component } from 'react';
import './ReviewsSpecific.css';
import Navbar from '../../Navbar/Navbar'
import axios from 'axios';

class ReviewsSpecific extends Component {
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
      <div className='spec_reviews_main'>
      <Navbar className='nav_fix' />
      <div className='spec_reviews_parent'>
        {this.state.reviews === 0 ? <p>loading..</p> : this.state.reviews.map((review, index) => {
          return (
            <div className='spec_highlight_review'>
              <div className='spec_review_styles'>
                <div>
                <img src={review.album_image} className='spec_image_styles'/>
                </div>
                <h2>{review.artist_name}</h2>
                <p>{review.review_date}</p>
              </div>
              <div className='spec_review_description'>{review.review_content}</div>
            </div>
          )
        })}
      </div>
    </div>
    );
  }
}

export default ReviewsSpecific;
