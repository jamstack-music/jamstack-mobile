import React from 'react'
import { Button } from 'react-native'
import SongList from './SongList'
import SongItem from './SongItem'

const BumpList = (props) => {
  const {
    songs,
    style,
    onBump
  } = props

  return (
    <SongList
      songs={songs}
      style={style}
      renderItem={({item}) => (
        <SongItem {...item}>
          <Button
            disabled={item.alreadyBumped}
            title={item.bumps.toString()}
            onPress={() => onBump(item)}
          />
        </SongItem>
      )}
    />
  )
}

export default BumpList
