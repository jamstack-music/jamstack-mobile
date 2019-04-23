import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Alert, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo'
import Spotify from 'rn-spotify-sdk'

const Login = ({navigation}) => {

  let { width } = Dimensions.get('window')
  let dim = width * .8

  const login = async () => {
    let loggedIn = await Spotify.login()
    if(loggedIn) {
      navigation.navigate('Room')
    } else {
      Alert.alert('You gotta log in')
    }
  }

  return ( 
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>QueueHub</Text>
      </View>
      <Button 
        title="Login with Spotify" 
        buttonStyle={{width: dim, ...styles.button}}
        icon={
          <Icon
            name='spotify'
            color='white'
            size={30} />
        }
        titleStyle={styles.buttonTitle}
        onPress={() => login()} 
      />
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECFFFF',
    flexDirection: 'column',
    alignItems: 'center',
  }, 
  header: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 50,
  },
  buttonTitle: {
    fontSize: 25
  }, 
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    borderRadius: 50,
    height: 60
  },
})

Login.navigationOptions = {
  header: null
}
export default Login
