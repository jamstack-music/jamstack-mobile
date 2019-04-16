import React, {useState, useEffect} from 'react'
import { SafeAreaView, View, Text, TextInput} from 'react-native'
import { Icon } from 'react-native-elements'
import Spotify from 'rn-spotify-sdk'
import SongList from '../components/SongList'
import { ScrollView } from 'react-native-gesture-handler'
import { RoomContainer } from '../store/room'
import { Subscribe } from 'unstated'

const Search = () => {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')

  useEffect( () => {

    const callSpotify = async () => {
      if(query.length == 0){
        setResults([])
      } else {
        let { tracks: { items } } = await Spotify.search(query, ['track'])

        const searchResults = items.map(({
         name: title,
         id,
         uri,
         artists: [{
           name: artist
         },],
         album: {
           name: album,
           images
         },
        }) => ({
         title,
         id,
         uri,
         artist,
         album,
         images,
        }))

        setResults(searchResults)
      }
    }
    callSpotify()
  }, [query])
      
  return(
    <SafeAreaView style={{ flex: 1 }}>
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
                  value={query}
                />
              )}
            </Subscribe>
          </View>
          <View style={{width: 50, height: 50, borderColor: 'black', borderWeight: 1}}>
          </View>
        </View>
        <ScrollView style={{flex: 1, flexDirection: 'row'}}>
          <ScrollView style={{flex:1, flexDirection: 'row'}}>
            <SongList style={{flex:4}} songs={results}/>
          </ScrollView>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}
  

export default Search
