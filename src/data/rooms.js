import core from './core';

export const createRoom = body => core.post('rooms', body);
