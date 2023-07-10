import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductData } from "../data/data";

interface Cart {
  cart: (ProductData & { quantity: number })[];
  cartVisible: boolean;
  addToCart: (product: ProductData) => void;
  removeFromCart: (id: number) => void;
  toggleCartVisible: () => void;
  getTotal: () => string;
  isInCart: (id: number) => boolean;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
}

export const useCart = create(
  persist<Cart>(
    (set, get) => ({
      cart: [],
      cartVisible: false,
      addToCart: (product: ProductData) =>
        set((state) => ({
          cart: [...state.cart, { ...product, quantity: 1 }],
        })),
      removeFromCart: (id: number) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== id),
        })),
      toggleCartVisible: () =>
        set((state) => ({ cartVisible: !state.cartVisible })),
      getTotal: () =>
        get()
          .cart.reduce(
            (total, product) => total + product.price * product.quantity,
            0
          )
          .toFixed(2),
      isInCart: (id: number) =>
        get().cart.some((product: ProductData) => product.id === id),
      incrementQuantity: (id: number) =>
        set((state) => ({
          cart: state.cart.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        })),
      decrementQuantity: (id: number) =>
        set((state) => ({
          cart: state.cart.map((product) =>
            product.id === id && product.quantity > 1
              ? { ...product, quantity: product.quantity - 1 }
              : product
          ),
        })),
    }),
    {
      name: "cart",
    }
  )
);
