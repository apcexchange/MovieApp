import React from 'react';
import {View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

type TrailerProps = {
    height: string,
    play: boolean,
    videoId: string
}

export const TrailersComponent = ({height, play,videoId}:TrailerProps) => {

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={true}
        videoId={'84WIaK3bl_s'}
      />
    </View>
  );
};