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
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import imagenEjemplo from '../../../assets/images/home1.jpg';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface ElementProps {
  image: number,
  text: string,
  price: number,
  originalPrice?: number,
}

function Element ({ image, text, price, originalPrice  }: ElementProps) {
  return(
    <View style={styles.offer}>
    <Image
      style={styles.offerImage}
      source={image}
    />
    <View style={styles.icons}>
      <Pressable style={styles.favourites}>
        <FontAwesome6 size={20} name="heart" color={'#000000'} />
      </Pressable>
      <Pressable style={styles.seen}>
        <FontAwesome6 size={20} name="eye" color={'#000000'} />
      </Pressable>
    </View>
    <Text style={styles.offerText}>{text}</Text>
    <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
      <Text style={styles.offerPrice}>${price.toFixed(2)}</Text>
      <Text style={styles.originalPrice}>${originalPrice?.toFixed(2)}</Text>
    </View>
    <View style={styles.stars}>
    </View>
  </View>
  );
}

export default function Tab() {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../../../assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <ActivityIndicator size="large" color="#0000ff" />
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <StatusBar style="dark" />
          {/* Localizacion */}
          <View style={styles.homeTitle}>
            <Image
              source={require('../../../assets/images/Logotipo-UDB-Tech-shop.png')} // replace with your logo path
              style={styles.logo}
            />
          </View>
          <View style={styles.containerLocation}>
            <Link href="/home/location" asChild>
              <Pressable style={styles.location}>
                <FontAwesome6 name="location-dot" size={24} color="black" />
                <Text style={styles.locationText}>San Salvador, El Salvador</Text>
              </Pressable>
            </Link>
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
              source={require('../../../assets/images/home1.jpg')}
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
              <Element image={imagenEjemplo} text={'Producto 1'} price={10.00} originalPrice={14.54}/>
              <Element image={imagenEjemplo} text={'Producto 2'} price={34.00} originalPrice={55} />
              <Element image={imagenEjemplo} text={'Producto 3'} price={36.99} originalPrice={45} />
              <Element image={imagenEjemplo} text={'Producto 4'} price={12.00} originalPrice={15} />
            </View>
          </View>
          {/* line */}
          <View style={styles.line} />
    
          {/* New products */}
          <View style={styles.containerOffers}>
            <View style={styles.headerOffers}>
              <View style={styles.headerSquare} />
              <Text style={styles.headerText}>Nuevo</Text>
            </View>
            <Text style={styles.offersTitle}>Recien llegado</Text>
            <View style={styles.containerNewProducts}>
              <View style={styles.containerMainNewProducts}>
                <View style={styles.containerMainNewProductsText}>
                  <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 18, width: '90%' }}>Playstation 5</Text>
                  <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 12, textShadowColor: 'black', textShadowRadius: 15, width: '60%'  }}>Black and white version of PS5 coming out on sale.</Text>
                  <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14, textDecorationLine: 'underline', width: '90%'  }}>Buy now</Text>
                </View>
                <Image
                  source={require('../../../assets/images/ps5.png')}
                  style={{ aspectRatio: 1, minHeight:250, minWidth:250, width: screenHeight * 0.3, height: screenHeight * 0.3, position: 'absolute', right: 5, bottom: 30}}
                />
              </View>
              <View style={styles.secondaryPanel}>
                <View style={styles.containerMain2NewProducts}>
                  <View style={styles.containerMainNewProductsText2}>
                    <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'right', width: '40%', alignSelf: 'flex-end'}}>LED 4K Monitors</Text>
                    <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'right', width: '50%', alignSelf: 'flex-end', textShadowColor: 'black', textShadowRadius: 15, }}>Most advanced technologies</Text>
                    <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 14, textAlign: 'right', width: '90%', alignSelf: 'flex-end', textDecorationLine: 'underline' }}>Buy now</Text>
                  </View>
                  <Image
                    source={require('../../../assets/images/monitor.png')}
                    style={{ width: 170, height: 150, position: 'absolute', left: 20, bottom: 20,}}
                  />
                </View>
                <View style={styles.containerSecondaryNewProducts}>
                  <View style={styles.containerSecondaryProduct}>
                    <View style={styles.containerMainSecondaryProductsText}>
                      <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'right', width: '90%', alignSelf: 'flex-end'}}>Speakers</Text>
                      <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'right', width: '90%', alignSelf: 'flex-end', textShadowColor: 'black', textShadowRadius: 15 }}>Amazon wireless speakers</Text>
                    </View>
                    <Image
                      source={require('../../../assets/images/amazonSpeaker.png')}
                      style={{ width: 100, height: 120, position: 'absolute', left: 0, bottom: 10,}}
                    />
                  </View>
                  <View style={styles.containerSecondaryProduct}>
                    <View style={styles.containerMainSecondaryProductsText}>
                      <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: 'right', width: '90%', alignSelf: 'flex-end'}}>Mouse</Text>
                      <Text style={{ color: 'white', fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'right', width: '90%', alignSelf: 'flex-end', textShadowColor: 'black', textShadowRadius: 15 }}>Wired hp mouse HP 100</Text>
                    </View>
                    <Image
                      source={require('../../../assets/images/hp100.png')}
                      style={{ width: 110, height: 100, position: 'absolute', left: 10, bottom: 30,}}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* line */}
          <View style={styles.line} />

          {/* Benefits */}
          <View style={styles.containerBenefits}>
            <View style={styles.benefit}>
              <View style={styles.exteriorCircle}>
                <View style={styles.interiorCircle}>
                  <FontAwesome6 name="truck" size={36} color="white" />
                </View>
              </View>
              <Text style={styles.benefitText}>Amplia Cobertura</Text>
              <Text style={styles.benefitSecondaryText}>Envio gratis en ordenes mayores a $100</Text>
            </View>
            <View style={styles.benefit}>
              <View style={styles.exteriorCircle}>
                <View style={styles.interiorCircle}>
                  <FontAwesome6 name="headset" size={36} color="white" />
                </View>
              </View>
              <Text style={styles.benefitText}>Asistencia 24/7</Text>
              <Text style={styles.benefitSecondaryText}>Soporte y asistencia amigable 24/7</Text>
            </View>
            <View style={styles.benefit}>
              <View style={styles.exteriorCircle}>
                <View style={styles.interiorCircle}>
                  <FontAwesome6 name="shield-halved" size={36} color="white" />
                </View>
              </View>
              <Text style={styles.benefitText}>Devoluciones</Text>
              <Text style={styles.benefitSecondaryText}>Las devoluciones se hacen efectivas en 30 dias</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  homeTitle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
    height: 64,
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  logo: {
    width: 60, // adjust as needed
    height: 60, // adjust as needed
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
    height: screenHeight * 0.2,
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
  },
  offer: {
    width: '32%',
    height: screenHeight * 0.3,
    minHeight: 200,
    minWidth: 160,
    maxWidth: 350,
    marginTop: 10,
    alignItems: 'center',
    position: 'relative',
  },
  offerImage: {
    width: '100%',
    height: '70%',
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
    right: '5%',
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
  
  originalPrice: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 10,
    color: 'grey',
    height: 20,
    textDecorationLine: 'line-through',
  },
  stars: {
  },
  containerNewProducts: {
    width: '95%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 950,

  },
  secondaryPanel: {
    width: '100%',
    maxWidth: 450,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 0,
    maxHeight: 400,
  },
  containerMainNewProducts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 450,
    maxHeight: 400,
    height: screenHeight * 0.5,
    backgroundColor: 'black',
    position: 'relative',
    marginBottom: 20,
  },
  containerMainNewProductsText: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    height: screenHeight * 0.25,
    marginBottom: 10,
    paddingLeft: 10,
    zIndex: 6,
  },
  containerMain2NewProducts: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 450,
    maxHeight: 190,
    height: screenHeight * 0.25,
    backgroundColor: 'black',
    position: 'relative',
    marginBottom: 20,
  },
  containerMainNewProductsText2: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    width: '100%',
    height: '100%',
    paddingRight: 10,
    zIndex: 6,
  },
  containerSecondaryNewProducts: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 450,
    justifyContent: 'space-between',
  },
  containerSecondaryProduct: {
    width: '48%',
    maxHeight: 190,
    maxWidth: 220,
    height: screenHeight * 0.25,
    backgroundColor: 'black',
  },
  containerMainSecondaryProductsText: {
    alignSelf: 'flex-start',
    width: '100%',
    height: screenHeight * 0.25,
    paddingRight: 10,
    zIndex: 6,
  },
  containerBenefits: {
    width: '90%',
    alignItems: 'center',
    marginTop: 20,

  },
  benefit: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  exteriorCircle: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  interiorCircle: {
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  benefitText: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },
  benefitSecondaryText: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: 'grey',
  },
});
