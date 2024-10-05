import { View, Text, StyleSheet, Image, FlatList, Pressable, Dimensions } from 'react-native';
import imageMonitor from '../../../assets/images/monitor.png';
import useStore from '@/components/useStore';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Link } from 'expo-router';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

interface ElementProps {
  image: string,
  text: string,
  descuento: string,
  originalPrice: string,
  description: string,
}
function getOfferPrice(price: string, discount: string) {
  const originalPrice = Number.parseFloat(price);
  const discountPrice = Number.parseFloat(discount);
  return (originalPrice - discountPrice).toFixed(2);
}


function Element ({ image, text, descuento, originalPrice, description  }: ElementProps) {
  
  const price = getOfferPrice(originalPrice, descuento);

  return(
    <Link href={{
      pathname: "/explore/productScreen",
      params: { 
        imageUrl: image, 
        title: text, 
        price: price, 
        description: description
      },
    }} asChild>
      <Pressable style={styles.offer}>
        <Image
          style={styles.offerImage}
          source={{ uri: image }}
        />
        <Text style={styles.offerText}>{text}</Text>
        <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
          <Text style={styles.offerPrice}>${price}</Text>
          <Text style={styles.originalPrice}>${originalPrice}</Text>
        </View>
      </Pressable>
    </Link>
  );
}

export default function Tab() {
  
  const items = useStore((state) => state.items);
  const category = 'Gaming'; // Cambia esto a la categoría deseada

  // Filtrar los productos por categoría
  const filteredItems = items.filter(item => item.id_categoria === 2 || 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Element
            image={item.imagen}
            text={item.producto}
            descuento={item.descuento}
            originalPrice={item.precio}
            description={item.descripcion}
          />
        )}
        contentContainerStyle={styles.categoriesListContainer}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoriesListContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: screenWidth  * 0.9,
    paddingBottom: 20,
  },
  offer: {
    width: '32%',
    height: screenHeight * 0.3,
    minHeight: 200,
    minWidth: 160,
    maxWidth: 350,
    marginTop: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey', 
    borderRadius: 10,
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
});
