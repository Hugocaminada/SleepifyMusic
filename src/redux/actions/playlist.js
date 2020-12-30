import { SET_SLEEP_PLAYLIST, SET_WAKE_PLAYLIST } from './types'

export const setSleepPlaylistAction = (id) => (
  {
    type: SET_SLEEP_PLAYLIST,
    id,
  }
)

export const setWakePlaylistAction = (id) => (
  {
    type: SET_WAKE_PLAYLIST,
    id,
  }
)
