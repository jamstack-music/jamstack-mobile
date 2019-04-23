import React from 'react'
import { View } from 'react-native'

/**
 * ControlsGroup Component
 * Presentational component that houses icons
 * @author [Zach Banducci](https://github.com/zchbndcc9)
 */
const ControlsGroup = ({children, style}) => (
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    {children}
  </View>
)

export default ControlsGroup
