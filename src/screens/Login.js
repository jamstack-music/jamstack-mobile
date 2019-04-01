import React from 'react'
import { View, Button, Alert } from 'react-native'
import Spotify from 'rn-spotify-sdk'

const Login = ({navigation}) => {
  const login = async () => {
    let loggedIn = await Spotify.login()
    if(loggedIn) {
      navigation.navigate('Room')
    } else {
      Alert.alert('You gotta log in')
    }
  }

  return ( 
    <View>
      <Button title="Login to Spotify" onPress={() => login()} />
    </View>
  )
}

export default Login
