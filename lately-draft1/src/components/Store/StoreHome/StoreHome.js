import React, { Component } from 'react';
import './StoreHome.css';
import { connect } from 'react-redux';
import axios from 'axios';
import addtocart from './StoreAssets/addtocart.svg';
import ShopNavbar from '../../Navbar/ShopNavbar';


class StoreHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/shop')
            .then(res => {
                console.log(res.data)
                this.setState({
                    products: res.data
                })
            })
    }

    chooseProduct(id) {
        axios.get(`/api/products/${id}`)
            .then()
    }

    render() {
        return (
            <div className='store_home_main'>
                <ShopNavbar className='nav_fix' />
                <div className='store_home_parent'>
                    <div className='store_home_header'>STORE</div>
                    <div className='store_home_grid'>
                        {this.state.products.length === 0 ? <p>Loading...</p> : this.state.products.map((product, index) => {
                            return (
                                <div className='store_home_highlight'>
                                    <div className='store_home_styles'>
                                        <div>
                                            <img src={product.product_image} className='store_home_image_styles' />
                                        </div>
                                        <div className='store_home_add_to_cart'>
                                            <div className='im_running_out_of_names'>{product.product_name}<br />{product.product_price}</div>
                                            <img src={addtocart} className='store_home_add_to_cart_icon' />
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

function mapStateToProps({ products }) {
    return {
        products
    }
}

export default connect(mapStateToProps)(StoreHome);