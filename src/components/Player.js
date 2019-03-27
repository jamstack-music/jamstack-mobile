import React, { useState, useEffect } from 'react'
import { Button, View } from 'react-native'
import Spotify from 'rn-spotify-sdk'

const Player = ({uri, nextSong}) => {
  const [play, setPlay] = useState(false)
  
  // Will only change the song if the URI changes
  useEffect(() => {
    Spotify.playURI(uri, 0, 0)
    setPlay(true)
  }, [uri])

  // Pauses song on the SDK
  // Will only pause when play changes
  useEffect(() => {
    Spotify.setPlaying(play)
  }, [play])

  return(
    <View>
      <Button title="togglePlay" onPress={() => setPlay(!play)} />
      <Button title="skip" onPress={() => nextSong()} />
    </View>
  )
}

export default Player
