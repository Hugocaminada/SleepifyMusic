import React from 'react'
import { Image } from 'react-native'
import Modal from 'react-native-modal'

const LoadingModal = () => (
  <Modal
    isVisible
    backdropColor="black"
    backdropOpacity={0.4}
  >
    <Image
      source={require('../images/loading.gif')}
      style={{
        alignSelf: 'center',
        width: 100,
        height: 100,
      }}
    />
  </Modal>
)

export default LoadingModal
