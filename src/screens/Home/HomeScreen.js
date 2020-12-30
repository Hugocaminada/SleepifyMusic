import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {
  PinkContainer,
  ButtonsContainer,
  SleepingImageContainer,
  SleepingImage, YellowContainer,
} from './Containers'
import { WelcomeText, SubText } from './Text'
import authHandler from '../../utils/authenticationHandler'
import { setAccessToken, setRefreshToken } from '../../redux/authentication/authenticationSlice'
import LoadingModal from '../../utils/LoadingModal'
import AppHeader from '../../utils/AppHeader'
import ModularButton from '../../utils/ModularButton'
import { Color } from '../../styles'

const HomeScreen = (props) => {

  const [loading, setLoading] = useState(false)

  const onPressLogin = async () => {
    try {
      setLoading(true)
      const authenticationObject = await authHandler.onLogin()
      props.setAccessToken({ accessToken: authenticationObject.accessToken })
      props.setRefreshToken({
        refreshToken: authenticationObject.refreshToken,
      })
    } catch (e) {
      setLoading(false)
      console.log('something went wrong', e)
    }
  }

  return (
    <>
      <PinkContainer>
        {loading
          && <LoadingModal />}
        <AppHeader />
        <SleepingImageContainer>
          <SleepingImage source={require('../../images/sleeping.jpeg')} />
          <WelcomeText>Welcome to Sleepify Music</WelcomeText>
          <SubText>A musical alarm app that helps you fall asleep,</SubText>
          <SubText>and wake up again.</SubText>
        </SleepingImageContainer>
        <ButtonsContainer>
          <ModularButton
            onPress={onPressLogin}
            backgroundColor={Color.Blue}
            label="Use Spotify"
          />
          <ModularButton
            onPress={onPressLogin}
            backgroundColor={Color.Blue}
            label="Use Apple Music"
            disabled
          />
          <ModularButton
            onPress={onPressLogin}
            backgroundColor={Color.Blue}
            label="Use Deezer"
            disabled
          />
        </ButtonsContainer>
      </PinkContainer>
      <YellowContainer />
    </>
  )
}


HomeScreen.propTypes = {
  setAccessToken: PropTypes.func.isRequired,
  setRefreshToken: PropTypes.func.isRequired,
}
const mapStateToProps = (state) => ({
  authentication: state.authentication,
})

const mapDispatchToProps = { setAccessToken, setRefreshToken }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
