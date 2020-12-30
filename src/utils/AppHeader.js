import React from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Padding, Color } from '../styles'
import {
  setAccessToken,
  setRefreshToken,
} from '../redux/authentication/authenticationSlice'

const AppHeader = (props) => {

  const MusicNoteContainer = styled.View`
      aspectRatio: 0.9; /* 106/118 = 0.89 */
      height: 15px
      right: 23px;
      top: 5px;
  `
  const MusicNote = styled.Image`
      height: 20px;
      resizeMode: contain;
  `

  const HeaderContainer = styled.View`
      paddingVertical: ${Padding.XS}px;
      paddingHorizontal: ${Padding.L}px;
      flexDirection: row;
      justifyContent: center;
  `

  const resetApp = () => {
    props.setRefreshToken({ refreshToken: '' })
    props.setAccessToken({ accessToken: '' })
  }

  return (
    <TouchableWithoutFeedback
      onLongPress={resetApp}
      delayLongPress={2000}
    >
      <HeaderContainer>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: Color.Black,
          }}
        >
          Sleepify Music
        </Text>
        <MusicNoteContainer>
          <MusicNote source={require('../images/music-note.png')} />
        </MusicNoteContainer>

      </HeaderContainer>
    </TouchableWithoutFeedback>

  )
}

const mapDispatchToProps = {
  setAccessToken,
  setRefreshToken,
}

export default connect(
  '',
  mapDispatchToProps,
)(AppHeader)
