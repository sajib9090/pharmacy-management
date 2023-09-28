import { Link, NavLink } from "react-router-dom";
import {
  MdAddBox,
  MdOutlineSell,
  MdManageAccounts,
  MdClose,
} from "react-icons/md";
import { CgDatabase } from "react-icons/cg";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { HiMenuAlt2 } from "react-icons/hi";
import { useContext, useState } from "react";
import { AuthContext } from "../../../GlobalContext/AuthProvider";

const Sidebar = () => {
  const menu = [
    {
      id: 1,
      title: "Add Section",
      value: "add-section",
      icon: <MdAddBox />,
    },
    {
      id: 2,
      title: "Stock Report",
      value: "stock-report",
      icon: <CgDatabase />,
    },
    {
      id: 3,
      title: "Sell Report",
      value: "sell-report",
      icon: <MdOutlineSell />,
    },
    {
      id: 4,
      title: "Purchase Report",
      value: "purchase-report",
      icon: <GiTakeMyMoney />,
    },
    {
      id: 5,
      title: "Accounts Report",
      value: "accounts-report",
      icon: <MdManageAccounts />,
    },
  ];

  const { user, logOut } = useContext(AuthContext);

  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <>
      <div className="bg-blue-200 w-[250px]">
        <div className="min-h-screen sticky top-0 bg-blue-200 w-[230px] lg:flex flex-col justify-between pt-6 pb-12 px-4 hidden">
          <div>
            <p className="font-medium">
              Hi,{" "}
              <span className="capitalize">{user?.email?.split("@")[0]}</span>
            </p>
          </div>
          <ul className="flex flex-col space-y-6">
            {menu?.map((item) => (
              <NavLink
                to={item.value}
                key={item.id}
                title={item.title}
                className={({ isActive }) =>
                  isActive
                    ? " text-blue-800 font-bold underline text-lg"
                    : "hover:text-blue-800 duration-500 font-bold text-black text-lg"
                }
              >
                <span className="flex items-center space-x-1">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </span>
              </NavLink>
            ))}
          </ul>
          <div className="font-bold text-lg border-t-2 border-black">
            <Link to="/">
              <p className="py-2 hover:text-blue-800 flex items-center">
                <FaHome className="mr-1" /> Home
              </p>
            </Link>
            <p
              onClick={() => logOut()}
              className="flex items-center cursor-pointer"
            >
              <IoLogOut className="mr-1" />
              Logout
            </p>
          </div>
        </div>
      </div>
      {/* small screen */}
      <div className="block sticky top-0 z-50 lg:hidden h-[80px] bg-blue-300">
        <div className="ml-4 h-[80px] flex items-center">
          {toggleOpen ? (
            ""
          ) : (
            <HiMenuAlt2
              onClick={() => setToggleOpen(!toggleOpen)}
              className="h-8 w-8 text-black cursor-pointer"
            />
          )}
        </div>
        <div className="absolute right-6 top-7">
          <p className="font-medium">
            Hi, <span className="capitalize">{user?.email?.split("@")[0]}</span>
          </p>
        </div>
        <div
          className={
            toggleOpen
              ? "absolute left-0 top-0 bg-gray-200 pl-5 w-[250px] h-screen shadow-2xl flex flex-col space-y-4 duration-500 ease-in-out justify-between px-4"
              : "left-[-260px] top-0 absolute duration-500 ease-in-out w-[250px] h-screen bg-gray-200 space-y-4 flex flex-col justify-between px-4"
          }
        >
          <div>
            <div className="pt-5">
              <MdClose
                onClick={() => setToggleOpen(!toggleOpen)}
                className="h-8 w-8 text-black cursor-pointer ml-auto"
              />
            </div>
            <div className="flex flex-col space-y-6">
              {menu?.map((item) => (
                <NavLink
                  to={item.value}
                  key={item.id}
                  title={item.title}
                  onClick={() => setToggleOpen(!toggleOpen)}
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-800 font-bold underline text-lg"
                      : "hover:text-blue-800 duration-500 font-bold text-black text-lg"
                  }
                >
                  <span className="flex items-center space-x-1">
                    <span>{item.icon}</span>
                    <span>{item.title}</span>
                  </span>
                </NavLink>
              ))}
            </div>
          </div>

          <div className="font-bold text-lg border-t-2 border-black pb-6">
            <Link to="/">
              <p className="py-4 hover:text-blue-800 flex items-center">
                <FaHome className="mr-1" /> Home
              </p>
            </Link>
            <p
              onClick={() => logOut()}
              className="flex items-center cursor-pointer"
            >
              <IoLogOut className="mr-1" />
              Logout
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
