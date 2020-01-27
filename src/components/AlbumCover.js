import React, { useMemo } from 'react';
import { Image } from 'react-native';
import albumPlaceholder from '../assets/album-placeholder.png';

export default function AlbumCover(props) {
  const { uri, dim } = props;

  const style = useMemo(() => ({ width: dim, height: dim }), [dim]);
  const source = useMemo(() => ({ uri }), [uri]);

  return <Image defaultSource={albumPlaceholder} source={source} style={style} />;
}
