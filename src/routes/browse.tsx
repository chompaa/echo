import { LoaderFunction, useLoaderData } from "react-router-dom";
import { ProductData, ProductType, getProducts } from "../data/data";
import ProductView from "../components/department";
import useScrollToTop from "../hooks/useScrollToTop";

export const loader: LoaderFunction = ({ params }) => {
  const { department } = params;

  if (!department) {
    return { undefined };
  }

  const products = getProducts(department);
  return { department, products };
};

function Browse() {
  useScrollToTop();

  const { department, products } = useLoaderData() as {
    department: string;
    products: { data: ProductData[]; types: ProductType };
  };

  return (
    <ProductView
      key={department}
      department={department}
      data={products.data}
      types={products.types}
    ></ProductView>
  );
}

export default Browse;
