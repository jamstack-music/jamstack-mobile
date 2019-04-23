import React from 'react'
import { ScrollView } from 'react-native'
import Playlist from '../components/Playlist'
import withLinks from '../hocs/withLinks'
import uuidv4 from 'uuid/v4'
import useInfiniteRetrieval from '../hooks/useInfiniteRetrieval'

const PlaylistLink = withLinks(Playlist, 'Playlist')

const Playlists = (props) => {
  const [list,] = useInfiniteRetrieval('v1/me/playlists')
  
  const {
    navigation,
  } = props

  return (
    <ScrollView>
      {
        list.map(playlist => (
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

export default Playlists
