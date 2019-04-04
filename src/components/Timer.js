import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import RNEvents from 'react-native-events'

import ProgressBar from 'react-native-progress/Bar'

// TODO: Style
const Timer = ({end, currentTime}) => { 
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
      <Text>{cMin + ':' + cSec}</Text>
      <ProgressBar 
        progress={progress} 
        width={230}
        height={5}
        unfilledColor='#DDDDDD'
        borderRadius={0}
        borderWidth={0}/> 
      <Text>{eMin + ':' + eSec}</Text>
    </View>
  )
}

export default Timer
