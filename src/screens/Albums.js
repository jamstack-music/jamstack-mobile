import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'
import extractSong from '../data/extractors/song'

import Spotify from 'rn-spotify-sdk'
import uuidv4 from 'uuid/v4'

import extractAlbum from '../data/api'
import withLinks from '../hocs/withLinks'
import Album from '../components/Album'

const AlbumLink = withLinks(Album, 'Album')

const Albums = (props) => {
  const {
    navigation
  } = props

  const [list, setList] = useState([])
  useEffect(() => {
    Spotify.sendRequest('v1/me/albums', 'GET', {}, false).then(res => {
      const { items } = res
      const albums = items.map(({album}) => {
        const {
          id,
          artists: [{
            name: artist
          }],
          images,
          name,
          tracks: {
            items
          },
        } = album 

        const songs = items.map(track => extractSong({
          ...track,
          album: {
            images,
            name
          }
        }))

        return {
          id,
          artist,
          images,
          name,
          songs,
        }
      })
      setList(albums)
    })
  }, [])
  
  console.log(list)
  return (
    <ScrollView>
      {
        list.map(album => (
          <AlbumLink
            key={uuidv4()}
            navigation={navigation}
            {...album}
          />
        ))
      }
    </ScrollView>
  )
}

export default Albums
