import React, { Component } from 'react';
import './Stripe.css';
import StripeCheckout from 'react-stripe-checkout';
import stripe from './StripeKey';
import axios from 'axios';

class Stripe extends Component {
  onToken = (token) => {
    token.card = void 0;
    console.log('token', token);
    axios.post('http://localhost:3535/api/payment', { token, amount: 100 } ).then(response => {
      alert('we are in business')
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <StripeCheckout
          token={this.onToken}
          stripeKey={ stripe.pub_key }
          amount={10000000}
          
        />
      </div>
    );
  }
}

export default Stripe;
