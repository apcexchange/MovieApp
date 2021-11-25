import axios from "axios";
import React, { useEffect, useState } from "react";
import { NativeStackNavigationOptions, NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack'
import {
  Button,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { movieApi } from "../api/MovieApi";
import { MovieCard } from "../component/MovieCard";

type Props = {
  navigation: NativeStackNavigationProp<any>
}


export default function PopularMovies( {navigation}:Props ) {
  const [popularMovie, setPopularMovvie] = useState<{key:string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);


  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size='large' color='red'/>
      </View>
    );
  };

  const loadMore = () => {
    setCurrentPage(currentPage+1)
   
  }

  useEffect(() => {
    getPopularMovies();
  }, [currentPage]);

  function getPopularMovies() {
    movieApi
      .get(`/movie/popular?api_key=b24a86c52ccd597f31b242f80b388e08&language=en-US&page=${currentPage}`)
      .then(async function (response) {
        setPopularMovvie([...popularMovie, ...response.data.results])
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  

  if (!popularMovie) {
    return null;
  }


  return (
    <View>
      {isLoading ? (
        <ActivityIndicator
          style={styles.progressBar}
          size="large"
          color="red"
        />
      ) : (
        <>
          <FlatList
            data={popularMovie}
            keyExtractor={(item, index) => "key" + index}
            renderItem={(data: { [key: string]: any }) => {
              return (

                <MovieCard
                  title={data.item.title}
                  subTitleName='Popularity:'
                  subTitle={data.item.popularity}
                  imageUrl= {data.item.poster_path}
                  onPress={()=> navigation.navigate('Movies Details', data )}
                  />
              );
              
            }
            
          }
          ListFooterComponent={renderLoader}
          onEndReached={loadMore}
          onEndReachedThreshold={0}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    flex: 1,
    justifyContent: "center",
    color: "red",
  },
});
