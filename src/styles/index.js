import { Dimensions } from 'react-native'

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window')

const guidelineBaseWidth = 360
const guidelineBaseHeight = 740

const scale = (size) => (SCREEN_WIDTH / guidelineBaseWidth) * size
const verticalScale = (size) => (SCREEN_HEIGHT / guidelineBaseHeight) * size
const appScale = (size) => (verticalScale(size) + scale(size)) / 2

export const Padding = {
  XXS: Math.round(appScale(3)),
  XS: Math.round(appScale(6)),
  S: Math.round(appScale(12)),
  SM: Math.round(appScale(14)),
  M: Math.round(appScale(16)),
  ML: Math.round(appScale(18)),
  L: Math.round(appScale(24)),
  LX: Math.round(appScale(32)),
  XL: Math.round(appScale(48)),
  LXX: Math.round(appScale(58)),
  XXL: Math.round(appScale(64)),
  XXXL: Math.round(appScale(72)),
  XXXXL: Math.round(appScale(94)),
  XXXXXL: Math.round(appScale(120)),
}

export const Color = {
  Black: '#000000',
  White: '#FFFFFF',
  Blue: '#00BFF3',
  Yellow: '#FFD74C',
  Pink: '#FF87BB',
  Grey: '#dcdcdc',
}
