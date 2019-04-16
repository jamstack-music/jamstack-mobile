import React, {useState, useEffect} from 'react'
import {View, Text, TextInput} from 'react-native'
import { Icon } from 'react-native-elements'
import Spotify from 'rn-spotify-sdk'
import SongList from './SongList'
import { ScrollView } from 'react-native-gesture-handler'
import RoomContainer from '../store/store'
import { Subscribe } from 'unstated';

const Search = () => {

    const [initDone, setInitDone] = useState(0);
    const [songList, setSongList] = useState([]);
    const [query, setQuery] = useState("");
    const [queue, setQueue] = useState([]);

    SongArr = []
    let SongQueue = []

    const callSpotify = async () => {

      if(query.length == 0){


        let result = await Spotify.search(" ", ['track'], {limit: 1})
  
        let songQueue = result.tracks.items.map((song, i) => ({
          title: song.name,
          artist: song.artists[0].name,
          url: song.uri,
          album: song.album.images[0]
        }));

        setSongList(songQueue)
        setSongList(roomQueue)
        

      } else {

        let result = await Spotify.search(query, ['track'], {limit: 5})
  
        let songQueue = result.tracks.items.map((song, i) => ({
          title: song.name,
          artist: song.artists[0].name,
          url: song.uri,
          album: song.album.images[0]
        }));

        setSongList(songQueue)

      }
      
    }

    useEffect( () => {
      callSpotify()
    }, [query])
      
    return(
      <ScrollView style={{flex:1, flexDirection: 'row'}}>

        <View style={{height: 50, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50, borderColor: 'black', borderWidth: 1}}>

            <Icon name='search' size={40} style={{flex:1, flexDirection: 'row'}}/>

          </View>
          <View style={{width:315, height: 50}}>
            <Subscribe to={[RoomContainer]}>
              {room => (
                <TextInput
                style={{flex:1, flexDirection: 'row', height: 40, borderColor: 'black', borderWidth: 1}}
                onChangeText={(text) => setQuery(text)}
                value={this.query}
              />

                /*<TextInput
                style={{flex:1, flexDirection: 'row', height: 40, borderColor: 'black', borderWidth: 1}}
                onChangeText={(text) => {
                  setQuery(text);
                  return callSpotify(room.state.queue);
                }}
                value={this.query}
              />*/
              )}
            </Subscribe>

            

          </View>
          <View style={{width: 50, height: 50, borderColor: 'black', borderWeight: 1}}>

          </View>
          </View>

        <ScrollView style={{flex: 1, flexDirection: 'row'}}>
          <ScrollView style={{flex:1, flexDirection: 'row'}}>

                <SongList style={{flex:4}} songs={songList}/>

          </ScrollView>
        </ScrollView>

      </ScrollView>
    )
  }
  

export default Search

/*
<Subscribe to={[RoomContainer]}>
  {room => (
    <SongList style={{flex:4}} songs={room.state.queue}/>
  )}
</Subscribe>
*/