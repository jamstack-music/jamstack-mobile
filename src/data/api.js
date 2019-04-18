import axios from 'axios'
const BASE = 'http://34.219.153.198:5000'

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
  console.log(res)
  return res
}
