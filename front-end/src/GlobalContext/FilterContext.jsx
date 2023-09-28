import { createContext, useContext, useEffect, useState } from "react";
import { useProductContext } from "./ProductContext";
import axios from "axios";
import Swal from "sweetalert2";

const FilterProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const FilterContextProvider = ({ children }) => {
  const { products, refetchProducts } = useProductContext();
  //   search value
  const [searchValue, setSearchValue] = useState("");

  //this function for clear filter when product add in cart
  const addToDone = () => {
    setSearchValue("");
  };

  // get search value function
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  // product filter function
  const filterProduct = (products, searchValue) => {
    if (searchValue) {
      const result = products?.filter(
        (item) =>
          item?.title?.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      );
      setFilteredProducts(result);
      return;
    }
    // Handle empty search
    if (!searchValue) {
      setFilteredProducts([]);
    }
  };

  const [filteredProducts, setFilteredProducts] = useState([]);
  //
  const [selectedOption, setSelectedOption] = useState("");
  const [filterProductsByCompany, setFilterProductsByCompany] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const FilterProductByCompany = (
    products,
    setSelectedOption,
    selectedOption,
    setFilterProductsByCompany
  ) => {
    if (selectedOption) {
      const sortBySelectedValue = products?.filter((currentElement) =>
        currentElement?.company_name?.toLowerCase().includes(selectedOption)
      );
      setFilterProductsByCompany(sortBySelectedValue);
      return;
    }
    if (searchInput === "") {
      setFilterProductsByCompany([]);
    }
  };
  //
  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${item.title}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const remainingData = filterProductsByCompany?.filter(
          (currElem) => currElem._id != item._id
        );
        setFilterProductsByCompany(remainingData);
        axios
          .delete(
            `${import.meta.env.VITE_API_URL}/api/delete/product/${item?._id}`
          )
          .then((res) => {
            Swal.fire("Deleted!", `${item?.title}`, "success");
            refetchProducts();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  useEffect(() => {
    filterProduct(products, searchValue);
    FilterProductByCompany(
      products,
      setSelectedOption,
      selectedOption,
      setFilterProductsByCompany
    );
  }, [searchValue, products, selectedOption, searchInput]);
  return (
    <FilterProductContext.Provider
      value={{
        handleInputChange,
        filteredProducts,
        addToDone,
        setSelectedOption,
        filterProductsByCompany,
        searchInput,
        setSearchInput,
        selectedOption,
        handleDelete,
      }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};

export const useFilterProductContext = () => {
  return useContext(FilterProductContext);
};
