import { useLoaderData } from "react-router-dom";
import {
  Department,
  ProductData,
  ProductType,
  getProducts,
} from "../data/data";
import ProductView from "../components/product-view";

export function loader() {
  const clothing = getProducts(Department.CLOTHING);
  return { clothing };
}

function Clothing() {
  const { clothing } = useLoaderData() as {
    clothing: { data: ProductData[]; types: ProductType };
  };

  return (
    <ProductView
      department={Department.CLOTHING}
      data={clothing.data}
      types={clothing.types}
    ></ProductView>
  );
}

export default Clothing;
