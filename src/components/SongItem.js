import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import AlbumCover from '../components/AlbumCover'
import { Subscribe } from 'unstated'
import { RoomContainer } from '../store/room'

const SongItem = ({title, artist, uri, album}) => (
    
  <View style={{width: 415, height: 90, flexDirection: 'row', borderColor: 'black', borderWidth: 1}}>

    <View style={{alignItems: 'center', justifyContent: 'center', width: 90, height: 90}}>
      <AlbumCover url={album.url} dim={80}></AlbumCover>
    </View>

    <View style={{width: 230, height: 90}}>

      <Text style={{height: 50, fontSize: 20}}>
        {title}
      </Text>

      <Text style={{fontSize: 20}}>
        {artist}
      </Text>

    </View>

    <View style={{width: 90, height: 90}}>
      <Subscribe to={[RoomContainer]}>
        { room => 
          <Icon name='add' size={80} onPress={() => room.state.queue.push({title, artist, uri, album})}/>
        }
      </Subscribe>
    </View>

  </View>

)

export default SongItem
