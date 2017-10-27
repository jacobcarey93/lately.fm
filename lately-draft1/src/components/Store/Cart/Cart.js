import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import Stripe from '../../Stripe/Stripe';
import { Link } from 'react-router-dom';

class Cart extends Component {

  render() {
    const cart = this.props.cart;


    return (
      <div className='cart_product_main'>
        {cart.length === 0 ? <p> </p> : cart.map((product, index) => {
          return (
            <div className={cart.length === 0 ? 'hide_product_parent' : 'cart_product_parent'} key={index}>
              <div className="cart_product_child">
                <img alt={product.product_name} src={product.product_image} className='cart_product_image' />
                <p className='cart_product_text'>{product.product_name}<br />{product.product_price}</p>
              </div>
            </div>
           )
          })} 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { 
    cart: state.cart
   };
}
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);