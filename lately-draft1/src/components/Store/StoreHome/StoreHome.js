import React, { Component } from 'react';
import './StoreHome.css';
import { connect } from 'react-redux';
import axios from 'axios';
import addtocart from './StoreAssets/addtocart.svg';
import ShopNavbar from '../../Navbar/ShopNavbar';
import { setProductsOnRedux, addProductToCart } from '../../../ducks/reducer';
// import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class StoreHome extends Component {
    // constructor(props) {
    //     super(props)
    // }


    componentDidMount() {
        axios.get('/api/shop')
            .then(products => {
                this.props.setProductsOnRedux(products.data);
            });
    }

    addToCart(product) {
        this.props.addProductToCart(product);
        toast('ADDED ')
    }

    render() {
        return (
            <div className='store_home_main'>
                <ShopNavbar className='nav_fix' />
                <div className='store_home_parent'>
                    <div className='store_home_header'>STORE</div>
                    <div className='store_home_grid'>
                        {this.props.products.length === 0 ? <p>Loading...</p> : this.props.products.map((product, index) => {
                            return (
                                <div className='store_home_highlight' key={index}>
                                    <div className='store_home_styles'>
                                        {/* <Link to={`/details/${product.product_id}`} > */}
                                        <div>
                                            <img src={product.product_image} className='store_home_image_styles' alt={product.product_name} />
                                        </div>
                                        {/* </Link> */}
                                        <div className='store_home_add_to_cart'>
                                            <div className='im_running_out_of_names'>{product.product_name}<br />{product.product_price}</div>
                                            <img src={addtocart} className='store_home_add_to_cart_icon' alt='add to cart' onClick={() => this.addToCart(product)} />
                                            <ToastContainer
                                                position="top-right"
                                                type="default"
                                                autoClose={2000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                pauseOnHover
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        products: state.products,
        cart: state.cart,
    };
}
const mapDispatchToProps = {
    setProductsOnRedux: setProductsOnRedux,
    addProductToCart: addProductToCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreHome); 