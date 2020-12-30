import styled from 'styled-components'
import { Color, Padding } from '../../styles'

export const BlueContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${Color.Blue};
    paddingBottom: ${Padding.XL}px;
`

export const HorizontalPadding = styled.View`
    paddingHorizontal: ${Padding.XS}px;
`

export const ButtonsContainer = styled.View`
    flex-direction: row;
`

export const SettingsContainer = styled.View`
    paddingTop: ${Padding.L}px;
`
