import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, MaterialIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopRatedMovies from '../screens/TopRatedMovies';
import LatestMovies from '../screens/LatestMovies';
import StackNav from './StackNavigator';
import { ScrollView } from 'react-native';


const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return(

    <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: 'red',
          tabBarActiveTintColor: 'white',
          tabBarInactiveBackgroundColor: "#eee",
          tabBarInactiveTintColor: 'black',
          headerShown: false,
          
        }}>
       <Tab.Screen  
       name= 'Popular Movies' 
       component={ StackNav } 
       options={{
         tabBarIcon: () => <MaterialCommunityIcons name="movie" size={25} color="black" />
        }}/>

       <Tab.Screen 
       name= 'Top Rated Movies' 
       component={ TopRatedMovies } 
       options={{
         tabBarIcon: () => <MaterialIcons name="star-rate" size={24} color="black" />
        }}/>

       <Tab.Screen
        name= 'Latest Movies'
        component={LatestMovies} 
        options={{
          tabBarIcon: () => <MaterialIcons name="favorite-border" size={24} color="black"/>
        }}/>


     </Tab.Navigator>
  );
}