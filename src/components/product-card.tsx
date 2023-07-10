import { Link } from "react-router-dom";

function ProductCard({
  id,
  image,
  name,
  price,
  currency,
}: {
  id: number;
  image: string;
  name: string;
  price: number;
  currency: string;
}) {
  return (
    <Link to={`/product/${id}`}>
      <div className="product-card">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
