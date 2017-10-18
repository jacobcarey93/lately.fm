import React, { Component } from 'react';
import './StoreHome.css'
import { connect } from 'react-redux'
import axios from 'axios'

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

    render() {
        return (
            <div>
                <div>
                <h1>store</h1>
                </div>
                {this.state.products.length === 0 ? <p>Loading...</p> : this.state.products.map((product, index) => {
                    return (
                        <div key={index} className='main'>
                        <div> 
                        <img src={product.product_image} className='image_div'/>
                            <p>{product.product_name}</p>
                            <p>{product.product_price}</p>
                        </div>
                        </div>
                    )
                })}
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