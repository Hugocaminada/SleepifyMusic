import { authorize, refresh } from 'react-native-app-auth'

class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
      clientId: '6c5f435c69e9487592a1e005240e4b9c',
      redirectUrl: 'com.sleepifymusic:/callback',
      scopes: ['user-read-private', 'user-read-email'],
      serviceConfiguration: {
        authorizationEndpoint: 'https://accounts.spotify.com/authorize',
        tokenEndpoint:
          'https://us-central1-school-1554902478304.cloudfunctions.net/api/user/authentication',
      },
      usePKCE: false,
    }
  }

  async onLogin() {
    try {
      const result = await authorize(this.spotifyAuthConfig)
      return result
    } catch (error) {
      throw console.log(error)
    }
  }

  async refreshLogin(refreshToken) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken,
    })
    return result
  }
}

const authHandler = new AuthenticationHandler()

export default authHandler
