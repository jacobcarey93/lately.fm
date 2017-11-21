import axios from 'axios';

const initialState = {
  user: {},
  products: [],
  product: [],
  cart: [],
  playlists: [],
  playlist: [],
  currentPlaylist: [],
}

const GET_USER_INFO = 'GET_USER_INFO';
const SET_PRODUCTS_ON_REDUX = 'SET_PRODUCTS_ON_REDUX';
const SET_ONE_PRODUCT_ON_REDUX = 'SET_ONE_PRODUCT_ON_REDUX';
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
const SET_PLAYLISTS_ON_REDUX = 'SET_PLAYLISTS_ON_REDUX';
const SET_ONE_PLAYLIST_ON_REDUX = 'SET_ONE_PLAYLIST_ON_REDUX';
const SET_CURRENT_PLAYLIST = 'SET_CURRENT_PLAYLIST';



export default function reducer(state = initialState, action) {
  console.log('action ' + action)
  switch (action.type) {
    case GET_USER_INFO + '_FULFILLED':
    return Object.assign({}, state, { user: action.payload });
    case SET_PRODUCTS_ON_REDUX:
    return Object.assign({}, state, { products: action.payload });
    case SET_ONE_PRODUCT_ON_REDUX:
    return Object.assign({}, state, { product: action.payload });
    case ADD_PRODUCT_TO_CART:
    const newCart = state.cart.slice();
    newCart.push(action.payload);
    return Object.assign({}, state, { cart: newCart });
    
    case SET_PLAYLISTS_ON_REDUX:
    return Object.assign({}, state, { playlists: action.payload });
    case SET_ONE_PLAYLIST_ON_REDUX:
    return Object.assign({}, state, { playlist: action.payload });
    case SET_CURRENT_PLAYLIST:
    return Object.assign({}, state, { currentPlaylist: action.payload });
    
    default:
      return state;
  }
}


export function getUserInfo() {
  const userData = axios.get('/auth/me')
    .then(res => {
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


export function setPlaylistsOnRedux(val) {
  return {
    type: SET_PLAYLISTS_ON_REDUX,
    payload: val,
  }
}

export function setOnePlaylistOnRedux(val) {
  return {
    type: SET_ONE_PLAYLIST_ON_REDUX,
    payload: val,
  }
}

export function setCurrentPlaylist(val) {
  return {
    type: SET_CURRENT_PLAYLIST,
    payload: val,
  }
}