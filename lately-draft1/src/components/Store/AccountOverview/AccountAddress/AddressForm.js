import React, { Component } from 'react';
import './AddressForm.css';
import axios from 'axios';
import { getUserInfo } from '../../../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import ShopNavbar from '../../../Navbar/ShopNavbar';
import closewindow from './AccountAssets/closewindow.svg';


class AddressForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            userState: '',
            zip: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    updateAddress() {
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            userState: this.state.userState,
            zip: this.state.zip
        }

        axios.post('/api/account/address/update', data)
            .then(res => {
                alert('address added')

            })
    }

    handleChange(e, formfield) {
        this.setState({
            [formfield]: e
        })
    }

    render() {
        const user = this.props.user;
        if(!this.props.show){
            return null;
        }
        return (
            <div className='address_form_main'>
                <div className='address_form_parent'>
                    <div className='float_away'>
                        <img src={closewindow} className='address_form_icon_size' onClick={this.props.onClose}/>
                    </div>
                    <div className='address_form_header'>
                        <h1>ADD NEW ADDRESS</h1>
                    </div>
                    <div className='address_form_child'>
                        <div className='address_form_stacking'>
                            FIRST NAME
<input type='text' className='input_classname' onChange={(e) => this.handleChange(e.target.value, 'firstName')}></input><br />
                        </div>
                        <div className='address_form_stacking'>
                            LAST NAME
<input type='text' className='input_classname' onChange={(e) => this.handleChange(e.target.value, 'lastName')} /><br />
                        </div>
                        <div className='address_form_stacking'>
                            ADDRESS
<input type='text' className='input_classname' onChange={(e) => this.handleChange(e.target.value, 'address')} /><br />
                        </div>
                        <div className='address_form_stacking'>
                            CITY
<input type='text' className='input_classname' onChange={(e) => this.handleChange(e.target.value, 'city')} /><br />
                        </div>
                        <div className='address_form_stacking'>
                            STATE
<input type='text' className='input_classname' onChange={(e) => this.handleChange(e.target.value, 'userState')} /><br />
                        </div>
                        <div className='address_form_stacking'>
                            ZIP
<input type='text' className='input_classname' onChange={(e) => this.handleChange(e.target.value, 'zip')} /><br />
                        </div>
                        <div className='center_btn'>
                            <p className='add_address_btn' onClick={() => this.updateAddress()}>ADD ADDRESS</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    getUserInfo: getUserInfo,
}


export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);