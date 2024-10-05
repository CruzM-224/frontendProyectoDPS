import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useGlobalSearchParams } from 'expo-router';
import useStore from '@/components/useStore';

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);
  const { id, title, price, description, imageUrl } = useGlobalSearchParams();
  const addCartItem = useStore((state) => state.addCartItem);
  
  const item = {
    id: id,
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    quantity: quantity
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited); 
  };

  const handleAddToCart = () => {
    addCartItem(item);
    console.log('Item added to cart:', item);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.productImage}
        />

        <View style={styles.productTitleContainer}>
          <Text style={styles.productTitle}>{title} </Text>
          <TouchableOpacity onPress={toggleFavorite}>
            {isFavorited ? ( 
              <FontAwesome name="heart" size={30} color="red"  /> 
            ) : (
              <FontAwesome name="heart-o" size={30} color="black" /> 
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.productPrice}>${price}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
            <FontAwesome6 name="minus" size={24} color="black" />
          </TouchableOpacity>
          
          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
            <FontAwesome6 name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.productDetailContainer}>
          <Text style={styles.productDetailTitle}>Detalles del producto:</Text>
          <Text style={styles.productDetailText}>
            {description}
          </Text>
        </View>
      
        <TouchableOpacity style={styles.buttons} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Añadir al carrito</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  productTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 20,
    color: '#333',
    paddingLeft: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 15,
  },
  quantityminus: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#ff0000',
  },
  quantityplus: {
    fontSize: 18,
    marginHorizontal: 10,
    color: '#21d50c',

  },
  productDetailContainer: {
  },
  productDetailTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDetailText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  
  buttons: {
    backgroundColor: '#ff3d00',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteIcon: {
    fontSize: 22,
  },
});

export default ProductScreen;
