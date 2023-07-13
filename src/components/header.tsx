import { Link, Outlet } from "react-router-dom";
import "../styles/_header.scss";
import Cart from "./cart";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import ShopMenu from "./shop-menu";
import { IconMenu2, IconShoppingBag } from "@tabler/icons-react";

function Header({ dark }: { dark?: boolean }) {
  const { cartVisible, toggleCartVisible } = useCart();
  const [shopMenuVisible, setShopMenuVisible] = useState(false);

  return (
    <>
      {cartVisible && <Cart close={toggleCartVisible} />}
      <div className="header-desktop">
        <div
          className={`${dark ? "header-container-dark" : "header-container"}`}
        >
          <Link to={`/`}>
            <h1>Echo</h1>
          </Link>
          <div className="navigation">
            <div>
              <button onMouseEnter={() => setShopMenuVisible(true)}>
                Shop
              </button>
              {shopMenuVisible && (
                <ShopMenu close={() => setShopMenuVisible(false)} />
              )}
            </div>
            <Link to={`/about`}>
              <button>About</button>
            </Link>
            <button onClick={toggleCartVisible}>Cart</button>
            <button>$ CAD</button>
          </div>
        </div>
      </div>
      <div className="header-mobile">
        <div className="header-container">
          <Link to={`/`}>
            <h1>Echo</h1>
          </Link>
          <div className="navigation">
            <div>
              <button onClick={() => setShopMenuVisible(!shopMenuVisible)}>
                <IconMenu2 />
              </button>
              {shopMenuVisible && <ShopMenu />}
            </div>
            <button onClick={toggleCartVisible}>
              <IconShoppingBag />
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
