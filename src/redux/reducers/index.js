import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import authenticationSlice from '../authentication/authenticationSlice'
import playlistsReducer from './playlistsReducer'

const authenticationConfig = {
  key: 'authentication',
  storage: AsyncStorage,
  blacklist: ['accessToken'],
}

const rootReducer = combineReducers({
  playlistsReducer,
  authentication: persistReducer(authenticationConfig, authenticationSlice),
})

export default rootReducer
