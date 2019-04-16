import React, {Component} from 'react'
import { View, Text } from 'react-native'
import SongItem from './SongItem'

const SongList = ({songs}) => (
    <View>{
        songs.map((element, i) => (
            <SongItem {...element} key={element.uri + i}></SongItem>
        ))
    }
    </View>
);

export default SongList