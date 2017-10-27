import axios from 'axios';

const initialState = {
    user: {},
    products: [],
    product: [],    
    cart: [],
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    userState: '',
    zip: '',
}

const GET_USER_INFO = 'GET_USER_INFO';
const SET_PRODUCTS_ON_REDUX = 'SET_PRODUCTS_ON_REDUX';
const SET_ONE_PRODUCT_ON_REDUX = 'SET_ONE_PRODUCT_ON_REDUX';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const UPDATE_USER_FIRST_NAME = 'UPDATE_USER_FIRST_NAME';
const UPDATE_USER_LAST_NAME = 'UPDATE_USER_LAST_NAME';
const UPDATE_USER_ADDRESS = 'UPDATE_USER_ADDRESS';
const UPDATE_USER_CITY = 'UPDATE_USER_CITY';
const UPDATE_USER_STATE = 'UPDATE_USER_STATE';
const UPDATE_USER_ZIP = 'UPDATE_USER_ZIP';



export default function reducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case GET_USER_INFO + '_FULFILLED':
        return Object.assign( {}, state, { user: action.payload } );
        case SET_PRODUCTS_ON_REDUX:
        return Object.assign({}, state, {products: action.payload});
        case SET_ONE_PRODUCT_ON_REDUX:
        return Object.assign({}, state, {product: action.payload});
        case ADD_PRODUCT_TO_CART:
        const newCart = state.cart.slice();
        newCart.push(action.payload);
        return Object.assign({}, state, {cart: newCart});
        case UPDATE_USER_FIRST_NAME:
        return Object.assign({}, state, {firstName: action.payload});
        case UPDATE_USER_LAST_NAME:
        return Object.assign({}, state, {lastName: action.payload});
        case UPDATE_USER_ADDRESS:
        return Object.assign({}, state, {address: action.payload});
        case UPDATE_USER_CITY:
        return Object.assign({}, state, {city: action.payload});
        case UPDATE_USER_STATE:
        return Object.assign({}, state, {userState: action.payload});
        case UPDATE_USER_ZIP:
        return Object.assign({}, state, {zip: action.payload});
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

  export function setOneProductOnRedux(val) {
    return {
      type: SET_ONE_PRODUCT_ON_REDUX,
      payload: val
    }
  }

  export function updateUserFirstName(val) {
    return {
      type: UPDATE_USER_FIRST_NAME,
      payload: val
    }
  }

  export function updateUserLastName(val) {
    return {
      type: UPDATE_USER_LAST_NAME,
      payload: val
    }
  }

  export function updateUserAddress(val) {
    return {
      type: UPDATE_USER_ADDRESS,
      payload: val
    }
  }

  export function updateUserCity(val) {
    return {
      type: UPDATE_USER_CITY,
      payload: val
    }
  }

  export function updateUserState(val) {
    return {
      type: UPDATE_USER_STATE,
      payload: val
    }
  }

  export function updateUserZip(val) {
    return {
      type: UPDATE_USER_ZIP,
      payload: val
    }
  }