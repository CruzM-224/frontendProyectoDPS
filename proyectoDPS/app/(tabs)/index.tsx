import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, ActivityIndicator } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useFonts } from 'expo-font';

export default function Tab() {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator size="large" color="#0000ff" />
    );
  }

  return (
    <View style={styles.container}>
      
      {/* Localizacion */}
      <View style={styles.containerLocation}>
        <View style={styles.location}>
          <FontAwesome6 name="location-dot" size={24} color="black" />
          <Text style={styles.locationText}>San Salvador, El Salvador</Text>
        </View>
      </View>

      {/* Search */}
      <View style={styles.containerSearch}>
        <View style={styles.search}>
          <FontAwesome6 name="magnifying-glass" size={24} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Busca en la tienda" 
          />
        </View>
      </View>

      {/* image */}
      <View style={styles.containerImage}>
        <Image
          style={{width: 330, height: 150, borderRadius: 10}}
          source={require('../../assets/images/home1.jpg')}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
  },
  containerLocation: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    paddingTop: 2,
  },
  containerSearch: { 
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  search: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'lightgrey',
    width: 300,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  searchInput: {
    height: 40,
    borderColor: 'lightgrey',
    backgroundColor: 'lightgrey',
    borderWidth: 1,
    width: 200,
    borderRadius: 10,
    marginLeft: -30,
    fontFamily: 'Poppins-Regular',
    paddingTop: 2,
  },
  containerImage: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    overflow: 'hidden',
    width: 330,

  }
});
