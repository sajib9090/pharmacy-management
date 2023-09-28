import { NavLink, Outlet } from "react-router-dom";

const StockReport = () => {
  return (
    <>
      <div className="h-[60px] bg-gray-200 flex justify-center items-center shadow-md">
        <div className="flex space-x-4">
          <NavLink
            to={"find-stock-by-company"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold underline"
                : "text-black font-bold"
            }
          >
            Find Stock by Company
          </NavLink>
          <NavLink
            to={"all-generic"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold underline"
                : "text-black font-bold"
            }
          >
            All Generic
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default StockReport;
