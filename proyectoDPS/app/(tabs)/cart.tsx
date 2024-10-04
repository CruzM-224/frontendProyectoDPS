import { View, Text, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import imageMonitor from '../../assets/images/monitor.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';


interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  return(
    <View style={styles.cartItem}>
      <View style={styles.cartItemName}>
        <Text style={styles.cartItemNameText}>{item.name}</Text>
      </View>
      <View style={styles.cartItemBody}>
        <View style={styles.cartItemLeft}>
          <Image style={styles.cartItemImage} source={imageMonitor} />
        </View>
        <View style={styles.cartItemMid}>
          <Pressable style={({ pressed }) => [
            styles.btn,
            pressed && styles.btnPressed
          ]}>
            <FontAwesome6 name="minus" size={24} color="black" />
          </Pressable>
          <Text style={styles.quantity}>1</Text>
          <Pressable style={({ pressed }) => [
            styles.btn,
            pressed && styles.btnPressed
          ]}>
            <FontAwesome6 name="plus" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.cartItemRight}>
          <Pressable style={({ pressed }) => [
            styles.btnTrash,
            pressed && styles.btnPressed
          ]}>
            <FontAwesome6 name="trash" size={24} color="black" />
          </Pressable>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}

export default function Tab() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Cart</Text>
      </View>
      <View style={styles.containerBody}>

        {/* Migrar a flatlist una vez se pueda pedir la solicitud por servidor */}
        <ScrollView>
          <CartItem item={{
            id: 1,
            name: 'Monitor',
            price: 100,
            image: imageMonitor
          }} />
          <CartItem item={{
            id: 2,
            name: 'Monitor 2',
            price: 123.45,
            image: imageMonitor
          }} />
          <CartItem item={{
            id: 3,
            name: 'Tele',
            price: 344.1,
            image: imageMonitor
          }} />
          <CartItem item={{
            id: 4,
            name: 'Tele 2',
            price: 499.99,
            image: imageMonitor
          }} />
          <CartItem item={{
            id: 5,
            name: 'LED 4K',
            price: 356,
            image: imageMonitor
          }} />
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.checkout}>
          <Text style={styles.checkoutText}>Go to checkout</Text>
        </TouchableOpacity>
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
  cartItem: {
    flexDirection: 'column',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  cartItemName: {
    width: '100%',
    alignItems: 'center',
  },
  cartItemNameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemBody: {
    flexDirection: 'row',
    width: '100%',
  },
  cartItemLeft: {
    width: '40%',
    alignItems: 'center',
    height: '100%',
  },
  cartItemImage: {
    width: 120,
    height: 100,
    resizeMode: 'contain',
  },
  cartItemMid: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
  cartItemRight: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTrash: {
    padding: 10,
    alignSelf: 'flex-end',
  },
  price: {
    paddingTop: 20,
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
