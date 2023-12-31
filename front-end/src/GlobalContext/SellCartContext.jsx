import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/SellCartReducer";
import toast from "react-hot-toast";

const SellCartContext = createContext();

//getting carts data from local storage
const getLocalStorageCartData = () => {
  let localStorageCartData = localStorage.getItem("sell-cart");
  // if our first carts value empty then set empty array
  if (localStorageCartData == "undefined" || localStorageCartData === null) {
    return [];
  } else {
    return JSON.parse(localStorageCartData);
  }
};

const initialState = {
  // carts: [],
  // making a new function and set carts value
  carts: getLocalStorageCartData(),
};
// eslint-disable-next-line react/prop-types
const SellCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //add item data inside cart
  const handleAddToBill = (product, quantity) => {
    if (quantity <= "0") {
      toast.error("Bill quantity must be positive");
      return;
    } else if (quantity > product.stock) {
      toast.error("Insufficient Stock");
      return;
    } else {
      dispatch({ type: "ADD_TO_BILL", payload: { product, quantity } });
    }
  };

  const itemRemove = (item) => {
    dispatch({ type: "REMOVE_SINGLE_ITEM", payload: item });
  };

  const handleRemoveAllSoldCart = () => {
    dispatch({ type: "REMOVE_SOLD_CART" });
  };

  //add cart data inside local storage
  useEffect(() => {
    localStorage.setItem("sell-cart", JSON.stringify(state.carts));
  }, [state.carts]);
  return (
    <SellCartContext.Provider
      value={{
        ...state,
        handleAddToBill,
        itemRemove,
        handleRemoveAllSoldCart,
      }}
    >
      {children}
    </SellCartContext.Provider>
  );
};

const useSellCartContext = () => {
  return useContext(SellCartContext);
};

export { SellCartProvider, SellCartContext, useSellCartContext };
