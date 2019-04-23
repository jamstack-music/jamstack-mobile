import React from 'react'
import { View } from 'react-native'

const withLinks = (Component, type) => (
  (props) => {
    const {
      navigation,
      ...rest
    } = props

    return (
      <View onPress={() => navigation.push(type, {...rest})}>
        <Component {...rest} />
      </View>
    )
  }
)
export default withLinks
