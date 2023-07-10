import { IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function CartItem({
  id,
  image,
  name,
  price,
  quantity,
  removeFromCart,
  closeCart,
}: {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  removeFromCart: () => void;
  closeCart: () => void;
}) {
  return (
    <div className="cart-item-outer">
      <Link to={`/product/${id}`} onClick={closeCart}>
        <img src={image} alt={name} />
      </Link>
      <div className="cart-item-info">
        <h5>{name}</h5>
        <h5>${price}</h5>
        <p>QTY: {quantity}</p>
      </div>
      <div className="remove" onClick={removeFromCart}>
        <IconTrash size={18} />
      </div>
    </div>
  );
}

export default CartItem;
