import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Route.jsx";
import { ProductProvider } from "./GlobalContext/ProductContext";
import { Toaster } from "react-hot-toast";
import { FilterContextProvider } from "./GlobalContext/FilterContext";
import { SellCartProvider } from "./GlobalContext/SellCartContext";
import { PurchaseCartProvider } from "./GlobalContext/PurchaseCartContext";
import AuthProvider from "./GlobalContext/AuthProvider";
import { UserContextProvider } from "./GlobalContext/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster />
    <AuthProvider>
      <UserContextProvider>
        <ProductProvider>
          <FilterContextProvider>
            <SellCartProvider>
              <PurchaseCartProvider>
                <RouterProvider router={router}></RouterProvider>
              </PurchaseCartProvider>
            </SellCartProvider>
          </FilterContextProvider>
        </ProductProvider>
      </UserContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
