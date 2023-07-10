import { Link } from "react-router-dom";
import { Department } from "../data/data";

function ShopMenu({ close }: { close: () => void }) {
  return (
    <div className="shop-menu" onMouseLeave={close}>
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
