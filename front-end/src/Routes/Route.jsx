/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Loader from "../components/Loader/Loader";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login/Login";
import AdminRoute from "./AdminRoute";
const Sell = lazy(() => import("../Pages/Sell/Sell"));
const Dashboard = lazy(() => import("../Pages/Dashboard/Dashboard"));
const DashboardLayout = lazy(() => import("../Layout/DashboardLayout"));
const AddSection = lazy(() =>
  import("../Pages/Dashboard/AddSection/AddSection")
);
const StockReport = lazy(() =>
  import("../Pages/Dashboard/StockReport/StockReport")
);
const SellReport = lazy(() =>
  import("../Pages/Dashboard/SellReport/SellReport")
);
const PurchaseReport = lazy(() =>
  import("../Pages/Dashboard/PurchaseReport/PurchaseReport")
);
const AccountsReport = lazy(() =>
  import("../Pages/Dashboard/AccountsReport/AccountsReport")
);
const AddProducts = lazy(() =>
  import("../Pages/Dashboard/AddSection/AddProducts/AddProducts")
);
const AddNewGeneric = lazy(() =>
  import("../Pages/Dashboard/AddSection/AddNewGeneric/AddNewGeneric")
);
const AddNewCompany = lazy(() =>
  import("../Pages/Dashboard/AddSection/AddNewCompany/AddNewCompany")
);
const AddNewProduct = lazy(() =>
  import("../Pages/Dashboard/AddSection/AddNewProduct/AddNewProduct")
);
const AddNewCategory = lazy(() =>
  import("../Pages/Dashboard/AddSection/AddNewCategory/AddNewCategory")
);
const FindStockByCompany = lazy(() =>
  import("../Pages/Dashboard/StockReport/FindStockByCompany/FindStockByCompany")
);
const AllGeneric = lazy(() =>
  import("../Pages/Dashboard/StockReport/AllGeneric/AllGeneric")
);
const EditProduct = lazy(() =>
  import(
    "../Pages/Dashboard/StockReport/FindStockByCompany/EditProduct/EditProduct"
  )
);
const SellHistory = lazy(() =>
  import("../Pages/Dashboard/SellReport/SellHistory/SellHistory")
);
const SoldInvoice = lazy(() => import("../Pages/Sell/SoldInvoice/SoldInvoice"));
const PurchaseInvoice = lazy(() =>
  import(
    "../Pages/Dashboard/AddSection/AddProducts/PurchaseInvoice/PurchaseInvoice"
  )
);
const FindSoldInvoice = lazy(() =>
  import("../Pages/Dashboard/SellReport/FindSoldInvoice/FindSoldInvoice")
);
const PurchaseHistory = lazy(() =>
  import("../Pages/Dashboard/PurchaseReport/PurchaseHistory/PurchaseHistory")
);
const FindPurchaseInvoice = lazy(() =>
  import(
    "../Pages/Dashboard/PurchaseReport/FindPurchaseInvoice/FindPurchaseInvoice"
  )
);
const CheckAccountsActivity = lazy(() =>
  import(
    "../Pages/Dashboard/AccountsReport/CheckAccountsActivity/CheckAccountsActivity"
  )
);
const CreateNewAccount = lazy(() =>
  import("../Pages/Dashboard/AccountsReport/CreateNewAccount/CreateNewAccount")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    errorElement: <h1>Error</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sell",
        element: (
          <Suspense fallback={<Loader />}>
            <Sell />
          </Suspense>
        ),
      },
      {
        path: "/sell/invoice/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <SoldInvoice />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Suspense fallback={<Loader />}>
        <PrivateRoute>
          <AdminRoute>
            <DashboardLayout />
          </AdminRoute>
        </PrivateRoute>
      </Suspense>
    ),
    errorElement: <h1>dashboard error</h1>,
    children: [
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "add-section",
        element: (
          <Suspense fallback={<Loader />}>
            <AddSection />
          </Suspense>
        ),
        children: [
          {
            path: "add-products",
            element: (
              <Suspense fallback={<Loader />}>
                <AddProducts />
              </Suspense>
            ),
          },
          {
            path: "/dashboard/add-section/add-products/purchase-invoice/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <PurchaseInvoice />
              </Suspense>
            ),
          },
          {
            path: "add-new-generic",
            element: (
              <Suspense fallback={<Loader />}>
                <AddNewGeneric />
              </Suspense>
            ),
          },
          {
            path: "add-new-company",
            element: (
              <Suspense fallback={<Loader />}>
                <AddNewCompany />
              </Suspense>
            ),
          },
          {
            path: "add-new-product",
            element: (
              <Suspense fallback={<Loader />}>
                <AddNewProduct />
              </Suspense>
            ),
          },
          {
            path: "add-new-category",
            element: (
              <Suspense fallback={<Loader />}>
                <AddNewCategory />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "stock-report",
        element: (
          <Suspense fallback={<Loader />}>
            <StockReport />
          </Suspense>
        ),
        children: [
          {
            path: "find-stock-by-company",
            element: (
              <Suspense fallback={<Loader />}>
                <FindStockByCompany />
              </Suspense>
            ),
          },
          {
            path: "find-stock-by-company/edit/:id",
            element: (
              <Suspense fallback={<Loader />}>
                <EditProduct />
              </Suspense>
            ),
          },
          {
            path: "all-generic",
            element: (
              <Suspense fallback={<Loader />}>
                <AllGeneric />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "sell-report",
        element: (
          <Suspense fallback={<Loader />}>
            <SellReport />
          </Suspense>
        ),
        children: [
          {
            path: "sell-history",
            element: (
              <Suspense fallback={<Loader />}>
                <SellHistory />
              </Suspense>
            ),
          },
          {
            path: "find-sold-invoice",
            element: (
              <Suspense fallback={<Loader />}>
                <FindSoldInvoice />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "purchase-report",
        element: (
          <Suspense fallback={<Loader />}>
            <PurchaseReport />
          </Suspense>
        ),
        children: [
          {
            path: "purchase-history",
            element: (
              <Suspense fallback={<Loader />}>
                <PurchaseHistory />
              </Suspense>
            ),
          },
          {
            path: "find-purchase-invoice",
            element: (
              <Suspense fallback={<Loader />}>
                <FindPurchaseInvoice />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "accounts-report",
        element: (
          <Suspense fallback={<Loader />}>
            <AccountsReport />
          </Suspense>
        ),
        children: [
          {
            path: "check-accounts-activity",
            element: (
              <Suspense fallback={<Loader />}>
                <CheckAccountsActivity />
              </Suspense>
            ),
          },
          {
            path: "create-new-account",
            element: (
              <Suspense fallback={<Loader />}>
                <CreateNewAccount />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
