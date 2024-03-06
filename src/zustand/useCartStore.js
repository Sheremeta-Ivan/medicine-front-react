import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (medicine) => {
        set((state) => {
          const existingItem = state.cartItems.find(
            (item) => item.id === medicine.id
          );

          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.id === existingItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            return {
              cartItems: [...state.cartItems, { ...medicine, quantity: 1 }],
            };
          }
        });
      },

      updateCartItemQuantity: (itemId, newQuantity) => {
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
          ),
        }));
      },
      removeFromCart: (itemId) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== itemId),
        }));
      },
    }),
    {
      name: "cart-storage", 
    }
  )
);

export default useCartStore;
