import { NavLink, Outlet } from "react-router-dom";

const SellReport = () => {
  return (
    <>
      <div className="h-[60px] bg-gray-200 flex justify-center items-center shadow-md">
        <div className="flex space-x-4">
          <NavLink
            to={"sell-history"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold underline"
                : "text-black font-bold"
            }
          >
            Sell History
          </NavLink>
          <NavLink
            to={"find-sold-invoice"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold underline"
                : "text-black font-bold"
            }
          >
            Find Sold Invoice
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default SellReport;
