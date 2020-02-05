import React from 'react';
import { Button, SafeAreaView, Text, View, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import { useAuth } from '~/containers/Auth';

const Login = () => {
  const { login } = useAuth();

  const { width } = Dimensions.get('window');
  const dim = width * 0.8;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>QueueHub</Text>
      </View>
      <View style={styles.footer}>
        <Button
          title="Login with Spotify"
          buttonStyle={{ width: dim, ...styles.button }}
          icon={<Icon name="spotify" color="white" size={30} />}
          titleStyle={styles.buttonTitle}
          onPress={login}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F85FF',
  },
  title: {
    color: 'white',
    fontSize: 50,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonTitle: {
    fontSize: 25,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    borderRadius: 50,
    height: 50,
  },
});

Login.navigationOptions = {
  header: null,
};

export default Login;
