import { createContainer } from '~/hooks/useContainer';
import useSpotifyPlayer from './useSpotifyPlayer';
import useMusicControls from './useMusicControls'

function useSpotifyContainer() {
  // useMusicControls();

  return useSpotifyPlayer();
}

export default createContainer(useSpotifyContainer, 'SpotifyContainer');
