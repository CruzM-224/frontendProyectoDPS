import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button, SafeAreaView } from 'react-native';

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://c1.neweggimages.com/productimage/nb640/AFJTD2307240EIMHJ68.jpg' }}
          style={styles.productImage}
        />

        <View style={styles.productTitleContainer}>
          <Text style={styles.productTitle}> Teclado AK-900 </Text>
          <TouchableOpacity onPress={toggleFavorite}>
            {isFavorited ? ( 
              <Text style={styles.favoriteIcon}>&#10084;</Text> 
            ) : (
              <Text style={styles.favoriteIcon}>&#128420;</Text> 
            )}
          </TouchableOpacity>
        </View>

      <Text style={styles.productPrice}>$960.00</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
          <Text style={styles.quantityminus}>-</Text>
        </TouchableOpacity>
        
        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
          <Text style={styles.quantityplus}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productDetailContainer}>
        <Text style={styles.productDetailTitle}>Detalles del producto:</Text>
        <Text style={styles.productDetailText}>
          El IMICE AK-900 está diseñado para soportar largas sesiones de juego y ofrece una durabilidad excepcional. El teclado está fabricado con materiales de alta calidad, lo que garantiza un rendimiento duradero. También cuenta con un cable trenzado que agrega resistencia adicional y evita que se enrede.
        </Text>
      </View>
    
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.addToCartText}>Añadir al carrito</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.addToCartText}>Volver</Text>
      </TouchableOpacity>
    </View>
        </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  productTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginVertical: 10,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginBottom: 25,
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
    marginVertical: 10,
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
