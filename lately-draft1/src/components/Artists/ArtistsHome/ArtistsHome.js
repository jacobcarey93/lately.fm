import React, { Component } from 'react';
import './ArtistsHome.css';
import Navbar from '../../Navbar/Navbar'
import axios from 'axios';
import Footer from '../../Footer/Footer';
import { Link } from 'react-router-dom';

class ArtistsHome extends Component {
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
      <div className='home_artists_main'>
      <Navbar className='nav_fix' />
      <div className='home_artists_parent'>
        <div className='home_artist_header'>ARTISTS</div>
        {this.state.artists === 0 ? <p>loading..</p> : this.state.artists.map((artist, index) => {
          return (
            <Link to={`/artists/${artist.artist_id}`}>
            <div className='home_highlight_artist'>
              <div className='home_artist_styles'>
                <div>
                <img src={artist.artist_image} className='home_artist_image_styles' alt={artist.artist_name}/>
                </div>
                <h2>{artist.artist_name}</h2>
              </div>
            </div>
            </Link>            
          )
        })}
      </div>
      <Footer />
    </div>
    );
  }
}

export default ArtistsHome;
