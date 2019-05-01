import React, { useState, useEffect } from 'react';
import Spotify from 'rn-spotify-sdk';
import uuidv4 from 'uuid/v4';
import Grid from '../components/Grid';
import Playlist from '../components/Playlist';
import extractSong from '../data/extractors/song';
import withLinks from '../hocs/withLinks';

const PlaylistLink = withLinks(Playlist, 'Playlist');

const Playlists = props => {
  const [list, setList] = useState([]);
  useEffect(() => {
    Spotify.sendRequest('v1/me/playlists/', 'GET', {}, false).then(res => {
      const { items } = res;
      setList(items);
    });
  }, []);
  const { navigation } = props;

  return (
    <Grid>
      {list.map(album => (
        <PlaylistLink dim={150} key={uuidv4()} navigation={navigation} {...album} />
      ))}
    </Grid>
  );
};

export default Playlists;
