import React from 'react'
import { View, FlatList, StyleSheet, Text } from 'react-native'
import uuidv4 from 'uuid/v4'

const Member = (props) => {
  const {
    member
  } = props

  return (
    <View style={{ fontSize: 14, padding: 8 }}>
      <Text>{member}</Text> 
    </View>
  )
}

const MemberList = (props) => {
  const {
    list
  } = props

  return (
    <FlatList
      data={list}
      keyExtractor={uuidv4}
      renderItem={({item}) => <Member member={item} />}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
    />
  )
}

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#D7D7E7'
  }
})

export default MemberList
