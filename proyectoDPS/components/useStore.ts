import { create } from 'zustand';

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
}));

export default useStore;