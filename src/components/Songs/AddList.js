import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

import SongList from './SongList'
import SongItem from './SongItem'

const AddList = (props) => {
  const {
    songs,
    style,
    onAdd,
    ...rest
  } = props
  
  return (
    <SongList
      songs={songs}
      style={style}
      renderItem={({item}) => (
        <SongItem {...item}>
          <View style={styles.add}>
            <Icon name='add' onPress={() => onAdd(item)}/>
          </View>
        </SongItem>
      )}
    />
  )
}

export default AddList 

const styles = StyleSheet.create({
  add: {
    marginHorizontal: 10,
  }
})
