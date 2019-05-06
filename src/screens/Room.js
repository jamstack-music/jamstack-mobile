import React from 'react';
import {
  Alert,
  Share,
  Button,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Subscribe } from 'unstated';
import PropTypes from 'prop-types';

import MemberList from '../components/MemberList';
import { bumpSong } from '../data/api';
import BumpList from '../components/Songs/BumpList';
import { RoomContainer } from '../store/room';
import StoreMiddleware from '../containers/StoreMiddleware';

const confirmDelete = navigation => {
  Alert.alert('Are you sure you want to delete the room?', '', [
    {
      text: 'Cancel',
      onPress: () => null,
      style: 'cancel',
    },
    {
      text: 'Delete room',
      onPress: () => destroyRoom(navigation),
    },
  ]);
};

const destroyRoom = async navigation => {
  await AsyncStorage.removeItem('roomName');
  navigation.navigate('Auth');
};

const shareRoom = async roomName => {
  await Share.share({
    message: `Join ${roomName} on Queuehub!`,
    url: 'http://queuehub.club/',
  });
};

const Room = props => {
  const { navigation } = props;

  return (
    <Subscribe to={[RoomContainer]}>
      {room => (
        <StoreMiddleware room={room} navigation={navigation}>
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <View style={styles.info}>
                <Text style={styles.title}>{room.state.name}</Text>
                <View style={styles.buttons}>
                  <Button title="Share Room Code" onPress={() => shareRoom(room.state.name)} />
                  <Button
                    title="Cut the cord"
                    color="red"
                    onPress={() => confirmDelete(navigation)}
                  />
                </View>
              </View>
              <View style={styles.members}>
                <Text style={{ fontSize: 20, alignSelf: 'center' }}>
                  Members {`(${room.state.members.length})`}
                </Text>
                <MemberList list={room.state.members} />
              </View>
              <View style={styles.queue}>
                <Text style={{ fontSize: 20, alignSelf: 'center' }}>
                  Queue {`(${room.state.queue.length})`}
                </Text>
                {room.state.queue.length === 0 && (
                  <View style={{ marginTop: 20 }}>
                    <Text style={{ alignSelf: 'center' }}>The queue is empty. Add some songs!</Text>
                  </View>
                )}
                <BumpList
                  songs={room.state.queue}
                  onBump={song => bumpSong(room.state.name, song.id)}
                />
              </View>
            </View>
          </SafeAreaView>
        </StoreMiddleware>
      )}
    </Subscribe>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  members: {
    flex: 2,
    width: '100%',
    justifyContent: 'center',
  },
  queue: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
  },
});

Room.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Room;
