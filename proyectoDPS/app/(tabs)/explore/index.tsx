import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import imageMonitor from '../../../assets/images/monitor.png';
import { Link } from 'expo-router';

interface CategoryProps {
  name: string;
  image: number;
}

const Category = ({ name, image}: CategoryProps) => {
  return (
    <Link href='/explore/products' asChild>
      <Pressable style={styles.category}>
        <Image style={styles.categoryImage} source={image} />
        <Text style={styles.categoryText}>{name}</Text>
      </Pressable>
    </Link>
  );
};

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <ScrollView style={styles.categoriesList}>
        <View style={styles.categoriesListContainer}>
          <Category name='Computers' image={imageMonitor} />
          <Category name='Gamers' image={imageMonitor} />
          <Category name='Hardware' image={imageMonitor} />
          <Category name='Software' image={imageMonitor} />
          <Category name='Mobile' image={imageMonitor} />
          <Category name='Peripherals' image={imageMonitor} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categoriesList: {
    width: '90%',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  categoriesListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
  },
  category: {
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#fae3e3',
    borderColor: '#DB4444',
    borderRadius: 20,
    width: 150,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 10,
  },
  categoryImage: {
    width: 120,
    height: 100,
  },
  categoryText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
