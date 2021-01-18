import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

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
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
        activeColor= 'red'
        labelStyle={{ fontSize: 12 }}
        barStyle={{ backgroundColor: 'black' }}
      > 
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Beranda",
            tabBarIcon: ({color,size}) => ( 
              <MaterialCommunityIcons name="home" size={30} color={color} />
            )
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
    alignItems: 'center',
  },
});
