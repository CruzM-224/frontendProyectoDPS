import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useStore = create((set) => ({
    // Items
    items: [],
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    setItems: (items) => set({ items }),
    removeItems: () => set({ items: [] }),

    // Cart
    cartItems: [],
    addCartItem: (item) => set((state) => {
        const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
            return {
                cartItems: state.cartItems.map((cartItem) =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
                ),
            };
        } else {
            return { cartItems: [...state.cartItems, item] };
        }
    }),
    setCartItems: (items) => set({ cartItems: items }),
    removeCartItems: () => set({ cartItems: [] }),
    removeCartItem: (id) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),
    incrementCartItemByOne: (id) => set((state) => ({
        cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
    })),
    decrementCartItemByOne: (id) => set((state) => ({
        cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
    })),

    // Favourites
    favouriteItems: [],
    addFavouriteItem: (item) => set((state) => ({ favouriteItems: [...state.favouriteItems, item] })),
    setFavouriteItems: (items) => set({ favouriteItems: items }),
    removeFavouriteItems: () => set({ favouriteItems: [] }),
    removeFavouriteItem: (id) => set((state) => ({ favouriteItems: state.favouriteItems.filter((item) => item.id !== id) })),

    // Cart history
    history: [],
    fetchHistory: async () => {
        try {
            const existingHistory = await AsyncStorage.getItem('cartHistory');
            if (existingHistory !== null) {
                set({ history: JSON.parse(existingHistory) });
            }
        } catch (e) {
            console.log('Error getting history:', e);
        }
    },
    addToHistory: async (newCart) => {
        try {
            const existingHistory = await AsyncStorage.getItem('cartHistory');
            let updatedHistory = [];

            if (existingHistory !== null) {
                updatedHistory = JSON.parse(existingHistory);
            }

            updatedHistory.push(newCart);

            await AsyncStorage.setItem('cartHistory', JSON.stringify(updatedHistory));
            set({ history: updatedHistory });
        } catch (e) {
            console.log('Error adding to history:', e);
        }
    },

    // Usuarios registrados
    registeredUsers: [],

    registerUser: async (nombre, apellido, dui, telefono, email, password, direccion) => { 
        try {
            const API_POST_URL = 'http://192.168.0.8:8000/api/usuarios/store';  

            // Preparar los datos a enviar a la API
            const userData = {
                nombre,
                apellido,
                dui,
                telefono,
                email,
                password,
                direccion,
            };

            // Enviar la solicitud a la API
            const response = await fetch(API_POST_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData), 
            });

            if (!response.ok) {
                const message = await response.text(); 
                return { success: false, message };
            }

            const result = await response.json(); 

            // Comprobar si la respuesta es válida
            if (result && result.id) {
                const storedUsers = await AsyncStorage.getItem('registeredUsers');
                let users = storedUsers ? JSON.parse(storedUsers) : [];

                // Crear el nuevo usuario
                const newUser = {
                    nombre,
                    apellido,
                    dui,
                    telefono,
                    email,
                    password,
                    direccion,
                };
                users.push(newUser);

                // Guardar la lista actualizada en AsyncStorage
                await AsyncStorage.setItem('registeredUsers', JSON.stringify(users));

                // Actualizar el estado en Zustand
                set({ registeredUsers: users });

                return { success: true, message: 'User registered successfully' };
            } else {
                return { success: false, message: 'Error registering user, invalid response from server.' };
            }
        } catch (e) {
            console.log('Error registering user:', e);
            return { success: false, message: 'Error registering user' };
        }
    },

    fetchRegisteredUsers: async () => {
        try {
            const storedUsers = await AsyncStorage.getItem('registeredUsers');
            if (storedUsers) {
                set({ registeredUsers: JSON.parse(storedUsers) });
            }
        } catch (e) {
            console.log('Error fetching users:', e);
        }
    },
}));

export default useStore;
