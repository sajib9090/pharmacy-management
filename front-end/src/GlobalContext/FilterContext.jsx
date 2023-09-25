import { createContext, useContext, useEffect, useState } from "react";
import { useProductContext } from "./ProductContext";

const FilterProductContext = createContext();

// eslint-disable-next-line react/prop-types
export const FilterContextProvider = ({ children }) => {
  const { products, refetchProducts } = useProductContext();
  //   search value

  const [searchValue, setSearchValue] = useState("");

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
  useEffect(() => {
    filterProduct(products, searchValue);
  }, [searchValue, setSearchValue, products]);
  return (
    <FilterProductContext.Provider
      value={{
        handleInputChange,
        filteredProducts,
      }}
    >
      {children}
    </FilterProductContext.Provider>
  );
};

export const useFilterProductContext = () => {
  return useContext(FilterProductContext);
};
