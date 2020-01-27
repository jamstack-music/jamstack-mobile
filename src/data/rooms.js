import core from './core';

export const createRoom = body => core.post('rooms', body);

export const rejoinRoom = roomId => core.get(`rooms/${roomId}`);

export const joinRoom = (roomId, body) => core.put(`rooms/${roomId}`, body);
