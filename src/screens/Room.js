import React from 'react'
import { Share, Button, SafeAreaView, View, Text, StyleSheet } from 'react-native'

import { Subscribe } from 'unstated'
import RoomContainer from '../store/store'

const Room = () => { 
  const shareRoom = async (roomName) => {
    const result = await Share.share({
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
              <Text>{room.state.members.length}</Text>
            </View>
            <View>
              <Text>Queue</Text>
              {/* INSERT SONG LIST ITEM HERE */}
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
