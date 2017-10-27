import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Checkout.css';
// import { removeProductFromCart } from '../../../ducks/reducer';
import ShopNavbar from '../../Navbar/ShopNavbar';
import Stripe from '../../Stripe/Stripe';

class Checkout extends Component {
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

    removeProductFromCart(product) {
        this.props.removeProductFromCart(product);
    }


    render() {
        const cart = this.props.cart;
        const str = JSON.stringify(this.props.cart)


        return (
            <div className='checkout_main'>
                <ShopNavbar />
                <div className='checkout_header'>CHECKOUT</div>
                {cart.length === 0 ? <p> </p> : cart.map((product, index) => {
                    return (
                        <div className='checkout_teen'>
                            <div className={cart.length === 0 ? 'hide_checkout_parent' : 'checkout_parent'}>
                                <div className="checkout_child">
                                    <img alt={product.product_name} src={product.product_image} className='checkout_product_image' />
                                    <div className='align_text'>
                                        <p className='checkout_product_text'>{product.product_name}</p>
                                        <p className='checkout_product_text'>{product.product_price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className='checkout_total_div'>
                    {/* <h2 className='checkout_total'>TOTAL<hr /></h2> */}
                    <div className='checkout_total'>{this.state.checkoutCart.length === 0 ? '' : this.state.checkoutCart.reduce((sum, value) => {
                        return (
                            <div>
                                <h2 className='checkout_total'>TOTAL<hr /></h2>
                                <h2 className='total_amount'>{'$' + (sum + value)}</h2>
                            </div>
                        )
                    })
                    }</div>
                    <div className='stripe_div'>
                        <Stripe />
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { cart: state.cart };
}
const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
