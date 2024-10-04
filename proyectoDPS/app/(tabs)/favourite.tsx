import { View, Text, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import imageMonitor from '../../assets/images/monitor.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';


interface FavouriteItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}



const FavouriteItem = ({ item }: FavouriteItemProps) => {
  return(
    <View style={styles.favouriteItem}>
      <View style={styles.favouriteItemName}>
        <Text style={styles.favouriteItemNameText}>{item.name}</Text>
      </View>
      <View style={styles.favouriteItemBody}>
        <View style={styles.favouriteItemLeft}>
          <Image style={styles.favouriteItemImage} source={imageMonitor} />
        </View>
        <View style={styles.favouriteItemRight}>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <FontAwesome6 name="angle-right" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

export default function Tab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My favourites</Text>
      </View>
      <View style={styles.containerBody}>

        {/* Migrar a flatlist una vez se pueda pedir la solicitud por servidor */}
        <ScrollView>
          <FavouriteItem item={{
            id: 1,
            name: 'Monitor',
            price: 100,
            image: imageMonitor
          }} />
          <FavouriteItem item={{
            id: 2,
            name: 'Monitor 2',
            price: 123.45,
            image: imageMonitor
          }} />
          <FavouriteItem item={{
            id: 3,
            name: 'Tele',
            price: 344.1,
            image: imageMonitor
          }} />
          <FavouriteItem item={{
            id: 4,
            name: 'Tele 2',
            price: 499.99,
            image: imageMonitor
          }} />
          <FavouriteItem item={{
            id: 5,
            name: 'LED 4K',
            price: 356,
            image: imageMonitor
          }} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerBody: {
    width: '100%',
    flex: 15,
  },
  favouriteItem: {
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  favouriteItemName: {
    width: '100%',
    alignItems: 'center',
  },
  favouriteItemNameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  favouriteItemBody: {
    flexDirection: 'row',
    width: '100%',
    
    justifyContent: "space-between",
  },
  favouriteItemLeft: {
    width: '60%',
    alignItems: 'center',
    height: '100%',
  },
  favouriteItemImage: {
    width: 120,
    height: 100,
  },
  btn: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  btnPressed: {
    padding: 10,
    backgroundColor: 'darkgray',
    borderRadius: 5,
  },
  quantity: {
    padding: 10,
  },
  favouriteItemRight: {
    width: '40%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnTrash: {
    padding: 10,
    alignSelf: 'flex-end',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkout: {
    backgroundColor: '#DB4444',
    borderRadius: 100,
    width: '70%',
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative',
    height: 50,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
