// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SvgUri } from 'react-native-svg';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

const Search= ({navigation}) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://cuacamu.000webhostapp.com/cuaca.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name
          ? item.name.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const SvgURL = {uri : 'https://restcountries.eu/data/irn.svg'}

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <View style={styles.renderItem}>

        <View>
          {/* <SvgUri style={styles.image} source={{uri : 'https://restcountries.eu/data/som.svg'}}/> */}
          {/* <Text>{item.flag}</Text> */}
          <Image
          width="200"
          height="200"
          source={SvgURL}/>
        </View>
       
       <View style={styles.rightSection}> 
          <Text style={styles.itemStyle} onPress={() => {navigation.navigate('Home', {link: item.name})}}>
            {item.name.toUpperCase()}
          </Text>
       </View>
        
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  image: {
    width: "50",
    height: "50",
    borderRadius : 10,
  },
  renderItem:{
    padding: 15,
    borderColor: "lightgray",
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white"
  },
  rightSection: {
    flexShrink: 1,
    paddingLeft: 15,
}
});

export default Search;
