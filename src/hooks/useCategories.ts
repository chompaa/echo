import { useState } from "react";
import Category from "../components/category";
import { ProductType } from "../data/data";

interface Category {
  [type: string]: { enabled: boolean };
}

export const useCategories = (
  department: string,
  types: ProductType
): [
  Category,
  (category: string, e: React.ChangeEvent<HTMLInputElement>) => void
] => {
  const [categories, setCategories] = useState<Category>(
    Object.fromEntries(
      Object.values(types[department]).map((type: string) => [
        type,
        { enabled: true },
      ])
    )
  );

  const updateCategory = (
    category: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCategories({ ...categories, [category]: { enabled: e.target.checked } });
  };

  return [categories, updateCategory];
};
