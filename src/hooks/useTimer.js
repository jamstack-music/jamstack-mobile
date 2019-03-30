import { useState, useEffect } from 'react'

// Custom timer hook that will keep track of the time elapsed from an initial start point
function useTimer(startTime = 0) {
  let timerRef = null
  const [timer, setTimer] = useState(startTime)
  useEffect(() => {
    timerRef = setInterval(() => tick(), 100)
    return function(){
      clearInterval(timerRef)
    }
  })

  const tick = () => setTimer(timer + 1)
  const toggleTimer = () => clearInterval(timerRef)
  return [timer, toggleTimer] 
}

export default useTimer
