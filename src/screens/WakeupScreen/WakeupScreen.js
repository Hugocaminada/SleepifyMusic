import React, { useState } from 'react'
import TimepickerModal from '../../utils/TimepickerModal'
import AppHeader from '../../utils/AppHeader'
import { HorizontalPadding, YellowContainer } from './Containers'
import { SubText } from './Text'
import { Color } from '../../styles'
import ModularButton from '../../utils/ModularButton'
import { WakePlaylistData } from '../../utils/mockPlaylists'
import Playlists from '../../Playlists'

const WakeupScreen = () => {
  const [date, setDate] = useState(new Date())
  const [showModal, setShowModal] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setDate(currentDate)
  }

  return (
    <YellowContainer>
      {showModal && (
        <TimepickerModal
          date={date}
          onChange={onChange}
          close={() => setShowModal(false)}
        />
      )}
      <AppHeader />
      <HorizontalPadding>
        <SubText>What time do you want to wake up?</SubText>
        <ModularButton
          label={date.toLocaleTimeString('en-IT', { hour: '2-digit', minute: '2-digit' })}
          backgroundColor={Color.Pink}
          onPress={() => setShowModal(true)}
        />
        <SubText>What music do you want to wake up with?</SubText>
      </HorizontalPadding>
      <Playlists
        DATA={WakePlaylistData}
        type="wake"
      />

    </YellowContainer>
  )
}

export default WakeupScreen
