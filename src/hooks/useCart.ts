import { create } from "zustand";
import { ProductData } from "../data/data";

interface Cart {
  cart: ProductData[];
  cartVisible: boolean;
  addToCart: (product: ProductData) => void;
  removeFromCart: (product: ProductData) => void;
  toggleCartVisible: () => void;
  getTotal: () => number;
  isInCart: (product: ProductData) => boolean;
}

export const useCart = create<Cart>((set, get) => ({
  cart: [],
  cartVisible: false,
  addToCart: (product: ProductData) =>
    set((state) => ({ cart: [...state.cart, product] })),
  removeFromCart: (product: ProductData) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== product.id),
    })),
  toggleCartVisible: () =>
    set((state) => ({ cartVisible: !state.cartVisible })),
  getTotal: () =>
    get().cart.reduce((total, product) => total + product.price, 0),
  isInCart: (product: ProductData) =>
    get().cart.some((p: ProductData) => p.id === product.id),
}));
