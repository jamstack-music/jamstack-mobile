import React from 'react'
import { TouchableHighlight } from 'react-native'

const withLinks = (Component, type) => (
  (props) => {
    const {
      navigation,
      ...rest
    } = props

    return (
      <TouchableHighlight onPress={() => navigation.push(type, rest)}>
        <Component {...rest} />
      </TouchableHighlight>
    )
  }
)
export default withLinks
