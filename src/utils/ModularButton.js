import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Color, Padding } from '../styles'

const ModularButton = ({
  label, backgroundColor, onPress, width, disabled,
}) => {
  const Touchable = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 4px;
    background-color: ${backgroundColor};
    height: 50px;
    width: ${width};
    box-shadow: ${disabled ? 'none' : '1px 1px 1px rgba(0,0,0, 0.3)'};
    opacity: ${disabled ? '0.7' : '1'};
    marginVertical: ${Padding.S}px;
`

  const ButtonText = styled.Text`
    font-size: 25px;
    color: ${Color.White};
    font-weight: bold;
  `

  return (
    <Touchable onPress={onPress} disabled={disabled}>
      <ButtonText>{label}</ButtonText>
    </Touchable>
  )
}

ModularButton.propTypes = {
  label: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  width: PropTypes.string,
  disabled: PropTypes.bool,
}

ModularButton.defaultProps = {
  backgroundColor: Color.Blue,
  width: '100%',
  disabled: false,
}

export default ModularButton
