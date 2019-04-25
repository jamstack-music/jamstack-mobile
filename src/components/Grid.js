import React from 'react'
import { FlatGrid } from 'react-native-super-grid'

const Grid = (props) => {
  const {
    children, 
  } = props
  
  return (
    <FlatGrid
      itemDimension={130}
      items={children}
      renderItem={({ index }) => children[index]}
    />
  )
}

export default Grid
