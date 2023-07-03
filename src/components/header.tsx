import { Link, Outlet } from "react-router-dom";
import "../styles/_header.scss";
import Cart from "./cart";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import ShopMenu from "./shop-menu";

function Header({ dark }: { dark?: boolean }) {
  const { cartVisible, toggleCartVisible } = useCart();
  const [shopMenuVisible, setShopMenuVisible] = useState(false);

  return (
    <div className="header-outer">
      {cartVisible && <Cart close={toggleCartVisible} />}
      <div className={`${dark ? "header-container-dark" : "header-container"}`}>
        <Link to={`/echo/`}>
          <h1>Echo</h1>
        </Link>
        <div className="navigation">
          <div>
            <button onMouseEnter={() => setShopMenuVisible(true)}>Shop</button>
            {shopMenuVisible && (
              <ShopMenu close={() => setShopMenuVisible(false)} />
            )}
          </div>
          <Link to={`/echo/about`}>
            <button>About</button>
          </Link>
          <button onClick={toggleCartVisible}>Cart</button>
          <button>$ CAD</button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
