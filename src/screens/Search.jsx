import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import Spotify from 'rn-spotify-sdk';
import { Subscribe } from 'unstated';
import { showMessage } from 'react-native-flash-message';
import extractSong from '../data/extractors/song';

import AddList from '../components/Songs/AddList';

import { RoomContainer } from '../store/room';

import { addSong as addSongRemote } from '../data/api';

const callSpotify = async (query, setResults) => {
  if (query.length == 0) {
    setResults([]);
  } else {
    const {
      tracks: { items }
    } = await Spotify.search(query, ['track'], { market: 'US' });

    const searchResults = items.map(song => extractSong(song));

    setResults(searchResults);
  }
};

const addSong = (room, song) => {
  if (room.state.queue.find(({ id }) => song.id === id)) {
    showMessage({
      message: 'Song already in the queue',
      type: 'warning'
    });
  } else {
    addSongRemote(room.state.name, song);
    showMessage({
      message: 'Song added to the queue!',
      type: 'success'
    });
  }
};

const Search = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    callSpotify(query, setResults);
  }, [query]);

  return (
    <Subscribe to={[RoomContainer]}>
      {room => (
        <SafeAreaView style={styles.header}>
          <View style={styles.searchBar}>
            <Icon containerStyle={styles.icon} name="search" size={20} />
            <TextInput
              onChangeText={text => setQuery(text)}
              placeholder="Search..."
              style={styles.input}
            />
          </View>
          <AddList
            songs={results}
            onAdd={song => addSong(room, song)}
            style={{ backgroundColor: 'white' }}
          />
        </SafeAreaView>
      )}
    </Subscribe>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#E6E6E6'
  },
  icon: {
    marginLeft: 10
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  input: {
    backgroundColor: 'white',
    flex: 2,
    paddingVertical: 5,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#D6D6D6',
    marginHorizontal: 10
  }
});
export default Search;
