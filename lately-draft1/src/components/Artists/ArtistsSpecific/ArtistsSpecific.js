import React, { Component } from 'react';
import './ArtistsSpecific.css';
import Navbar from '../../Navbar/Navbar'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import back from '../../../assets/back.svg';

class ArtistsSpecific extends Component {
  constructor() {
    super()

    this.state = {
      artists: [],
    }
  }

  componentWillMount() {
    const artistID = this.props.match.params.artistid;

    axios.get(`/api/artists/${artistID}`)
      .then(res => {
        this.setState({
          artists: res.data
        });
      });
  }


  render() {
    return (
      <div className='spec_artists_main'>
        <Navbar className='nav_fix' />
          <Link to='/artists'>
            <div className='back_placement'>
              <img src={back} className='back_icon_size' alt='back' />
            </div>
          </Link>
        <div className='spec_artists_parent'>
          {this.state.artists === 0 ? <p>loading..</p> : this.state.artists.map((artist, index) => {
            return (
              <div className='spec_artist_header'>
                {artist.artist_name.toUpperCase()}
              </div>
            )
          })}
          {this.state.artists === 0 ? <p>loading..</p> : this.state.artists.map((artist, index) => {
            return (
              <div className='spec_highlight_artist'>
                <div className='spec_artist_styles'>
                  <div className='spec_image_div'>
                    <img src={artist.artist_image} className='spec_artist_image_styles' alt={artist.artist_name} />
                  </div>
                  <h2>{artist.artist_summary}</h2>
                </div>
              </div>
            )
          })}
          <Footer />
        </div>
      </div>
    );
  }
}

export default ArtistsSpecific;
