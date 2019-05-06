import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import uuidv4 from 'uuid/v4';

const Member = props => {
  const { member } = props;

  return (
    <View style={{ fontSize: 14, padding: 8 }}>
      <Text>{member}</Text>
    </View>
  );
};

Member.propTypes = {
  member: PropTypes.string.isRequired,
};

const renderSeperator = () => <View style={styles.seperator} />;

// eslint-disable-next-line
const renderItem = ({ item }) => <Member member={item} />

const MemberList = props => {
  const { list } = props;

  return (
    <FlatList
      data={list}
      keyExtractor={uuidv4}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeperator}
    />
  );
};

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: '#D7D7E7',
  },
});

MemberList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default MemberList;
