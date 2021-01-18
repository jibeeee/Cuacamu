import React, { Component, useEffect, useState } from 'react';
import { Dimensions, Text, Image, StyleSheet, View, ImageBackground, FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const image_url = { uri:"https://www.deltavcapital.com/wp-content/uploads/2014/07/forest-patrol.jpg"};
const { width, height } = Dimensions.get('window');
let weatherIconMapping = new Map;
weatherIconMapping.set('01d', 'weather-sunny');
weatherIconMapping.set('01n', 'weather-night')
weatherIconMapping.set('02d', 'weather-partly-cloudy')
weatherIconMapping.set('02n', 'weather-night-partly-cloudy')
weatherIconMapping.set('03d', 'weather-partly-cloudy')
weatherIconMapping.set('03n', 'weather-night-partly-cloudy')
weatherIconMapping.set('04d', 'weather-partly-cloudy')
weatherIconMapping.set('04n', 'weather-night-partly-cloudy')
weatherIconMapping.set('09d', 'weather-pouring')
weatherIconMapping.set('09n', 'weather-pouring')
weatherIconMapping.set('10d', 'weather-partly-rainy')
weatherIconMapping.set('10n', 'weather-rainy')
weatherIconMapping.set('11d', 'weather-lightning-rainy')
weatherIconMapping.set('11n', 'weather-lightning')
weatherIconMapping.set('13d', 'weather-partly-snowy')
weatherIconMapping.set('13n', 'weather-snowy')
weatherIconMapping.set('50d', 'weather-hazy')
weatherIconMapping.set('50n', 'weather-fog')



export default class home extends Component {

    constructor(props){
        super(props);
        this.state ={
            data: [],
            isLoading: true,
            temp:"",
            temp_tmr:"",
            temp_nxt_tmr:"",
            city:"Chennai",
            icon:"",
            icon_tmr:"",
            icon_nxt_tmr:"",
            city_display:"",
            desc: "",
        },
        this.fetch_weather()
    }
    
    fetch_weather=()=>(
        fetch("http://api.openweathermap.org/data/2.5/forecast?q=Mumbai&lang=id&appid=8f329191705211eed0078b4d2038571f")
        .then((response) => response.json())
        .then((json) => {
        this.setState({ data: json });
        this.setState({ temp : (json.list[0].main.temp-273.15).toFixed(0)})
        this.setState({ temp_tmr: (json.list[8].main.temp-273.15).toFixed(0)})
        this.setState({ temp_nxt_tmr: (json.list[16].main.temp-273.15).toFixed(0)})
        this.setState({ city_display : json.city.name })
        this.setState({ icon: json.list[0].weather[0].icon})
        this.setState({ icon_tmr: json.list[8].weather[0].icon})
        this.setState({ icon_nxt_tmr: json.list[16].weather[0].icon})
        this.setState({ desc : json.list[0].weather[0].description})
        })
        .catch((error) => console.error(error))
        .finally(() => {
        this.setState({ isLoading: false });
        })
    );


    render() {
        return(
        <View style={styles.container}>

            {/* Background */}
            <ImageBackground source={image_url} style={styles.image_bg}>
                <View style={styles.layer}>

                    {/* App Tittle */}
                    <Text style={styles.title}>
                        <MaterialCommunityIcons name="weather-partly-cloudy" size={30} color="white" />CuacaMu
                    </Text>

                    {/* City Location and Date*/}
                    <Text style={styles.city}>{this.state.city_display}</Text>
                    <Text style={styles.date}>Senin , 18 Januari 2021</Text>

                    {/*  Current Temperature and Status*/}
                    <View  style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between',marginBottom: 50}}>
                        <Text style={styles.temp}>{this.state.temp}<MaterialCommunityIcons name="temperature-celsius" size={52} color="white" /></Text>
                        <MaterialCommunityIcons name={weatherIconMapping.get(this.state.icon)} size={90} color="white" />
                        <Text style={styles.desc}>{this.state.desc}</Text>
                    </View>

                    {/* Weather Forecast */}
                    <View style={{flex: 1, flexDirection: 'row'}}>

                        {/* Hari ini */}
                        <View style={{flex: 1, flexDirection: 'column', justifyContent:"center", alignItems: 'center'}}>
                            <MaterialCommunityIcons name="weather-partly-rainy" size={40} color="#FFDF00" />
                            <Text style={styles.desc_mini_main}>{this.state.temp}
                            <MaterialCommunityIcons name="temperature-celsius" size={20} color="#FFDF00" /></Text>
                            <Text style={styles.desc_mini_main}>Hari ini</Text>
                        </View>

                        {/*  Besok */}
                        <View style={{flex: 1, flexDirection: 'column', justifyContent:"center", alignItems: 'center'}}>
                            <MaterialCommunityIcons name={weatherIconMapping.get(this.state.icon_tmr)} size={40} color="white" />
                            <Text style={styles.desc_mini}>{this.state.temp_tmr}
                            <MaterialCommunityIcons name="temperature-celsius" size={20} color="white" /></Text>
                            <Text style={styles.desc_mini}>Besok</Text>
                        </View>

                        {/* Lusa */}
                        <View style={{flex: 1, flexDirection: 'column', justifyContent:"center", alignItems: 'center'}}>
                            <MaterialCommunityIcons name={weatherIconMapping.get(this.state.icon_nxt_tmr)} size={40} color="white" />
                            <Text style={styles.desc_mini}>{this.state.temp_nxt_tmr}
                            <MaterialCommunityIcons name="temperature-celsius" size={20} color="white" /></Text>
                            <Text style={styles.desc_mini}>Lusa</Text>
                        </View>
                        
                    </View>

                </View>
            </ImageBackground>
        </View>
        )
        
    };
    
};

// function home() {
    // return (
        // <View style={styles.container}>

        //     {/* Background */}
        //     <ImageBackground source={image_url} style={styles.image_bg}>
        //         <View style={styles.layer}>

        //             {/* App Tittle */}
        //             <Text style={styles.title}>
        //                 <MaterialCommunityIcons name="weather-partly-cloudy" size={30} color="white" />CuacaMu
        //             </Text>

        //             {/* City Location and Date*/}
        //             <Text style={styles.city}>Malang</Text>
        //             <Text style={styles.date}>Jumat, 15 Januari 2021</Text>

        //             {/*  Current Temperature and Status*/}
        //             <View  style={{alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between',marginBottom: 50}}>
        //                 <Text style={styles.temp}>28<MaterialCommunityIcons name="temperature-celsius" size={52} color="white" /></Text>
        //                 <MaterialCommunityIcons name="weather-partly-rainy" size={90} color="white" />
        //                 <Text style={styles.desc}>Hujan Ringan</Text>
        //             </View>

        //             {/* Weather Forecast */}
        //             <View style={{flex: 1, flexDirection: 'row'}}>

        //                 {/* Hari ini */}
        //                 <View style={{flex: 1, flexDirection: 'column', justifyContent:"center", alignItems: 'center'}}>
        //                     <MaterialCommunityIcons name="weather-partly-rainy" size={40} color="#FFDF00" />
        //                     <Text style={styles.desc_mini_main}>28<MaterialCommunityIcons name="temperature-celsius" size={20} color="#FFDF00" /></Text>
        //                     <Text style={styles.desc_mini_main}>Hari ini</Text>
        //                 </View>

        //                 {/*  Besok */}
        //                 <View style={{flex: 1, flexDirection: 'column', justifyContent:"center", alignItems: 'center'}}>
        //                     <MaterialCommunityIcons name="weather-sunny" size={40} color="white" />
        //                     <Text style={styles.desc_mini}>30<MaterialCommunityIcons name="temperature-celsius" size={20} color="white" /></Text>
        //                     <Text style={styles.desc_mini}>Besok</Text>
        //                 </View>

        //                 {/* Lusa */}
        //                 <View style={{flex: 1, flexDirection: 'column', justifyContent:"center", alignItems: 'center'}}>
        //                     <MaterialCommunityIcons name="weather-sunny" size={40} color="white" />
        //                     <Text style={styles.desc_mini}>30<MaterialCommunityIcons name="temperature-celsius" size={20} color="white" /></Text>
        //                     <Text style={styles.desc_mini}>Lusa</Text>
        //                 </View>
                        
        //             </View>

        //         </View>
        //     </ImageBackground>
        // </View>
//     )
// }



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