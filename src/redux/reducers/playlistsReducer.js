import { SET_SLEEP_PLAYLIST, SET_WAKE_PLAYLIST } from '../actions/types'

const initialState = {
  sleepPlaylist: '',
  wakePlaylist: '',
}

const playlistsReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case SET_SLEEP_PLAYLIST:
      return {
        ...state,
        sleepPlaylist: action.id,
      }
    case SET_WAKE_PLAYLIST:
      return {
        ...state,
        wakePlaylist: action.id,
      }
  }
  return state
}

export default playlistsReducer
