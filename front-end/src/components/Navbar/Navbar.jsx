import { GoHomeFill } from "react-icons/go";
import { BsCartPlusFill } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../GlobalContext/AuthProvider";
import { useUserContext } from "../../GlobalContext/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { singleUser } = useUserContext();

  return (
    <>
      <nav className="lg:sticky lg:top-0 h-screen w-[180px] bg-blue-100 hidden lg:flex flex-col justify-center space-y-6 relative shadow-2xl px-6">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? " text-blue-800 py-2"
              : "hover:text-blue-800 py-2 duration-500"
          }
        >
          <div title="Home" className="flex items-center">
            <GoHomeFill className="w-10 h-10 cursor-pointer" />
            <h3 className="text-lg font-bold ml-2">Home</h3>
          </div>
        </NavLink>
        <NavLink
          to={"/sell"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-800 py-2"
              : "hover:text-blue-800 py-2 duration-500"
          }
        >
          <div title="Sell" className="flex items-center">
            <BsCartPlusFill className="w-10 h-10 cursor-pointer" />
            <h3 className="text-lg font-bold ml-2">Sell</h3>
          </div>
        </NavLink>
        {singleUser?.isAdmin ? (
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 py-2"
                : "hover:text-blue-800 py-2 duration-500"
            }
          >
            <div title="Dashboard" className="flex items-center">
              <RiDashboardFill className="w-10 h-10 cursor-pointer" />
              <h3 className="text-lg font-bold ml-2">Dashboard</h3>
            </div>
          </NavLink>
        ) : null}
        {user && user ? (
          <h3
            onClick={() => logOut()}
            title="Logout"
            className="absolute cursor-pointer bottom-4 flex items-center text-lg font-bold"
          >
            Logout <FaSignOutAlt className="ml-1" />
          </h3>
        ) : null}
      </nav>
      {/* small screen */}
      <nav className="h-[70px] sticky top-0 bg-blue-100 lg:hidden shadow-xl flex items-center justify-center space-x-6">
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
        <h3
          onClick={() => logOut()}
          title="Logout"
          className="absolute cursor-pointer right-2 flex items-center text-lg font-bold"
        >
          <FaSignOutAlt />
        </h3>
      </nav>
    </>
  );
};

export default Navbar;
