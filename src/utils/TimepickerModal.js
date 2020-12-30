import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import Modal from 'react-native-modal'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Color, Padding } from '../styles'
import ModularButton from './ModularButton'

const TimepickerModal = ({ onChange, date, close }) => {

  const ModalContainer = styled.SafeAreaView`
    backgroundColor: ${Color.Pink};
    borderRadius: 4px;
  `

  const Header = styled.Text`
    font-size: 20px;
    color: ${Color.Yellow};
    font-weight: bold;
    textAlign: center;
    paddingTop: ${Padding.S}px;
  `

  // Spacer needed because padding on ModalContainer jumps back when interacting with DateTimePicker
  const Spacer = styled.View`
    height: ${Padding.S}px;
  `

  return (
    <Modal
      isVisible
      backdropColor="black"
      backdropOpacity={0.4}
      onBackdropPress={close}
    >
      <ModalContainer>
        <Header>What time do you want to wake up?</Header>
        <>
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour
            minuteInterval={5}
            onChange={onChange}
            customStyles={{
              datePicker: {
                justifyContent: 'center',
              },
            }}
          />
        </>
        <ModularButton
          label="Set"
          onPress={close}
          width="80%"
        />
        <Spacer />
      </ModalContainer>
    </Modal>
  )
}


TimepickerModal.propTypes = {
  onChange: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  close: PropTypes.func.isRequired,
}

export default TimepickerModal
