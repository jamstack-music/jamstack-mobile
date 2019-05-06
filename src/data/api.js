import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const BASE = 'http://52.42.15.3:5000';

export const createRoom = async id => {
  const res = await axios.get(`${BASE}/create/${id}`);
  return res;
};
export const addSong = async (room, song) => {
  const addedBy = await AsyncStorage.getItem('name');
  const res = await axios.post(`${BASE}/add/${room}`, { ...song, addedBy, bumps: 0 });
  return res;
};

export const joinRoom = async (room, name) => {
  const res = await axios.get(`${BASE}/join/${room}/${name}`);
  return res;
};

export const bumpSong = async (room, song) => {
  const name = await AsyncStorage.getItem('name');
  const jsonMap = (await AsyncStorage.getItem('alreadyBumped')) || '{}';
  const map = JSON.parse(jsonMap);
  map[song] = true;
  AsyncStorage.setItem('alreadyBumped', JSON.stringify(map));

  const res = await axios.get(`${BASE}/${room}/${name}/bump/${song}`);
  return res;
};
export const nextSong = async room => {
  const res = await axios.get(`${BASE}/next/${room}`);
  return res;
};
