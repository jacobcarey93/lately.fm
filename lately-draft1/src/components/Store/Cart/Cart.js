import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Cart.css';
import { removeProductFromCart, updateCart } from '../../../ducks/reducer';
import Stripe from '../../Stripe/Stripe';
import { Link } from 'react-router-dom';

class Cart extends Component {

  removeProductFromCart(product) {
    this.props.removeProductFromCart(product);
  }

  render() {
    const cart = this.props.cart;
    // console.log(this.props.cart)


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
          {console.log('this is the cart' + cart)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('this is whats on state.cart' + state.cart)
  return { 
    cart: state.cart
   };
}
const mapDispatchToProps = {
  removeProductFromCart: removeProductFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);