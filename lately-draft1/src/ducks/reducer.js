import axios from 'axios';

const initialState = {
    user: {},
    products: [],
    cart: []
}

const GET_USER_INFO = 'GET_USER_INFO';
const SET_PRODUCTS_ON_REDUX = 'SET_PRODUCTS_ON_REDUX';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';


export default function reducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED':
        return Object.assign( {}, state, { user: action.payload } )
        case SET_PRODUCTS_ON_REDUX:
        return Object.assign({}, state, {products: action.payload});
        case ADD_PRODUCT_TO_CART:
        const newCart = state.cart.slice();
        newCart.push(action.payload);
        return Object.assign({}, state, {cart: newCart});
        default: 
        return state;
    }
}

export function getUserInfo(){
    const userData = axios.get('/auth/me')
    .then ( res => {
    return res.data
    })
    return {
    type: GET_USER_INFO,
    payload: userData
    }
}

export function setProductsOnRedux(val) {
    return {
      type: SET_PRODUCTS_ON_REDUX,
      payload: val
    }
  }
  
export function addProductToCart(val) {
    return {
      type: ADD_PRODUCT_TO_CART,
      payload: val
    }
  }