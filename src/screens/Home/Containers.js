import styled from 'styled-components'
import { Color, Padding } from '../../styles'

export const PinkContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${Color.Pink};
`

export const YellowContainer = styled.SafeAreaView`
    flex: 2;
    background-color: ${Color.Yellow};
    zIndex: -1;
`

export const ButtonsContainer = styled.View`
    padding-vertical: ${Padding.XL}px;
    padding-horizontal: ${Padding.L}px;
`

export const SleepingImageContainer = styled.View`
    zIndex: 0;
    aspectRatio: 1.77; /* 1920/1080 = 1.77 */
`


export const SleepingImage = styled.Image`
    position: absolute;
    resizeMode: cover;
    width: 100%;
    height: 140%;
`
