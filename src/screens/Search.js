import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet, View, TextInput} from 'react-native'
import { Icon } from 'react-native-elements'
import Spotify from 'rn-spotify-sdk'
import SearchList from '../components/SearchList'

const Search = () => {
  const [results, setResults] = useState([])
  const [query, setQuery] = useState('')

  useEffect( () => {

    const callSpotify = async () => { if(query.length == 0){
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
    <SafeAreaView style={styles.header}>
      <View style={styles.searchBar}>
        <Icon containerStyle={styles.icon} name='search' size={20}/>
        <TextInput
          onChangeText={(text) => setQuery(text)}
          placeholder='Search...'
          style={styles.input}
        />
      </View>
      <SearchList songs={results} style={{ backgroundColor: 'white' }}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: { 
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  icon: {
    marginLeft: 10,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  input: {
    backgroundColor: 'white', 
    flex: 2,
    paddingVertical: 5,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#D6D6D6',
    marginHorizontal: 10,
  }
})
export default Search
