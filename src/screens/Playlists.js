import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Playlist from '../components/Playlist'
import withLinks from '../hocs/withLinks'
import uuidv4 from 'uuid/v4'

const PlaylistLink = withLinks(Playlist, 'Playlist')

const Playlists = (props) => {
  const {
    navigation,
  } = props

  const playlists = [
    {
      id: 2,
      name: 'hello'
    },

    {
      id: 1,
      name: 'hello'
    },
    {
      id: 4,
      name: 'hello'
    },
    {
      id: 6,
      name: 'hello'
    },
    {
      id: 8,
      name: 'hello'
    },
    {
      id: 0,
      name: 'hello'
    },
  ] 

  return (
    <ScrollView>
      {
        playlists.map(playlist => (
          <PlaylistLink 
            key={uuidv4()}
            navigation={navigation}
            {...playlist} 
          />
        ))
      } 
    </ScrollView>
  )
}
