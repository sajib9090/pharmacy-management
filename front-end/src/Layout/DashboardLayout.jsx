import { Outlet } from "react-router-dom";
import Sidebar from "../components/DashBoard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="lg:flex max-w-[96rem] mx-auto">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
