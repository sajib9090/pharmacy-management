import { GoHomeFill } from "react-icons/go";
import { BsCartPlusFill } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="lg:sticky lg:top-0 h-screen w-[90px] bg-blue-100 hidden lg:flex flex-col justify-center space-y-8 px-2 relative shadow-2xl">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 py-2 scale-125"
              : "hover:bg-gray-200 hover:scale-110 py-2 duration-500"
          }
        >
          <div title="Home">
            <GoHomeFill className="w-10 h-10 cursor-pointer mx-auto" />
          </div>
        </NavLink>
        <NavLink
          to={"/sell"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 py-2 scale-125"
              : "hover:bg-gray-200 hover:scale-110 py-2 duration-500"
          }
        >
          <div title="Sell" className="hover:bg-gray-200 py-2">
            <BsCartPlusFill className="w-10 h-10 cursor-pointer mx-auto" />
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 py-2 scale-125"
              : "hover:bg-gray-200 hover:scale-110 py-2 duration-500"
          }
        >
          <div title="Dashboard" className="hover:bg-gray-200 py-2">
            <RiDashboardFill className="w-10 h-10 cursor-pointer mx-auto" />
          </div>
        </NavLink>
      </nav>
      {/* small screen */}
      <nav className=" h-[70px] sticky top-0 bg-blue-100 lg:hidden shadow-xl flex items-center justify-center space-x-6">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 scale-110 py-1 px-2"
              : "hover:bg-gray-200 py-1 px-2 hover:scale-110 duration-500"
          }
        >
          <div title="Home">
            <GoHomeFill className="w-8 h-8 cursor-pointer mx-auto" />
          </div>
        </NavLink>
        <NavLink
          to={"/sell"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 scale-125 py-1 px-2"
              : "hover:bg-gray-200 py-1 px-2 hover:scale-110 duration-500"
          }
        >
          <div title="Sell">
            <BsCartPlusFill className="w-8 h-8 cursor-pointer mx-auto" />
          </div>
        </NavLink>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) =>
            isActive
              ? "bg-gray-200 scale-125 py-1 px-2"
              : "hover:bg-gray-200 py-1 px-2 hover:scale-110 duration-500"
          }
        >
          <div title="Dashboard">
            <RiDashboardFill className="w-8 h-8 cursor-pointer mx-auto" />
          </div>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
