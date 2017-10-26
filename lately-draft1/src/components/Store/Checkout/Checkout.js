import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Checkout.css';
import { removeProductFromCart } from '../../../ducks/reducer';

class Checkout extends Component {
constructor(props){
    super(props)
}

    removeProductFromCart(product) {
        this.props.removeProductFromCart(product);
    }

    render() {
        const cart = this.props.cart;
        console.log('this.props.cart' + this.props.cart)


        return (
            <div className='cart_product_main'>
                <div className='home_artist_header'>CHECKOUT</div>
                {cart.length === 0 ? <p> </p> : cart.map((product, index) => {
                    return (
                        <div className={cart.length === 0 ? 'hide_product_parent' : 'cart_product_parent'}>
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
    return { cart: state.cart };
}
const mapDispatchToProps = {
    removeProductFromCart: removeProductFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);