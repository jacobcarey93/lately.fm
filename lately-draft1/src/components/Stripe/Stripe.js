import React, { Component } from 'react';
import './Stripe.css';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './StripeKey';
import axios from 'axios';
import StripeButton from '../Stripe/StripeButton'
import { connect } from 'react-redux';

class Stripe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checkoutCart: [],
    }
  }

  componentDidMount() {
    var tempArr = []
    this.props.cart.map((product, index) => {
      tempArr.push(parseInt(product.product_price.replace(/[^0-9]/, ''), 10))
    })
    this.setState({
      checkoutCart: tempArr
    })
  }


  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('http://localhost:3535/api/payment', { token, amount: 100 }).then(response => {
      alert('we are in business')
    });
  }

  render() {
    const cart = this.props.cart

    return (
      <div>{this.state.checkoutCart.length === 0 ? '' : this.state.checkoutCart.reduce((sum, value) => {
        return (
          <div className="App">
            <div className="App-header">
            </div>
            <StripeCheckout
              token={this.onToken}
              stripeKey={stripe.pub_key}
              amount={(sum + value) * 100 } 
              /* billingAddress={true} */
              shippingAddress={true}
              >
              <div>
                <StripeButton />
              </div>
            </StripeCheckout>
          </div>
        )
      })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cart: state.cart };
}
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Stripe);