import { createAppContainer, createStackNavigator } from 'react-navigation'

import Login from '../screens/Login'

const AppNavigator = createStackNavigator({
  Login
})
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
