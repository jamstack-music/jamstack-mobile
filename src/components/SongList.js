import React from 'react'
import { View, FlatList } from 'react-native'
import Song from './Song'

const SongList = (props) => {
  const {
    songs
  } = props

  return (
    <FlatList
      data={songs}
      keyExtractor={(song) => song.id}
      renderItem={({item}) => <Song {...item} />} />
  )
}
export default SongList
