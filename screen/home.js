import React from 'react'
import { Dimensions, Component, Text, Image, StyleSheet, View, ImageBackground} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const image_url = { uri:"https://www.deltavcapital.com/wp-content/uploads/2014/07/forest-patrol.jpg"};
const { width, height } = Dimensions.get('window');

function home() {
    return (
        <View style={styles.container}>

            {/* Background */}
            <ImageBackground source={image_url} style={styles.image_bg}>
                <View style={styles.layer}>

                    {/* App Tittle */}
                    <Text style={styles.title}>
                        <MaterialCommunityIcons name="weather-partly-cloudy" size={30} color="white" />CuacaMu
                    </Text>

                    {/* City Location and Date*/}
                    <Text style={styles.city}>Malang</Text>
                    <Text style={styles.date}>Jumat, 15 Januari 2021</Text>

                    {/*  Current Temperature and Status*/}
                    <View  style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between',marginBottom: 50}}>
                        <Text style={styles.temp}>28<MaterialCommunityIcons name="temperature-celsius" size={52} color="white" /></Text>
                        <MaterialCommunityIcons name="weather-partly-rainy" size={90} color="white" />
                        <Text style={styles.desc}>Hujan Ringan</Text>
                    </View>

                    {/* Weather Forecast */}
                    <View style={{flex: 1, flexDirection: 'row'}}>

                        {/* Hari ini */}
                        <View style={{flex: 1, flexDirection: 'column', justifyContent:"center", alignItems: 'center'}}>
                            <MaterialCommunityIcons name="weather-partly-rainy" size={40} color="#FFDF00" />
                            <Text style={styles.desc_mini_main}>28<MaterialCommunityIcons name="temperature-celsius" size={20} color="#FFDF00" /></Text>
                            <Text style={styles.desc_mini_main}>Hari ini</Text>
                        </View>

                        {/*  Besok */}
                        <View style={{flex: 1, flexDirection: 'column', justifyContent:"center", alignItems: 'center'}}>
                            <MaterialCommunityIcons name="weather-sunny" size={40} color="white" />
                            <Text style={styles.desc_mini}>30<MaterialCommunityIcons name="temperature-celsius" size={20} color="white" /></Text>
                            <Text style={styles.desc_mini}>Besok</Text>
                        </View>

                        {/* Lusa */}
                        <View style={{flex: 1, flexDirection: 'column', justifyContent:"center", alignItems: 'center'}}>
                            <MaterialCommunityIcons name="weather-sunny" size={40} color="white" />
                            <Text style={styles.desc_mini}>30<MaterialCommunityIcons name="temperature-celsius" size={20} color="white" /></Text>
                            <Text style={styles.desc_mini}>Lusa</Text>
                        </View>
                        
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily:"monoscape",
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  title:{
      fontSize: 20,
      marginTop: 24,
      color: "#ffff"
      
  },
  city:{
      fontSize: 38,
      fontWeight: "bold",
      color: "#ffff",
      fontFamily:"Roboto",
      paddingTop: 60
      
  },
  date:{
      fontSize: 22,
      fontWeight: "500",
      color: "#ffff"
  },
  temp:{
      fontSize: 88,
      fontWeight: "bold",
      color: "#ffff",
      paddingTop: 30
  },
  desc:{
      fontSize: 28,
      fontWeight: "bold",
      color: "#ffff"
  },
  desc_mini:{
      fontSize: 18,
      fontWeight: "bold",
      color: "#ffff"
  },
  desc_mini_main:{
      fontSize: 18,
      fontWeight: "bold",
      color: "#FFDF00"
  },
  image_bg: {
      flex: 1,
      width: width,
      alignItems: 'center',
      
  },
  layer:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.18)',
        width: width,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
  }

});