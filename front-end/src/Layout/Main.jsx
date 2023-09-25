import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div className="lg:flex max-w-[96rem] mx-auto">
      <div>
        <Navbar />
      </div>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
