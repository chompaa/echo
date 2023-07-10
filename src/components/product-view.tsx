import ProductCard from "../components/product-card";
import "../styles/_product-view.scss";
import Category from "../components/category";
import { ProductData, ProductType } from "../data/data";
import { useCategories } from "../hooks/useCategories";

function ProductView({
  department,
  data,
  types,
}: {
  department: string;
  data: ProductData[];
  types: ProductType;
}) {
  const [categories, updateCategory] = useCategories(department, types);

  return (
    <div className="container">
      <div className="content">
        <h3>{department}</h3>
        <div className="divider"></div>
        <div className="content-inner">
          <div className="categories-container">
            <div className="categories-header">
              <h4>
                <strong>Categories</strong>
              </h4>
            </div>
            <div className="categories">
              {Object.entries(categories).map(
                (
                  [type, value]: [string, { enabled: boolean }],
                  index: number
                ) => (
                  <Category
                    key={index}
                    type={type}
                    enabled={value.enabled}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updateCategory(type, e)
                    }
                  ></Category>
                )
              )}
            </div>
          </div>
          <div className="products-outer">
            <div className="products-header">
              <h4>
                <strong>Products</strong>
              </h4>
            </div>
            <div className="products">
              {data.map(
                (product) =>
                  categories[product.type]?.enabled && (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      name={product.name}
                      price={product.price}
                      currency={"$"}
                    ></ProductCard>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
