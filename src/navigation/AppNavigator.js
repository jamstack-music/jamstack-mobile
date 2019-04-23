import React from 'react'

import { 
  createAppContainer, 
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import Ionicons from 'react-native-vector-icons/Ionicons'

import Login from '../screens/Login'
import Room from '../screens/Room'
import Search from '../screens/Search'
import Browse from '../screens/Browse'
import Playlists from '../screens/Playlists'
import Playlist from '../screens/Playlist'
import Album from '../screens/Album'
import Albums from '../screens/Albums'
import CurrentPlaying from '../screens/CurrentPlaying'

import CreateRoom from '../screens/Createroom'
import StoreInit from '../navigation/StoreInit'
import Auth from '../navigation/Auth'

const BrowseStack = createStackNavigator({
  Browse,
  Playlists,
  Playlist,
  Albums,
  Album,
})

const RoomStack = createBottomTabNavigator({
  Room,
  'Currently Playing': CurrentPlaying,
  Search,
  Browse: BrowseStack 
}, {
  defaultNavigationOptions: ({navigation}) => ({
    tabBarIcon: ({tintColor}) => {
      const { routeName } = navigation.state
      let iconName
      switch (routeName) {
      case 'Browse': 
        iconName = 'md-bookmarks'
        break
      case 'Currently Playing':
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
    activeTintColor: '#365dff',
    inactiveTintColor: 'grey'
  }
})

const Application = createSwitchNavigator({
  Login,
  CreateRoom,
  StoreInit,
  Room: RoomStack,
  Auth
}, {
  initialRouteName: 'Auth'
})

export default createAppContainer(Application)

