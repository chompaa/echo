import { IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Cost from "./cost";

function CartItem({
  id,
  image,
  name,
  price,
  salePrice,
  quantity,
  removeFromCart,
  closeCart,
  incrementQuantity,
  decrementQuantity,
}: {
  id: number;
  image: string;
  name: string;
  price: number;
  salePrice: number | undefined;
  quantity: number;
  removeFromCart: () => void;
  closeCart: () => void;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}) {
  return (
    <div className="cart-item-outer">
      <Link to={`/product/${id}`} onClick={closeCart}>
        <img src={image} alt={name} />
      </Link>
      <div className="cart-item-info">
        <h5>{name}</h5>
        <Cost currency={"$"} price={price} salePrice={salePrice}></Cost>
        <div className="quantity">
          <p>QTY</p>
          <button onClick={decrementQuantity}>-</button>
          <p>{quantity}</p>
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>
      <div className="remove" onClick={removeFromCart}>
        <IconTrash size={18} />
      </div>
    </div>
  );
}

export default CartItem;
