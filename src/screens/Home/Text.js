import styled from 'styled-components'
import { Color, Padding } from '../../styles'

export const WelcomeText = styled.Text`
    paddingHorizontal: ${Padding.L}px;
    paddingVertical: ${Padding.XL}px;
    font-size: 40px;
    color: ${Color.Yellow};
    font-weight: bold;
`

export const SubText = styled.Text`
    font-size: 16px;
    color: ${Color.Yellow};
    font-weight: bold;
    paddingHorizontal: ${Padding.L}px;
`

export const LoginText = styled.Text`
    font-size: 25px;
    color: ${Color.White};
    font-weight: bold;
`
