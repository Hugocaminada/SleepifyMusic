import React, { useState, useCallback } from 'react'
import { SectionList } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PlaylistItem from './PlaylistItem'
import { Color, Padding } from '../styles'
import { setSleepPlaylistAction, setWakePlaylistAction } from '../redux/actions/playlist'

const Playlists = ({
  DATA, setSleepPlaylist, setWakePlaylist, sleepPlaylist, wakePlaylist, type,
}) => {

  const [selected, setSelected] = useState(type === 'sleep' ? sleepPlaylist : wakePlaylist)

  const onSelect = useCallback(
    (id) => {
      if (id !== selected) {
        setSelected(id)
        if (type === 'sleep') { setSleepPlaylist(id) } else { setWakePlaylist(id) }
      } else {
        setSelected('')
        if (type === 'sleep') { setSleepPlaylist('') } else { setWakePlaylist('') }
      }
    },
    [selected],
  )

  const MainContainer = styled.View`
    height: 75% 
  `

  const Line = styled.View`
    height: 0.5px;
    backgroundColor: ${Color.Black};
  `

  const SectionHeader = styled.View`
    backgroundColor: ${type === 'sleep' ? Color.Blue : type === 'wake' && Color.Yellow};
    flexDirection: row;
    justifyContent: space-between;
    padding: ${Padding.XS}px;
  `

  const SectionHeaderTitle = styled.Text`
    paddingTop: ${Padding.M}px;
    font-size: 12px;
    color: ${Color.Black};
    font-weight: bold;
  `

  return (
    <MainContainer>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlaylistItem
            item={item}
            onPress={onSelect}
            selected={selected}
            type={type}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <SectionHeader>
            <SectionHeaderTitle>{title}</SectionHeaderTitle>
            <SectionHeaderTitle>import</SectionHeaderTitle>
          </SectionHeader>
        )}
        ItemSeparatorComponent={() => (
          <Line />
        )}
        extraData={selected}
        showsVerticalScrollIndicator={false}
      />
    </MainContainer>
  )
}

Playlists.propTypes = {
  DATA: PropTypes.array.isRequired,
  setSleepPlaylist: PropTypes.func.isRequired,
  setWakePlaylist: PropTypes.func.isRequired,
  sleepPlaylist: PropTypes.string.isRequired,
  wakePlaylist: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  sleepPlaylist: state.playlistsReducer.sleepPlaylist,
  wakePlaylist: state.playlistsReducer.wakePlaylist,
})

const mapDispatchToProps = (dispatch) => ({
  setSleepPlaylist: (id) => dispatch(setSleepPlaylistAction(id)),
  setWakePlaylist: (id) => dispatch(setWakePlaylistAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Playlists)
