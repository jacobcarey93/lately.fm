import React, { Component } from 'react';
import './ArtistsHome.css';
import Navbar from '../../Navbar/Navbar';
import axios from 'axios';

class ArtistsHome extends Component {
  constructor(){
    super()

    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    axios.get('/api/artists')
      .then(res => {
        this.setState({
          artists: res.data
        })
      })
    }


  render() {
    return (
      <div>
        <Navbar className='nav_fix'/>
        <div className='main_parent'>
        <div className='artist_parent'>
          {this.state.artists === 0 ? <p>Loading...</p> : this.state.artists.map((artist, index) => {
            return (
              <div>
                <div>
                  <img src={artist.artist_image} className='image_styles' />
                </div>
                <p>{artist.artist_name}</p>
                <p>{artist.artist_summary}</p>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    );
  }
}

export default ArtistsHome;
