import { NavLink, Outlet } from "react-router-dom";

const AccountsReport = () => {
  return (
    <>
      <div className="h-[60px] bg-gray-200 flex justify-center items-center shadow-md">
        <div className="flex space-x-4">
          <NavLink
            to={"check-accounts-activity"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold underline"
                : "text-black font-bold"
            }
          >
            Check Accounts Activity
          </NavLink>
          <NavLink
            to={"create-new-account"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-700 font-bold underline"
                : "text-black font-bold"
            }
          >
            Create New Account
          </NavLink>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AccountsReport;
