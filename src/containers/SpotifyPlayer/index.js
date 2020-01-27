import { createContainer } from 'Hooks/useContainer';
import useSpotifyPlayer from './useSpotifyPlayer';
import useMusicControls from './useMusicControls'

function useSpotifyContainer() {
  // useMusicControls();

  return useSpotifyPlayer();
}

export default createContainer(useSpotifyContainer, 'SpotifyContainer');
