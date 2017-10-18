import React, { Component } from 'react';
import './ProductView.css';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';

class ProductView extends Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('/api/product/:id')
      .then(res => {
        this.setState({
          product: res.data
        })
      })
  }

  render() {
    return (
      <div>
        <Navbar className='nav_fix' />
        <div className='main_parent'>
          <div className='product_parent'>
            {this.state.products === 0 ? <p>Loading...</p> : this.state.products.map((product, index) => {
              return (
                <div>
                  <div>
                    <img src={product.product_image} className='image_styles' />
                  </div>
                  <p>{product.product_name}</p>
                  <p>{product.product_description}</p>
                  <p>{product.product_price}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductView;
