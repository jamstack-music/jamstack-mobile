import React, { useState, useRef } from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, View, Text, Dimensions } from 'react-native';
import BottomDrawer from 'rn-bottom-drawer';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Subscribe } from 'unstated';
import SongPlayer from '../components/SongPlayer';
import BumpList from '../components/Songs/BumpList';

import { RoomContainer } from '../store/room';

import { bumpSong, nextSong } from '../data/api';

const { height: HEIGHT } = Dimensions.get('window');
const XOFFSET = getBottomSpace();

const CurrentPlaying = () => {
  const scrollRef = useRef(null);
  const [scrollable, setScrollable] = useState(false);

  const resetList = () => {
    scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
  };

  return (
    <Subscribe to={[RoomContainer]}>
      {room => (
        <SafeAreaView style={{ flex: 1 }}>
          <SongPlayer
            song={room.state.currentSong}
            nextSong={() => nextSong(room.state.name)}
            style={{ marginTop: 50 }}
          />
          <BottomDrawer
            backgroundColor="#F9FAFF"
            containerHeight={HEIGHT * 0.9}
            downDisplay={HEIGHT * 0.75}
            onExpanded={() => setScrollable(true)}
            onCollapsed={resetList}
            offset={50 + XOFFSET}
            startUp={false}
            shadow={false}
          >
            <View>
              <Text style={{ textAlign: 'center', fontSize: 15, padding: 10, fontWeight: 'bold' }}>
                Up Next
              </Text>
              <ScrollView
                ref={scrollRef}
                onMomentumScrollEnd={() => setScrollable(false)}
                scrollEnabled={scrollable}
              >
                <TouchableOpacity activeOpacity={1}>
                  <BumpList
                    onBump={song => bumpSong(room.state.name, song.id)}
                    songs={room.state.queue}
                    style={{ marginBottom: 100 + XOFFSET }}
                  />
                </TouchableOpacity>
              </ScrollView>
            </View>
          </BottomDrawer>
        </SafeAreaView>
      )}
    </Subscribe>
  );
};

export default CurrentPlaying;
