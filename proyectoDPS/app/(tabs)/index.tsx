import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  Image, 
  ActivityIndicator, 
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useFonts } from 'expo-font';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

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
    <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      
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
          style={{width: '100%', height: '100%', borderRadius: 10}}
          source={require('../../assets/images/home1.jpg')}
          />
      </View>

      {/* line */}
      <View style={styles.line} />

      {/* Offers */}
      <View style={styles.containerOffers}>
        <View style={styles.headerOffers}>
          <View style={styles.headerSquare} />
          <Text style={styles.headerText}>Ofertas</Text>
        </View>
        <Text style={styles.offersTitle}>Ultimas ofertas</Text>
        <View style={styles.containerOffersElements}>
          <View style={styles.offer}>
            <Image
              style={styles.offerImage}
              source={require('../../assets/images/home1.jpg')}
            />
            <View style={styles.icons}>
              <Pressable style={styles.favourites}>
                <FontAwesome6 size={20} name="heart" color={'#000000'} />
              </Pressable>
              <Pressable style={styles.seen}>
                <FontAwesome6 size={20} name="eye" color={'#000000'} />
              </Pressable>
            </View>
            <Text style={styles.offerText}>Producto 1</Text>
            <Text style={styles.offerPrice}>$10.00</Text>
            <View style={styles.stars}>
            </View>
          </View>
          <View style={styles.offer}>
            <Image
              style={styles.offerImage}
              source={require('../../assets/images/home1.jpg')}
            />
            <View style={styles.icons}>
              <Pressable style={styles.favourites}>
                <FontAwesome6 size={20} name="heart" color={'#000000'} />
              </Pressable>
              <Pressable style={styles.seen}>
                <FontAwesome6 size={20} name="eye" color={'#000000'} />
              </Pressable>
            </View>
            <Text style={styles.offerText}>Producto 1</Text>
            <Text style={styles.offerPrice}>$10.00</Text>
            <View style={styles.stars}>
            </View>
          </View>
        </View>
      </View>

      {/* TODO mejorar la distibucion en los elementos de las ofertas
        Revisar con herramientas de desarrollo de firefox
      */}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontFamily: 'Poppins-Regular',
    overflow: 'scroll',
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
    height: '25%',
    maxHeight: 250,
    minHeight: 150,
    overflow: 'hidden',
    maxWidth: 950,
    width: '90%',
  },
  line: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    width: '90%',
    marginTop: 20,
    marginBottom: 8,
  },
  containerOffers: {
    width: '90%',
    height: '100%',
    alignItems: 'center',
  },
  headerOffers: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 70,
  },
  headerSquare: {
    width: 35,
    height: 50,
    backgroundColor: 'black',
    marginLeft: 8,
    borderRadius: 8,
  },
  headerText: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  offersTitle: {
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 8,
  },
  containerOffersElements: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%',
  },
  offer: {
    width: '35%',
    aspectRatio: 200/170,
    minHeight: 200,
    minWidth: 170,
    marginTop: 10,
    alignItems: 'center',
    position: 'relative',
  },
  offerImage: {
    width: '90%',
    height: '50%',
    minHeight: 120,
    minWidth: 150,
    aspectRatio: '120/150',
    borderRadius: 10,
    marginTop: 5,
  },
  icons: {
    position: 'absolute',
    width: screenWidth * 0.08,
    height: screenHeight * 0.09,
    flexDirection: 'column',
    top: '5%',
    right: '10%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  favourites: {
    width: screenHeight * 0.04,
    height: screenHeight * 0.04,
    borderRadius: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  seen: {
    width: screenHeight * 0.04,
    height: screenHeight * 0.04,
    borderRadius: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  offerText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft: 10,
    height: 20,
  },
  offerPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 10,
    color: '#DB4444',
    height: 20,
  },
  stars: {
  },
});
