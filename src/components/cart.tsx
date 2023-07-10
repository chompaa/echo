import { createPortal } from "react-dom";
import { useCart } from "../hooks/useCart";
import CartItem from "./cart-item";
import { ProductData } from "../data/data";
import { IconShoppingBag } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Cart({ close }: { close: () => void }) {
  const {
    cart,
    removeFromCart,
    getTotal,
    incrementQuantity,
    decrementQuantity,
  } = useCart();

  return createPortal(
    <>
      <div className="cart-background" onClick={close}></div>
      <div className="cart">
        <h3>Cart</h3>
        <div className="divider"></div>
        {cart.length === 0 ? (
          <div className="empty">
            <IconShoppingBag size={128} stroke={0.5} />
            <h4>Your cart is empty</h4>
            <Link to={"/department/clothing/"} onClick={close}>
              <button>Browse Latest</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map(
                (
                  product: ProductData & { quantity: number },
                  index: number
                ) => (
                  <CartItem
                    key={index}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    removeFromCart={() => removeFromCart(product.id)}
                    closeCart={close}
                    incrementQuantity={() => incrementQuantity(product.id)}
                    decrementQuantity={() => decrementQuantity(product.id)}
                  />
                )
              )}
            </div>
            <h4>
              <strong>Total: ${getTotal()}</strong>
            </h4>
            <button>Checkout</button>
          </>
        )}
      </div>
    </>,
    document.body
  );
}

export default Cart;
