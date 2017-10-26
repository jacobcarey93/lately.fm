import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setOneProductOnRedux, addProductToCart } from '../../../ducks/reducer';
import './Details.css';
import ShopNavbar from '../../Navbar/ShopNavbar';

class Details extends Component {

  componentWillMount() {
    const productID = this.props.match.params.productid;

    axios.get(`/api/product/${productID}`)
      .then(product => {
        // console.log(product.data)
        this.props.setOneProductOnRedux(product.data);
      });
  }

  addToCart(product) {
    this.props.addProductToCart(product);
  }

  render() {
    const product = this.props.product;

    return (
      <div className='home_artists_main'>
        <ShopNavbar className='nav_fix' />
        <div className='home_artists_parent'>
          <div className='home_artist_header'></div>
          {this.props.product.length === 0 ? <p>Loading...</p> : this.props.product.map((product, index) => {
            return (
              <div className='home_highlight_artist'>
                <div className='home_artist_styles'>
                  <div>
                    <img src={product.product_image} className='home_artist_image_styles' alt={product.product_name} />
                  </div>
                  <h2>{product.product_name}</h2>
                  <h2>{product.product_price}</h2>
                  <div className="addToCart" onClick={() => this.addToCart(product)}>Add to cart</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { product: state.product };
}
const mapDispatchToProps = {
  setOneProductOnRedux: setOneProductOnRedux,
  addProductToCart: addProductToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);