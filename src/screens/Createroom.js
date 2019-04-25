import React, { useState, useEffect } from 'react'
import { Keyboard, SafeAreaView, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { createRoom as remoteCreateRoom } from '../data/api'
import { Button, Input } from 'react-native-elements'

const initialInputs = {
  name: '', 
  roomName: '', 
  password: '',
}

const CreateRoom = (props) => {
  const {
    navigation
  } = props

  const [formInputs, setFormInputs] = useState(initialInputs)

  const createRoom = async () => {
    const { status } = await remoteCreateRoom(formInputs.roomName) 
    if(status !== 200) {
      alert('Whoops looks like an error occured')
    } else { 
      await AsyncStorage.multiSet([['roomName', formInputs.roomName], ['name', formInputs.name]])
      navigation.navigate('Room')
    }
  }

  const setInput = (key, value) => {
    setFormInputs(f => {
      f[key] = value
      return f
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Create New Room</Text>
        <Input
          label="Your name"
          placeholder="John Doe"
          containerStyle={styles.formInput}
          maxLength={40}
          onBlur={Keyboard.dismiss}
          onChangeText={name => setInput('name', name)}
        />
        <Input
          label="Your room name"
          placeholder="My awesome room"
          containerStyle={styles.formInput}
          maxLength={40}
          onBlur={Keyboard.dismiss}
          onChangeText={roomName => setInput('roomName', roomName)}
        />
        <Text style={styles.passwordTitle}>Password (Optional)</Text>
        <Input
          label="Password"
          containerStyle={styles.formInput}
          secureTextEntry
          placeholder="********"
          onChangeText={password => setInput('password', password)}
        />
        <Button
          containerStyle={styles.button}
          title="Create Room"
          onPress={createRoom}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  passwordTitle: {
    ...this.title,
    fontSize: 16,
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  formInput: {
    width: '80%',
  },
  button: {
    width: '60%',
  }
})

export default CreateRoom
