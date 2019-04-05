import React, {Component} from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import AlbumCover from '../components/AlbumCover'

const SongItem = ({title, artist, uri, album}) => (


    <View style={{flex:1, flexDirection: 'row'}}>
        <AlbumCover style={{flex:1}} url={album.url} dim={80}></AlbumCover>
        
        <View style={{flex:4, flexDirection: 'column'}}>
            <Text style={{fontSize: 20, color: 'black'}}>
                {title}
            </Text>
            <Text style={{fontSize: 20, color:'black'}}>
                {artist}
            </Text>
        </View>
        <View style={{flex:1, flexDirection: 'row', alignSelf: 'center'}}>
            <Icon name='add' size={35}/>
        </View>
    </View>

)

export default SongItem