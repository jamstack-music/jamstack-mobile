import React, { useEffect } from 'react'
import { View } from 'react-native'

import Spotify from 'rn-spotify-sdk'

const Auth = ({navigation}) => {
  useEffect(function auth() {
    async function login() {
      const status = await Spotify.isLoggedInAsync()
      const stack = status ? 'Room' : 'Login'
      navigation.navigate(stack)
    }

    login()
  }, [])

  return (
    <View></View>
  )
}

export default Auth
