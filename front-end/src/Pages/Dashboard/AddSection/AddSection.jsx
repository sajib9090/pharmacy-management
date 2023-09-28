import { NavLink, Outlet } from "react-router-dom";

const AddSection = () => {
  const menu = [
    {
      id: 1,
      title: "Add Products",
      value: "add-products",
    },
    {
      id: 2,
      title: "Add New Generic",
      value: "add-new-generic",
    },
    {
      id: 3,
      title: "Add New Company",
      value: "add-new-company",
    },
    {
      id: 4,
      title: "Add New Product",
      value: "add-new-product",
    },
    {
      id: 5,
      title: "Add New Category",
      value: "add-new-category",
    },
  ];
  return (
    <>
      <div className="px-4">
        <div className="lg:h-[60px] pt-3 items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3">
          {menu?.map((item) => (
            <NavLink
              key={item?.id}
              to={item?.value}
              className={({ isActive }) =>
                isActive
                  ? "border-2 border-blue-500 text-white bg-blue-500 h-[30px] rounded-md flex justify-center items-center font-bold"
                  : "border-2 border-blue-500 h-[30px] rounded-md flex justify-center items-center text-blue-500 font-bold"
              }
            >
              {item?.title}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default AddSection;
