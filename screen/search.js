import React from 'react';
import { Text, View, Button } from 'react-native';

const search = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
      <Button onPress={() => {navigation.navigate('Detail Search')}} title="Go on"/>
    </View>
  )
}
export default search;