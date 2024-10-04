import { create } from 'zustand';

const useStore = create((set) => ({
    items: [],
    addItem: (item) => set((state) => ({ items: [...state.items, item] })),
    setItems: (items) => set({ items }),
    removeItems: () => set({ items: [] }),
}));

export default useStore;