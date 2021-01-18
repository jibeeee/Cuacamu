import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';

import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

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
        activeColor= '#260E25'
        labelStyle={{ fontSize: 12 }}
        barStyle={{ backgroundColor: 'rgb(200,200,200)', paddingBottom:10, borderRadius:50 }}
      > 
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Beranda",
            tabBarIcon: ({color}) => ( 
              <MaterialCommunityIcons name="home" size={26} color={color} />
            )
          }}/>
        <Tab.Screen
        name="Screen"
        component={ListsStackScreen}
        options={{
          tabBarLabel: "Lokasi",
          tabBarIcon: ({color}) => ( 
            <Ionicons name="location-sharp" size={26} color={color} />
            
          )
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
