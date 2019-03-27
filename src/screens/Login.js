import React from 'react'
import { View, Button, Alert } from 'react-native'
import Spotify from 'rn-spotify-sdk'

const Login = ({navigation}) => {
  const initializeSpotify = async () => {
    if(!Spotify.isInitialized()) {
      await Spotify.initialize({
        'clientID':'0a31a2abfc5945bb9e3b3507e6f8361c',
        'sessionUserDefaultsKey':'SpotifySession',
        'redirectURL':'queuehubmobile://auth'
      })
    }
    let loggedIn = await Spotify.login()

    if(loggedIn) {
      navigation.navigate('Home')
    } else {
      Alert('Whoops look like something bad happened')
    } 
  }
  return (
    <View>
      <Button title="Login with Spotify" onPress={() => initializeSpotify()}/>
    </View>
  )
}

export default Login
