import { View, Text, StyleSheet, Image, Pressable, FlatList, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import imageMonitor from '../../assets/images/monitor.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import useStore from '@/components/useStore';
import { useState } from 'react';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: string;
    imageUrl: string;
    quantity: number;
  };
}

const CartItem = ({ item }: CartItemProps) => {
  const incrementCartItem = useStore((state) => state.incrementCartItemByOne);
  const decrementCartItem = useStore((state) => state.decrementCartItemByOne);
  const removeCartItem = useStore((state) => state.removeCartItem);

  const finalPrice = (Number.parseFloat(item.price) * item.quantity).toFixed(2);

  console.log(item);
  return(
    <View style={styles.cartItem}>
      <View style={styles.cartItemName}>
        <Text style={styles.cartItemNameText}>{item.name}</Text>
      </View>
      <View style={styles.cartItemBody}>
        <View style={styles.cartItemLeft}>
          <Image style={styles.cartItemImage} source={{ uri: item.imageUrl }} />
        </View>
        <View style={styles.cartItemMid}>
          <Pressable style={({ pressed }) => [
            styles.btn,
            pressed && styles.btnPressed
          ]}
            onPress={() => {
              if (item.quantity > 1) {
                decrementCartItem(item.id);
              }
            }}
          >
            <FontAwesome6 name="minus" size={24} color="black" />
          </Pressable>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <Pressable style={({ pressed }) => [
            styles.btn,
            pressed && styles.btnPressed
          ]}
            onPress={() => incrementCartItem(item.id)}
          >
            <FontAwesome6 name="plus" size={24} color="black" />
          </Pressable>
        </View>
        <View style={styles.cartItemRight}>
          <Text style={styles.price}>${finalPrice}</Text>

          <Pressable style={({ pressed }) => [
            styles.btnTrash,
            pressed && styles.btnPressed
          ]}
            onPress={() => removeCartItem(item.id)}
          >
            <FontAwesome6 name="trash" size={24} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default function Tab() {
  const cartItems = useStore((state) => state.cartItems);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Cart</Text>
      </View>
      <View style={styles.containerBody}>

        {/* Migrar a flatlist una vez se pueda pedir la solicitud por servidor */}
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CartItem item={item} />}
        />
      </View>
      <Text style={styles.price}>Total: ${cartItems.reduce((acc, item) => acc + (Number.parseFloat(item.price) * item.quantity), 0).toFixed(2)}</Text>
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
    width: '35%',
    alignItems: 'center',
    height: '100%',
  },
  cartItemImage: {
    width: 120,
    height: 100,
  },
  cartItemMid: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  btn: {
    padding: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  btnPressed: {
    padding: 5,
    backgroundColor: 'darkgray',
    borderRadius: 5,
  },
  quantity: {
    padding: 10,
  },
  cartItemRight: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  btnTrash: {
    padding: 5,
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
