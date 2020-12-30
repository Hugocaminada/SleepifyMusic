import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// Authentication handler
import authHandler from '../../utils/authenticationHandler'

// Redux imports
import {
  setAccessToken,
  setRefreshToken,
} from '../../redux/authentication/authenticationSlice'

// Navigations
import LoggedinNavigation from '../../navigation/loggedInNavigation'
import GuestNavigation from '../../navigation/guestNavigation'

const EntryScreen = (props) => {
  const { refreshToken, accessToken, authentication } = props

  const tryAutoLogin = async () => {
    const authenticationObject = await authHandler.refreshLogin(
      refreshToken,
    )
    props.setAccessToken({
      accessToken: authenticationObject.accessToken,
    })
  }

  if (refreshToken && !accessToken) {
    tryAutoLogin()
  }

  if (authentication.accessToken) {
    return <LoggedinNavigation />
  }

  return <GuestNavigation />

}

EntryScreen.propTypes = {
  refreshToken: PropTypes.string,
  accessToken: PropTypes.string,
  authentication: PropTypes.object.isRequired,
  setAccessToken: PropTypes.func.isRequired,
}

EntryScreen.defaultProps = {
  accessToken: null,
  refreshToken: null,
}

const mapStateToProps = (state) => ({
  authentication: state.authentication,
  accessToken: state.authentication.accessToken,
  refreshToken: state.authentication.refreshToken,
})

const mapDispatchToProps = {
  setAccessToken,
  setRefreshToken,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EntryScreen)
