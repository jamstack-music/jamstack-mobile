import React, { useState, useEffect } from 'react'
import { View, Button, Alert } from 'react-native'
import Spotify from 'rn-spotify-sdk'
import Player from '../components/Player'

const Login = ({navigation}) => {
  const [loggedin, setloggedin] = useState(false)
  const login = () => {
    Spotify.login()
    setloggedin(true)
  }

  if(!loggedin) {
    return ( 
      <View>
        <Button title="Login to Spotify" onPress={() => login()} />
      </View>
    )
  } else {
    return (
      <View>
        <Player nextSong={() => { console.log("skip") }} uri={"spotify:track:0GNOV2aEFqS3qOXfQEhEuq"} />
      </View>
    )
  }
}

export default Login
