import React, { Component } from 'react';
import './ArtistsSpecific.css';
import Navbar from '../../Navbar/Navbar'
import axios from 'axios';

class ArtistsSpecific extends Component {
  constructor(){
    super()

    this.state = {
      artists: [],
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
      <div className='spec_artists_main'>
      <Navbar className='nav_fix' />
      <div className='spec_artists_parent'>
        <div className='spec_artist_header'>ARTISTS</div>
        {this.state.artists === 0 ? <p>loading..</p> : this.state.artists.map((artist, index) => {
          return (
            <div className='spec_highlight_artist'>
              <div className='spec_artist_styles'>
                <div>
                <img src={artist.artist_image} className='spec_artist_image_styles' alt={artist.artist_name}/>
                </div>
                <h2>{artist.artist_name}</h2>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    );
  }
}

export default ArtistsSpecific;
