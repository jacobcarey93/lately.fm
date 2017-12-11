import React, { Component } from 'react';
import './PlaylistSpecific.css';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import SpotifyPlayer from 'react-spotify-player';
import { Link } from 'react-router-dom';
import { setOnePlaylistOnRedux, setCurrentPlaylist } from '../../../ducks/reducer';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class PlaylistSpecific extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPlaylist: [],

    }
  }

  componentDidMount() {
    const playlistID = this.props.match.params.playlistid;

    axios.get(`/api/playlists/${playlistID}`)
      .then(playlist => {
        this.setState({
          currentPlaylist: playlist.data
        })
        this.props.setOnePlaylistOnRedux(playlist.data)
      })
  }

  addPlaylist(playlist) {
    this.props.setCurrentPlaylist(playlist)
    toast('ADDED')
  }


  render() {
    const size = {
      width: '100%',
      height: '100%',
    }
    const view = 'list';
    const theme = 'white';

    const playlist = this.props.playlist

    return (
      <div className='spec_playlist_main'>
        {playlist === 0 ? <p>loading..</p> : playlist.map((playlist, index) => {
          return (
            <div className='spec_playlist_parent'>
              <SpotifyPlayer
                uri={playlist.playlist_uri}
                size={size}
                view={view}
                theme={theme}
              />

              {/* buttons */}
              {/* <Link to='/homepage'>
                <div>
                  <p className='add_to_player_btn' onClick={this.addPlaylist(playlist)}>ADD TO MUSIC PLAYER</p>
                </div>
              </Link> */}
              <Link to='/homepage'>
                <div>
                  <p className='add_to_player_btn'>CLOSE</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.playlist,
    currentPlaylist: state.currentPlaylist,
  };
}
// const mapDispatchToProps = {
//   setOnePlaylistOnRedux: setOnePlaylistOnRedux,
//   setCurrentPlaylist: setCurrentPlaylist
// }

export default connect(mapStateToProps, { setCurrentPlaylist, setOnePlaylistOnRedux })(PlaylistSpecific); 
