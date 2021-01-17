import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

import Home from './screen/home';
import Search from './screen/search';
import DetailSearch from './screen/detailSearch'

const ListsStack = createStackNavigator();

function ListsStackScreen() {
  return (
    <ListsStack.Navigator>
      <ListsStack.Screen name= 'Search' component={Search}/>
      <ListsStack.Screen name= "Detail Search" component={DetailSearch}/>
    </ListsStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator  tabBarOptions={{
              activeTintColor: 'black',
            }}> 
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Beranda",
            tabBarIcon: ({black,size}) => ( <MaterialCommunityIcons name="home" size={30} color="black" />)
          }}/>
        <Tab.Screen
        name="Screen"
        component={ListsStackScreen}
        options={{
          tabBarLabel: "Lokasi",
          tabBarIcon: ({color,size}) => ( <Ionicons name="md-location-outline" size={30} color="black" />)
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
