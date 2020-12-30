import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Color, Padding } from '../styles'

const PlaylistItem = ({ item, onPress, selected, type }) => {

  let MainContainer
  if (type === 'sleep') {
    MainContainer = styled.TouchableOpacity`
    backgroundColor: ${selected === item.id ? Color.Yellow : Color.Pink};
    flexDirection: row;
    padding: ${Padding.XS}px;
  `
  } else if (type === 'wake') {
    MainContainer = styled.TouchableOpacity`
    backgroundColor: ${selected === item.id ? Color.Blue : Color.Pink};
    flexDirection: row;
    padding: ${Padding.XS}px;
  `
  }

  const TextContainer = styled.View`
    paddingHorizontal: ${Padding.XS}px;
    width: 100%;
  `

  const HeaderText = styled.Text`
    font-size: 20px;
    color: ${Color.White};
    font-weight: bold;
  `

  const SubText = styled.Text`
    width: 75%;
  `

  const ListIcon = styled.Image`
    height: 90px;
    width: 90px;
    borderRadius: 4px;
  `

  return (
    <MainContainer
      onPress={() => onPress(item.id)}
    >
      <ListIcon source={item.image} />
      <TextContainer>
        <HeaderText>{item.title}</HeaderText>
        <SubText>{item.description}</SubText>
      </TextContainer>
    </MainContainer>
  )
}

PlaylistItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default PlaylistItem
