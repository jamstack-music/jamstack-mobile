import React, { useEffect } from 'react'
import { View } from 'react-native'

import Spotify from 'rn-spotify-sdk'

const Auth = ({navigation}) => {
  useEffect(function auth() {
    const stack = Spotify.isLoggedIn() ? 'Room' : 'Login'
    navigation.navigate(stack)
  }, [])

  return (
    <View></View>
  )
}

export default Auth
