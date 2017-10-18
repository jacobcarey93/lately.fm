import React, { Component } from 'react';
// import logo from './communityBank.svg';
import './AccountCreator.css';
import { Link } from 'react-router-dom'

export default class AccountCreator extends Component {
    render() {
        return (
            <div className='App'>  
                {/* <img src={logo} alt=""/> */}
                <h1>Log in to make a purchase</h1>
                <Link to='/private'>
                <button>Login</button>
                </Link>
                {/* <a href={ process.env.REACT_APP_LOGIN }><button>Login</button></a> */}
            </div> 
        )
    }
}