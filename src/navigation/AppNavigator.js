import React from 'react'

import { 
  createAppContainer, 
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import Ionicons from 'react-native-vector-icons/Ionicons'

import Login from '../screens/Login'
import Room from '../screens/Room'
import Search from '../screens/Search'
import Browse from '../screens/Browse'

import Auth from '../navigation/Auth'

const RoomStack = createBottomTabNavigator({
  Search,
  Room,
  Browse
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({tintColor}) => {
      const { routeName } = navigation.state
      let iconName
      switch (routeName) {
      case 'Browse': 
        iconName = 'md-disc'
        break
      case 'Search':
        iconName = 'md-search'
        break
      case 'Room':
        iconName = 'md-home'
        break
      }

      return <Ionicons name={iconName} size={20} color={tintColor}/>
    }
  }),
  initialRouteName: 'Room',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'grey'
  }
})

const Application = createSwitchNavigator({
  Login: createStackNavigator({Login}),
  Room: RoomStack,
  Auth
}, {
  initialRouteName: 'Auth'
})

export default createAppContainer(Application)

