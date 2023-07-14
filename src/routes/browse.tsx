import { LoaderFunction, useLoaderData } from "react-router-dom";
import { ProductData, ProductType, getProducts } from "../data/data";
import ProductView from "../components/department";

export const loader: LoaderFunction = ({ params }) => {
  const { department } = params;

  if (!department) {
    return { undefined };
  }

  const products = getProducts(department);
  return { department, products };
};

function Browse() {
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
