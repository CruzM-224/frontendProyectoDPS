import { create } from 'zustand';

interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CartItem extends Item {
    quantity: number; // Solo para el carrito
}

interface Store {
    cart: CartItem[];
    addToCart: (item: Item, quantity: number) => void;
    removeFromCart: (id: number) => void; // Nueva función para remover
    getItemQuantity: (id: number) => number;
}

const useStore = create<Store>((set) => ({
    cart: [],
    
    // Función para agregar un item al carrito
    addToCart: (item, quantity) => set((state) => {
        const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // Si el item ya está en el carrito, actualiza la cantidad
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex].quantity += quantity;
            return { cart: updatedCart };
        } else {
            // Si no está, agrega el nuevo item al carrito
            return { cart: [...state.cart, { ...item, quantity }] };
        }
    }),

    // Función para remover un item del carrito
    removeFromCart: (id: number) => set((state) => {
        const existingItemIndex = state.cart.findIndex(cartItem => cartItem.id === id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...state.cart];
            updatedCart[existingItemIndex].quantity -= 1; // Reducir la cantidad

            // Si la cantidad llega a 0, eliminar el item del carrito
            if (updatedCart[existingItemIndex].quantity <= 0) {
                updatedCart.splice(existingItemIndex, 1);
            }

            return { cart: updatedCart };
        }
        return state; // Retorna el estado sin cambios si no se encontró el item
    }),

    // Función para obtener la cantidad de un item en el carrito
    getItemQuantity: (id: number): number => {
        const item = useStore.getState().cart.find(cartItem => cartItem.id === id);
        return item ? item.quantity : 0;
    },
}));

export default useStore;


/*
Ejemplo

import React from 'react';
import { View, Button, Text } from 'react-native';
import useStore from './store';

interface ProductProps {
    item: {
        id: number;
        name: string;
        price: number;
        image: string;
    };
}

const Product: React.FC<ProductProps> = ({ item }) => {
    const addToCart = useStore(state => state.addToCart);
    const removeFromCart = useStore(state => state.removeFromCart);
    const quantity = useStore(state => state.getItemQuantity(item.id));

    const handleAddToCart = () => {
        addToCart(item, 1); // Agregar 1 al carrito
    };

    const handleRemoveFromCart = () => {
        removeFromCart(item.id); // Remover 1 del carrito
    };

    return (
        <View>
            <Text>{item.name} - ${item.price.toFixed(2)}</Text>
            <Text>Cantidad en carrito: {quantity}</Text>
            <Button title="Agregar al carrito" onPress={handleAddToCart} />
            {quantity > 0 && (
                <Button title="Remover del carrito" onPress={handleRemoveFromCart} />
            )}
        </View>
    );
};

export default Product;

*/