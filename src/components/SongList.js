import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import SongItem from '../components/SongItem'

const SongList = (props) => {
  const {
    songs,
    ...rest
  } = props

  return (
    <FlatList
      data={songs}
      keyExtractor={(song) => song.id}
      renderItem={({item}) => <SongItem {...item} {...rest}/>} 
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  )
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#D7D7E7'
  }
})
export default SongList
