import React from 'react'
import { SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import {
  remote as SpotifyRemote,
} from 'react-native-spotify-remote'
import PropTypes from 'prop-types'
import ModularButton from '../../utils/ModularButton'

const PlaybackScreen = ({ accessToken }) => {

  const playSong = async () => {
    try {
      console.log(accessToken)
      await SpotifyRemote.connect(accessToken)
      console.log('2')
      console.log(SpotifyRemote.isConnectedAsync())
      await SpotifyRemote.playUri('spotify:track:6IA8E2Q5ttcpbuahIejO74')
      await SpotifyRemote.seek(58000)
    } catch (err) {
      console.log("Couldn't connect to Spotify", err)
    }
  }

  return (
    <SafeAreaView>
      <ModularButton onPress={playSong} label="test" />
    </SafeAreaView>
  )
}

PlaybackScreen.propTypes = {
  accessToken: PropTypes.string.isRequired,
}


const mapStateToProps = (state) => ({
  accessToken: state.authentication.accessToken,
})

export default connect(mapStateToProps)(PlaybackScreen)
