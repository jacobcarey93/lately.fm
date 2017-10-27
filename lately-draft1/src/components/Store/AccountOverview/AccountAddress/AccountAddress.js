import React, { Component } from 'react';
import './AccountAddress.css';
// import axios from 'axios';
import { getUserInfo, updateUserFirstName, updateUserLastName, updateUserAddress, updateUserCity, updateUserState, updateUserZip } from '../../../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ShopNavbar from '../../../Navbar/ShopNavbar';
import AddressForm from './AddressForm';

class AccountAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            addressFormVisible: false,
        }

        this.showModal = this.showModal.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    showModal() {
        this.setState({
            addressFormVisible: !this.state.addressFormVisible
        })
    }

    render() {
        const user = this.props.user;
        return (
            <div className='account_address_main'>
                <ShopNavbar />
                <AddressForm show={this.state.addressFormVisible} onClose={this.showModal} />
                <div className='account_address_header'>ADDRESS</div>
                <div className='account_address_parent'>
                    <div className='account_address_child'>
                        <Link to='/account'>
                            <h2><u>RETURN TO ACCOUNT </u></h2>
                        </Link>
                        {/* <Link to='/addressform'> */}
                        <p className='account_address_view_addresses_btn' onClick={this.showModal}>ADD NEW ADDRESS</p>
                        {/* </Link> */}
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("this is the state", state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(AccountAddress);