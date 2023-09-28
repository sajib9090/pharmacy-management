import { NavLink, Outlet } from "react-router-dom";

const PurchaseReport = () => {
  return (
    <>
      <div className="h-[60px] bg-gray-200 flex justify-center items-center shadow-md">
        <div className="flex space-x-4">
          <NavLink
            to={"purchase-history"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold underline"
                : "text-black font-bold"
            }
          >
            Purchase History
          </NavLink>
          <NavLink
            to={"find-purchase-invoice"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold underline"
                : "text-black font-bold"
            }
          >
            Find Purchase Invoice
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default PurchaseReport;
