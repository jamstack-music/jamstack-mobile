import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import useTimer from '../hooks/useTimer.js'

const Timer = ({end, onEnd, playing}) => {
  const [timer, toggleTimer] = useTimer()

  useEffect(function timeTracker(){ 
    if(timer == end)
      onEnd()
  }, [timer])

  useEffect(function onPause(){
    if(!playing)
      toggleTimer()
  }, [playing])

  return (
    <View>
      <Text>{timer}</Text>
    </View>
  )
}

export default Timer
