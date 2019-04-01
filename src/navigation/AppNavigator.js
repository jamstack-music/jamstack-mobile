import { 
  createAppContainer, 
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import Login from '../screens/Login'
import Room from '../screens/Room'
import Auth from '../navigation/Auth'

const RoomStack = createBottomTabNavigator({
  Room
})

const Application = createSwitchNavigator({
  Login,
  Room: RoomStack,
  Auth
}, {
  initialRouteName: 'Auth'
})

export default createAppContainer(Application)

