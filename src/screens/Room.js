import React from 'react'
import { Share, Button, SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { Subscribe } from 'unstated'
import SongList from '../components/Songs/SongList'
import { RoomContainer } from '../store/room'

const Room = () => { 

  const shareRoom = async (roomName) => {
    await Share.share({
      message: `Join ${roomName} on Queuehub!`,
      url: 'https://google.com'
    }) 
  }

  return (
    <Subscribe to={[RoomContainer]}>
      { room => (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <Text style={styles.title}>Placeholder room title</Text>
            <Button 
              title='Share Room Code'
              onPress={() => shareRoom(room.state.name)} />
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
      )}
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
