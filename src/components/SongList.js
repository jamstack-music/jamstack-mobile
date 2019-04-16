import React from 'react'
import { View, FlatList } from 'react-native'
import SongItem from '../components/SongItem'

const SongList = (props) => {
  const {
    songs
  } = props

  return (
    <FlatList
      data={songs}
      keyExtractor={(song) => song.id}
      renderItem={({item}) => <SongItem {...item} />} />
  )
}
export default SongList
