import React, { Component } from 'react';
import './PlaylistHome.css';
import axios from 'axios';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import SpotifyPlayer from 'react-spotify-player';
import { Link } from 'react-router-dom';
import PlaylistSpecific from '../PlaylistSpecific/PlaylistSpecific';
import { setPlaylistsOnRedux } from '../../../ducks/reducer';
import { connect } from 'react-redux';

class PlaylistHome extends Component {
  constructor() {
    super()

    this.state = {
      playlists: [],
      playlistModalVisible: false,
      modalPlaylistUri: [],
    }

    this.showPlaylistModal = this.showPlaylistModal.bind(this);
    this.setModalPlaylist = this.setModalPlaylist.bind(this);
  }

  componentDidMount() {
    axios.get('/api/playlists')
      .then(playlists => {
        this.setState({
          playlists: playlists.data
        })
        this.props.setPlaylistsOnRedux(playlists.data)
      })
  }

  showPlaylistModal() {
    this.setState({
      playlistModalVisible: !this.state.playlistModalVisible
    })
  }

  setModalPlaylist(playlist_uri) {
    if (this.state.playlists === []) {
      console.log('loading..')
    } else {
      this.setState({
        modalPlaylistUri: playlist_uri
      })
    }
  }

  render() {
    const size = {
      width: '100%',
      height: '100%',
    }
    const view = 'list';
    const theme = 'white';

    const playlists = this.props.playlists

    return (
      <div className='playlists_main'>
        <Navbar />

        <div className='playlists_header'>PLAYLISTS</div>
        <div className='playlists_parent'>

          {/* spotify player modal */}
          <div className={this.state.playlistModalVisible ? 'modal_playlist_main open_modal_main' : 'modal_playlist_main'}>

            <div className={this.state.playlistModalVisible ? 'modal_playlist_parent open_modal_parent' : 'modal_playlist_parent'}>
              <SpotifyPlayer
                uri={this.state.modalPlaylistUri}
                size={size}
                view={view}
                theme={theme}
              />

              {/* buttons */}
              <Link to='/homepage'>
                <div>
                  <p className={this.state.playlistModalVisible ? 'modal_btn open_btn' : 'modal_btn'}>ADD TO SIDE BAR</p>
                </div>
              </Link>
              <div>
                <p className={this.state.playlistModalVisible ? 'modal_btn open_btn' : 'modal_btn'} onClick={this.showPlaylistModal}>CLOSE</p>
              </div>
            </div>
          </div>
          {playlists === 0 ? <p>loading..</p> : playlists.map((playlist, index) => {
            return (
              <div>

                {/* dates */}
                <div className={this.state.playlistModalVisible ? 'hide_dates' : 'playlists_child'}>
                  <div onClick={this.showPlaylistModal}>
                    <h2 onClick={() => this.setModalPlaylist(playlist.playlist_uri)} className='playlists_child'><u>{playlist.playlist_date}</u></h2>
                  </div>
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

function mapStateToProps(state) {
  return {
    playlists: state.playlists,
  };
}
const mapDispatchToProps = {
  setPlaylistsOnRedux: setPlaylistsOnRedux
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistHome); 