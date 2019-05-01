import React from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Provider } from 'unstated';

const superBump = queue => {
  queue.sort((a, b) => b.bumps - a.bumps);
};

const regularBump = (queue, index) => {
  if (index !== 0) [queue[index], queue[index - 1]] = [queue[index - 1], queue[index]];
};

export class RoomContainer extends Container {
  state = {
    queue: [],
    currentSong: {},
    members: []
  };

  initRoom = async store => {
    const { current_song, ...rest } = store;
    const jsonMap = (await AsyncStorage.getItem('alreadyBumped')) || '{}';
    const alreadyBumped = JSON.parse(jsonMap);
    const queue = store.queue.map(song => ({
      ...song,
      alreadyBumped: alreadyBumped[song.id] || false
    }));

    this.setState(prevState => ({ ...prevState, ...rest, queue, currentSong: current_song }));
  };

  setName = name => this.setState({ name });

  addtoQueue = song => {
    if (this.state.queue.length === 0 && !this.state.currentSong.hasOwnProperty('uri')) {
      this.setState({ currentSong: song });
    } else {
      this.setState(prevState => ({
        queue: [...prevState.queue, song]
      }));
    }
  };

  nextSong = async () => {
    if (this.state.queue.length > 0) {
      const jsonMap = (await AsyncStorage.getItem('alreadyBumped')) || '{}';
      const alreadyBumped = JSON.parse(jsonMap);
      delete alreadyBumped[this.state.queue[0].id];
      AsyncStorage.setItem('alreadyBumped', JSON.stringify(alreadyBumped));

      this.setState(prevState => ({
        currentSong: prevState.queue[0],
        queue: prevState.queue.slice(1, prevState.queue.length)
      }));
    }
  };

  bumpSong = async id => {
    const index = this.state.queue.findIndex(song => song.id === id);
    const { queue } = this.state;
    const jsonMap = (await AsyncStorage.getItem('alreadyBumped')) || '{}';
    const alreadyBumped = JSON.parse(jsonMap);

    queue[index] = {
      ...queue[index],
      bumps: queue[index].bumps + 1,
      alreadyBumped: alreadyBumped[id] || false
    };

    superBump(queue);

    this.setState({ queue });
  };

  addMember = member => {
    if (!this.state.members.find(el => el === member)) {
      this.setState(prevState => ({
        members: [...prevState.members, member]
      }));
    }
  };
}

export const RoomProvider = ({ children }) => {
  const room = new RoomContainer();

  return <Provider inject={[room]}>{children}</Provider>;
};
