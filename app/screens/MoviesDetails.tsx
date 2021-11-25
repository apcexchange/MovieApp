import React, { useEffect, useState } from "react";
import {
  Button,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import { BASE_URL } from "../constants/Constants";
import {
  NativeStackHeaderProps,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { movieApi } from "../api/MovieApi";
import YoutubePlayer from "react-native-youtube-iframe";

const { height, width } = Dimensions.get("window");

type Props = {
  route: RouteProp<{ params: { key: any } }, "params">;
};

export default function MoviesDetails({ route }) {
  const info = route.params;

  function fetchTrailers() {
    movieApi
      .get(
        `movie/${info.item.id}/videos?api_key=b24a86c52ccd597f31b242f80b388e08&language=en-US`
      )
      .then(async function (response) {
        setPopularMovvieTrailers(response.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const [popularMovieTrailers, setPopularMovvieTrailers] = useState<
    { key: string }[]
  >([]);

  useEffect(() => {
    fetchTrailers();
  }, []);

  const image = { uri: BASE_URL + info.item.backdrop_path };

  return (
    <ScrollView>
      <View>
        <ImageBackground style={styles.imageBackground} source={image} />
        <Text style={styles.title}>  {info.item.title}</Text>
        <Text style={styles.overview}> {info.item.overview}</Text>
        <Text style={styles.releaseDate}> Released Date: {info.item.release_date}</Text>
        <Text style={styles.voteCount}> Vote Count: {info.item.vote_count}</Text>
        <Text style={styles.voteAverage}>Vote Average:{info.item.vote_average}{" "}</Text>

        <Text style={styles.trailer}> Trailers</Text>

        <FlatList
          data={popularMovieTrailers}
          keyExtractor={(item) => `key-${info.item.id}`}
          renderItem={(data) => {
            console.log(data.item.key);
            return (
              <View>
                <YoutubePlayer
                  height={300}
                  play={false}
                  videoId={data.item.key}
                />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: width,
    height: height / 1.9,
    resizeMode: "cover",
  },
  title: {
    fontSize: 35,
    margin: 10,
    fontWeight: 'bold', 
    color: 'tomato',
    textAlign:'center'
  },

  releaseDate: {
    margin: 10,
    fontSize: 28,
  },

  language: {
    margin: 10,
    fontSize: 26,
  },

  voteCount: {
    margin: 10,
    fontSize: 26,
  },

  voteAverage: {
    margin: 10,
    fontSize: 26,
  },

  overview: {
    margin: 5,
    fontSize: 20,
    padding: 10
  },

  trailer: {
      fontSize: 35,
      textAlign: 'center',
      margin:12,
      color: 'tomato'
  }
});
