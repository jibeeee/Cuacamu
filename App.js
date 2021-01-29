import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Home from './screen/home';
import Search from './screen/search';

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
        component={Search}
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

