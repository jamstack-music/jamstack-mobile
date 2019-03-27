import React, { useState, useEffect } from 'react'
import { Button, View, Text } from 'react-native'
import Spotify from 'rn-spotify-sdk'

const Player = ({uri, nextSong}) => {
  const [initialized, setInitialized] = useState(false)
  useEffect(function initializePlayback() {
    if(!initialized) {
      Spotify.playURI(uri, 0, 0)
      Spotify.getPlaybackState().then((result) => {
        console.log(result)
      })
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
      <Button title="skip" onPress={() => nextSong()} />
    </View>
  )
}

export default Player
