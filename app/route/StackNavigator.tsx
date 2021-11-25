import React from 'react';
import { View, Text, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PopularMovies from '../screens/PopularMovies';
import MoviesDetails from '../screens/MoviesDetails';
import MoviesTrailers from '../screens/MovieTrailers';



const Stack = createNativeStackNavigator();


export default function StackNav() {
    return(
    <Stack.Navigator 
    screenOptions={
      {
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 30
        }
      }
    }>
      <Stack.Screen name='Popular Movies' component={ PopularMovies }/>
  
      <Stack.Screen name='Movies Details' component={ MoviesDetails }/>
  
      <Stack.Screen name='Movies Trailers' component={ MoviesTrailers }/>
    </Stack.Navigator>
    );
  }
  