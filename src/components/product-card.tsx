import { Link } from "react-router-dom";
import Cost from "./cost";

function ProductCard({
  id,
  image,
  name,
  price,
  salePrice,
  currency,
}: {
  id: number;
  image: string;
  name: string;
  price: number;
  salePrice?: number;
  currency: string;
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card">
        <img src={image} alt={name} />
        <h4 className="product-title">{name}</h4>
        <Cost currency={currency} price={price} salePrice={salePrice}></Cost>
        {salePrice && <div className="product-sale">Sale</div>}
      </div>
    </Link>
  );
}

export default ProductCard;
