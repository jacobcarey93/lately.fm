import React, { Component } from 'react';
import './AccountOverview.css';
// import axios from 'axios';
import { getUserInfo } from '../../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class AccountOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    componentDidMount(){
        this.props.getUserInfo();
    }

    render() {
        const user = this.props.user;
        return (
            <div className=''>
                <h4>Account information:</h4>
                { user.id ? <img className='avatar' src={user.img} alt ='avatar'/> : null }
                <p>Username: { user.id ? user.user_name : null }</p>
                <p>Email: { user.id ? user.email : null }</p>
                <p>ID: { user.id ? user.auth_id : null }</p>
                <a href='http://localhost:3005/auth/logout'><button>Log out</button></a>
                <Link to='/shop'>
                <p>SHOP</p>
                </Link>
\            </div> 
        )
    }
}

function mapStateToProps(state){
    console.log("this is the state", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo } )(AccountOverview);