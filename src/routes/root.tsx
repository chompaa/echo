import { Link } from "react-router-dom";
import "../styles/_root.scss";
import Header from "../components/header";

function Root() {
  return (
    <div className="background">
      <div className="container">
        <div className="header-wrapper">
          <Header />
        </div>
        <div className="hero-container">
          <h2>Sale</h2>
          <p>
            Save up to 25% on selected items. Offer valid until 31st of August.
          </p>
          <div>
            <Link to={`/echo/shop/clothing`}>
              <button>Shop Clothing</button>
            </Link>
            <Link to={`/echo/shop/equipment`}>
              <button>Shop Equipment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Root;
