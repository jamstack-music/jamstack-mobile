import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import { addSong } from '../data/api'

import SongList from './SongList'
import SongItem from './SongItem'

const SearchList = (props) => {
  const {
    songs,
    style,
    ...rest
  } = props
  
  return (
    <SongList
      songs={songs}
      style={style}
      renderItem={({item}) => (
        <SongItem {...item}>
          <View style={styles.add}>
            <Icon name='add' onPress={() => addSong(props)}/>
          </View>
        </SongItem>
      )}
    />
  )
}

export default SearchList

const styles = StyleSheet.create({
  add: {
    marginHorizontal: 10,
  }
})
