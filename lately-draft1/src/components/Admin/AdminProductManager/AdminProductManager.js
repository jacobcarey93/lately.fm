import React, { Component } from 'react';
import './AdminProductManager.css';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';

class AdminProductManager extends Component {
  constructor(){
    super()

    this.state = {
      product_name: '',
      product_price: null,
      product_image: '',
      product_description: ''
    }

    this.handleNameChange = this.handleNameChange.bind( this );
    this.handlePriceChange = this.handlePriceChange.bind( this );
    this.handleImageChange = this.handleImageChange.bind( this );
    this.handleDescriptionChange = this.handleDescriptionChange.bind( this );

  }

  handleNameChange( event ) {
    this.setState({ product_name: event.target.value }) 
  }

  handlePriceChange( event ) {
    this.setState({ product_price: event.target.value }) 
  }

  handleImageChange( event ) {
    this.setState({ product_image: event.target.value }) 
  }

  handleDescriptionChange( event ) {
    this.setState({ product_description: event.target.value }) 
  }

  addProduct(){
    axios.post('/api/admin/product', {
      product_name: this.state.product_name,
      product_price: this.state.product_price,
      product_image: this.state.product_image,
      product_description: this.state.product_description
    })
    .then( res => {
      alert('product added')
    })
  }

  render() {
    return (
      <div>
        <p>AdminProductManager</p>
        <p>Product Name:<input onChange={this.handleNameChange}></input></p>
        <p>Product Price:<input onChange={this.handlePriceChange}></input></p>
        <p>Product Image:<input onChange={this.handleImageChange}></input></p>
        <p>Product Description:<input onChange={this.handleDescriptionChange}></input></p>
        <button onClick={this.addProduct}>ADD</button>
      </div>
    );
  }
}

export default AdminProductManager;
