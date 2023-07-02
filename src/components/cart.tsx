import { createPortal } from "react-dom";
import { useCart } from "../hooks/useCart";
import CartItem from "./cart-item";
import { ProductData } from "../data/data";

function Cart({ close }: { close: () => void }) {
  const { cart, removeFromCart, getTotal } = useCart();

  return createPortal(
    <>
      <div className="cart-background" onClick={close}></div>
      <div className="cart">
        <h3>Cart</h3>
        <div className="divider"></div>
        <div className="cart-items">
          {cart.map((product: ProductData, index: number) => (
            <CartItem
              key={index}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={1}
              removeFromCart={() => removeFromCart(product)}
              closeCart={close}
            />
          ))}
        </div>
        <h4>
          <strong>Total: ${getTotal()}</strong>
        </h4>
        <button>Checkout</button>
      </div>
    </>,
    document.body
  );
}

export default Cart;
