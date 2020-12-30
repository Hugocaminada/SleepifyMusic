import React, { useState } from 'react'
import { Switch, TouchableOpacity, View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Slider from '@react-native-community/slider'
import AppHeader from '../../utils/AppHeader'
import {
  BlueContainer, HorizontalPadding, ButtonsContainer, SettingsContainer,
} from './Containers'
import {
  HeaderText, BigHeaderText, SubText, SettingsText,
} from './Text'
import ModularButton from '../../utils/ModularButton'
import { Color } from '../../styles'
import Playlists from '../../Playlists'
import { SleepPlaylistData } from '../../utils/mockPlaylists'

const SleepScreen = ({ sleepPlaylist }) => {
  const [playing, setPlaying] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [fadeAmount, setFadeAmount] = useState(30)

  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <BlueContainer>
      <AppHeader />
      <HorizontalPadding>
        <ButtonsContainer>
          <ModularButton
            label={playing ? 'Stop Sleepify' : 'Start Sleepify'}
            backgroundColor={Color.Pink}
            onPress={() => setPlaying((prevState) => !prevState)}
            disabled={!sleepPlaylist}
          />
        </ButtonsContainer>

        { showSettings ? (
          <>
            <TouchableOpacity
              onPress={() => setShowSettings(false)}
            >
              <SettingsText>Hide settings</SettingsText>
            </TouchableOpacity>
            <SettingsContainer>
              <HeaderText>
                The music will stop after {fadeAmount} minutes
              </HeaderText>
              <Slider
                style={{ width: '100%', height: 40 }}
                minimumValue={5}
                maximumValue={60}
                step={5}
                minimumTrackTintColor={Color.Pink}
                maximumTrackTintColor="#000000"
                value={fadeAmount}
                onValueChange={setFadeAmount}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <View>
                  <HeaderText>Enable slow fade</HeaderText>
                  <SubText>Let the music slowly fade out 5 minutes before the set time</SubText>
                </View>
                <Switch
                  trackColor={{ false: Color.Black, true: Color.Pink }}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </SettingsContainer>
          </>
        ) : (
          <TouchableOpacity
            onPress={() => setShowSettings(true)}
          >
            <SettingsText>Show settings</SettingsText>
          </TouchableOpacity>
        )}
        <BigHeaderText>What music do you want to fall asleep to?</BigHeaderText>
      </HorizontalPadding>
      <Playlists
        DATA={SleepPlaylistData}
        type="sleep"
      />
    </BlueContainer>
  )
}

SleepScreen.propTypes = {
  sleepPlaylist: PropTypes.string.isRequired,
}


const mapStateToProps = (state) => ({
  sleepPlaylist: state.playlistsReducer.sleepPlaylist,
})

export default connect(mapStateToProps)(SleepScreen)
