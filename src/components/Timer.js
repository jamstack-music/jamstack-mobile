import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

import ProgressBar from 'react-native-progress/Bar'

// TODO: Style
const Timer = ({end, onEnd, currentTime}) => { 
  useEffect(() => {
    if(currentTime >= end)
      onEnd()
  }, [currentTime])

  const formatTime = time => {
    let seconds = Math.floor(time / 1000)
    let minutes = Math.floor(seconds / 60)

    seconds = (seconds % 60).toString().padStart(2, '0')
    minutes = (minutes % 60).toString().padStart(2, '0')

    return [minutes, seconds]
  }

  let [cMin, cSec] = formatTime(currentTime)
  let [eMin, eSec] = formatTime(end)

  let progress = currentTime / end
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Text>{eMin + ':' + eSec}</Text>
      <ProgressBar 
        progress={progress} 
        width={230}
        height={10}
        borderRadius={6} /> 
      <Text>{cMin + ':' + cSec}</Text>
    </View>
  )
}

export default Timer
