import React from 'react'
import { Alert, Share, Button, SafeAreaView, AsyncStorage, View, Text, StyleSheet } from 'react-native'
import { Subscribe } from 'unstated'
import SongList from '../components/Songs/SongList'
import { RoomContainer } from '../store/room'
import StoreMiddleware from '../containers/StoreMiddleware'

const confirmDelete = (navigation) => {
  Alert.alert(
    'Are you sure you want to delete the room?',
    '',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete room', 
        onPress: () => destroyRoom(navigation),
      },
    ],
  )
}

const destroyRoom = async (navigation) => {
  await AsyncStorage.removeItem('roomName')
  navigation.navigate('Auth')
}

const shareRoom = async (roomName) => {
  await Share.share({
    message: `Join ${roomName} on Queuehub!`,
    url: ''
  }) 
}

const Room = (props) => { 
  const { 
    navigation
  } = props

  return (
    <Subscribe to={[RoomContainer]}>
      { 
        room => (
          <StoreMiddleware room={room}>
            <SafeAreaView style={{flex: 1}}>
              <View style={styles.container}>
                <Text style={styles.title}>{room.state.name}</Text>
                <Button 
                  title='Share Room Code'
                  onPress={() => shareRoom(room.state.name)} 
                />
                <Button 
                  title='Cut the cord'
                  onPress={() => confirmDelete(navigation)} 
                />
                <View>
                  <Text>Total Members</Text>
                  <Text>{room.state.members}</Text>
                </View>
                <View style={{width: '100%', flex: 0.5}}>
                  <Text>Queue</Text>
                  <SongList songs={room.state.queue} />              
                </View>
              </View>
            </SafeAreaView>
          </StoreMiddleware>
        )
      }
    </Subscribe>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default Room
