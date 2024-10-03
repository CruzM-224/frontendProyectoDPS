import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import DropdownPicker from 'react-native-dropdown-picker';
import  { SafeAreaView } from 'react-native-safe-area-context'; 
const LocationScreen = () => {
  const [zone, setZone] = useState('');
  const [address, setAddress] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([   

  { label: 'San Salvador', value: 'San Salvador' },
  { label: 'Ahuachapán', value: 'Ahuachapán' },
  { label: 'Cabañas', value: 'Cabañas'  },
  { label: 'Chalatenango', value: 'Chalatenango'  },
  { label: 'Cuscatlán', value: 'Cuscatlán' },
  { label: 'La Libertad', value: 'La Libertad' },
  { label: 'La Paz', value: 'La Paz' },
  { label: 'La Unión', value: 'La Unión' },
  { label: 'Morazán', value: 'Morazán' },
  { label: 'San Miguel', value: 'San Miguel' },
  { label: 'Santa Ana', value: 'Santa Ana' },
  { label: 'Sonsonate', value: 'Sonsonate' },
  { label: 'Usulután', value: 'Usulután' },  ]);
const [selectedLocation, setSelectedLocation] = useState({
    departamento: '',
    direccion: '',
  });
  const handleZoneChange = (item) => {
    setZone(item.label);
    setValue(item.value);
  };

  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.title}>Ingrese su ubicación</Text>

      <Image
        source={{ uri: 'https://freesvg.org/img/location_icon.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.subtitle}>Ingrese su departamento y dirección</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Departamento de:</Text>
        <DropdownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Seleccione un departamento"
          onChangeItem={handleZoneChange}
          searchable={true}
          searchPlaceholder="Buscar departamento"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Su dirección:</Text>
        <TextInput style={styles.input} value={address} onChangeText={setAddress} />
      </View>

      <TouchableOpacity style={styles.button} onPress={("")}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom:   
 10,
    alignSelf: 'center',
  },
  subtitle: {
    marginBottom: 25,
    fontSize: 20,
  },
  inputContainer: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '25%',
  },
  titleContainer: {
    alignItems: 'center',
  },
});

export default LocationScreen;
