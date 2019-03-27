import React, { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import Spotify from 'rn-spotify-sdk'

const Player = ({uri}) => {
  const [initialized, setInitialized] = useState(false)
  useEffect(function initializePlayback() {
    if(!initialized) {
      Spotify.playURI(uri, 0, 0)
      setInitialized(true)
    }
  })
  
  const [play, setPlay] = useState(false)
  useEffect(function togglePlayback() {
    Spotify.setPlaying(play)
  })

  return(
    <View>
      <Button title="togglePlay" onPress={() => setPlay(!play)} />
    </View>
  )
}

export default Player
