import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.scss";
import Product, { loader as productLoader } from "./routes/product";
import Header from "./components/header";
import Browse, { loader as browseLoader } from "./routes/browse";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      element: <Header shop={true} />,
      children: [
        {
          path: "department/:department",
          element: <Browse />,
          loader: browseLoader,
          errorElement: <ErrorPage />,
        },
        {
          path: "product/:id",
          element: <Product />,
          loader: productLoader,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  {
    basename: "/echo",
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
