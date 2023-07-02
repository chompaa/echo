import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Clothing, { loader as clothingLoader } from "./routes/clothing";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import Product, { loader as productLoader } from "./routes/product";
import Header from "./components/header";
import Equipment, { loader as equipmentLoader } from "./routes/equipment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    element: <Header />,
    children: [
      {
        path: "/shop/",
        children: [
          {
            path: "clothing",
            element: <Clothing />,
            loader: clothingLoader,
          },
          {
            path: "equipment",
            element: <Equipment />,
            loader: equipmentLoader,
          },
          {
            path: ":id",
            element: <Product />,
            loader: productLoader,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
