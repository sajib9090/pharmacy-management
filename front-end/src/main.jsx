import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route.jsx";
import { ProductProvider } from "./GlobalContext/ProductContext";
import { Toaster } from "react-hot-toast";
import { FilterContextProvider } from "./GlobalContext/FilterContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <ProductProvider>
      <FilterContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </FilterContextProvider>
    </ProductProvider>
  </React.StrictMode>
);