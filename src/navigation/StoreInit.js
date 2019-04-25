import React, { useEffect } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { joinRoom } from '../data/api'
import { Subscribe } from 'unstated'
import { RoomContainer } from '../store/room'

const init = async (room, navigation) => {
  const name = await AsyncStorage.getItem('name')
  const roomName = await AsyncStorage.getItem('roomName')
  
  const { data } = await joinRoom(roomName, name)
  room.initRoom({...data, name: roomName})
  navigation.navigate('Room') 
}

const StoreLoader = (props) => {
  const {
    room,
    navigation,
  } = props
  
  useEffect(() => {
    init(room, navigation)
  }, [])
  
  return <Text>Loading...</Text>
}

const StoreInit = (props) => {
  const {
    navigation
  } = props

  return (
    <Subscribe to={[RoomContainer]}>
      {
        room => (
          <View>
            <StoreLoader room={room} navigation={navigation} />
          </View>
        )
      }
    </Subscribe>
  )
}

export default StoreInit
