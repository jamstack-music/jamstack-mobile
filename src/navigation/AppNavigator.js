import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import Login from '../screens/Login'
import Room from '../screens/Room'
import Auth from '../navigation/Auth'

const RoomStack = createStackNavigator({
  Room
})

const LoginStack = createStackNavigator({
  Login
})

const Application = createSwitchNavigator({
  Login: LoginStack, 
  Room: RoomStack,
  Auth
}, {
  initialRouteName: 'Auth'
})

export default createAppContainer(Application)

