import { Link } from "react-router-dom";
import { Department } from "../data/data";

function ShopMenu({ close, shop }: { close?: () => void; shop?: boolean }) {
  return (
    <div
      className={`shop-menu ${shop ? "shop-menu-browse" : ""}`}
      onMouseLeave={close}
    >
      {Object.values(Department).map((department: string) => (
        <Link
          key={department}
          to={`/department/${department.toLowerCase()}`}
          onClick={close}
        >
          <button key={department}>{department}</button>
        </Link>
      ))}
    </div>
  );
}

export default ShopMenu;
