import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';
import HomePage from './components/HomePage/HomePage'
import Navbar from './components/Navbar/Navbar'


class App extends Component {
  render() {
    return (
      <div>
      {/* <Navbar /> */}
      { router } 
      </div>
    );
  }
}

export default App;
