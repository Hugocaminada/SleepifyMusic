/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState: {
    accessToken: null,
    refreshToken: null,
  },
  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload.refreshToken
    },
  },
})

export const {
  setAccessToken,
  setRefreshToken,
  setLoadingTrue,
  setLoadingFalse,
} = authenticationSlice.actions

export default authenticationSlice.reducer
