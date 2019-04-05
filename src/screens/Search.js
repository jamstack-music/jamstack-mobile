import React, {useState, useEffect} from 'react'
import {Text, TextInput} from 'react-native'
import Spotify from 'rn-spotify-sdk'
import { Subscribe } from 'unstated'
import RoomContainer from '../store/store'
import SongList from './SongList'
import { ScrollView } from 'react-native-gesture-handler';
import SearchForm from '../components/SearchForm'

const Search = () => {

    const [initDone, setInitDone] = useState(0);
    const [songList, setSongList] = useState([]);
    const [query, setQuery] = useState("animals");
    SongArr = []
    let SongQueue = []

    const callSpotify = async () => {
      let result = await Spotify.search(query, ['track'])

      let songQueue = result.tracks.items.map((song) => ({
        title: song.name,
        artist: song.artists[0].name,
        url: song.uri,
        album: song.album.images[0]
      }));

      setSongList(songQueue)
      

    }

    useEffect( () => {
      callSpotify()
    })


        /*return result.tracks.items.map((element) => {
          let song = ({
          title: element.name,
          artist: element.artists,
          uri: element.uri,
          album: element.album
          })

          //alert(song.name)

        })*/
      
    return(
      <ScrollView>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => setQuery({text})}
        value={query}
      />

        <SongList style={{flex:1}} songs={songList}/>
      </ScrollView>
    )
  }

export default Search

/*
<ScrollView>
        <SongList style={{flex:1}} songs={room.state.queue}/>
      </ScrollView>
      */