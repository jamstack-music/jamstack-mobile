import axios from 'axios'
const BASE = 'http://52.42.15.3:5000'

export const createRoom = async(id) => {
  const res = await axios.get(`${BASE}/create/${id}`)
  return res
}
export const addSong = async (room, song) => {
  const res = await axios.post(`${BASE}/add/${room}`, song)
  return res
}

export const joinRoom = async (room, name) => {
  const res = await axios.get(`${BASE}/join/${room}/${name}`)
  return res
}

export const nextSong = async (room) => {
  const res = await axios.get(`${BASE}/next/${room}`)
  return res
}
