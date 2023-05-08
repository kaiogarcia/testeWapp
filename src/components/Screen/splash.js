import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Image/logo-wap.png')} style={styles.image} />
    </View>
  )
}

export default SplashScreen
