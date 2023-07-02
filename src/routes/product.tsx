import { LoaderFunction, useLoaderData } from "react-router-dom";
import { ProductData, getProduct } from "../data/data";
import "../styles/_product.scss";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

export const loader: LoaderFunction = ({ params }) => {
  if (!params.id) {
    return { undefined };
  }

  const product = getProduct(params.id);
  return { product };
};

function Product() {
  const { product } = useLoaderData() as { product: ProductData };
  const { addToCart, isInCart, toggleCartVisible } = useCart();

  const addToCartAndShow = (product: ProductData) => {
    addToCart(product);
    toggleCartVisible();
  };

  return (
    <div className="product-container-outer">
      <div className="product-container-inner">
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-panel">
          <div>
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
          </div>
          <p>{product.description}</p>
          {isInCart(product) ? (
            <button disabled={true}>Product in cart</button>
          ) : (
            <button onClick={() => addToCartAndShow(product)}>
              Add to cart
            </button>
          )}
        </div>
      </div>
      <Link to={`/shop/${product.department.toLowerCase()}`}>
        <button>Back to shop</button>
      </Link>
    </div>
  );
}

export default Product;
