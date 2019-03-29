import React, { useEffect } from 'react'
import { Button, View } from 'react-native'

import SongInfo from './SongInfo'
import useSpotifyPlayer from '../hooks/useSpotifyPlayer'

// TODO: stylize
// TODO: Keep track of song time and get next song when time is finished
/**
 * SongPlayer Component
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 *
 * This component is used for playing a single song and displaying its information
 */
const SongPlayer = ({duration, songTitle, artist, albumImg, uri, nextSong}) => {
  const [play, togglePlay, setSong] = useSpotifyPlayer() 
  useEffect(() => {
    setSong(uri)
  }, [uri])

  return(
    <View>
      <SongInfo
        songTitle={songTitle}
        artist={artist}
        albumImg={albumImg}
      />
      <Button title={play ? 'Pause' : 'Play'} onPress={() => togglePlay()} />
      <Button title="Skip" onPress={() => nextSong()} /> 
    </View>
  )
}

export default SongPlayer
