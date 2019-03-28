import { useState, useEffect } from 'react'

// Custom timer hook that will keep track of the time elapsed from an initial start point
const useTimer = (startTime = 0) => {
  const [timer, setTimer] = useState(startTime)
  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000)
    return function(){
      clearInterval(timerID)
    }
  })

  const tick = () => setTimer(timer + 1)

  return timer 
}

export default useTimer
