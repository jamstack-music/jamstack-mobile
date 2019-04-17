import React from 'react'
import { View } from 'react-native'

/**
 * ControlsGroup Component
 * Presentational component that houses icons
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const ControlsGroup = (props) => {
  const {
    children,
    style,
    ...rest
  } = props

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', ...style}}>
      {children}
    </View>
  )
}

export default ControlsGroup
