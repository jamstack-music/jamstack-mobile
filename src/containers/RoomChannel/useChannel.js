import { useEffect, useMemo } from 'react';
import { Socket } from 'phoenix';

export default function useChannel(socketURL, channelId) {
  const channel = useMemo(() => {
    const socket = new Socket(socketURL);
    socket.connect();

    const newChannel = socket.channel(channelId);
    newChannel.join();

    return newChannel;
  }, [channelId, socketURL]);

  useEffect(() => () => channel.leave(), [channel]);

  return channel;
}
