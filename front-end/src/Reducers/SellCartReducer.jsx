const SellCartReducer = (state, action) => {
  if (action.type === "ADD_TO_BILL") {
    let { product, quantity } = action.payload;

    const existingItemIndex = state.carts.findIndex(
      (item) => item.product_id === product._id
    );

    if (existingItemIndex !== -1) {
      const updatedCarts = [...state.carts];
      updatedCarts[existingItemIndex].product_quantity += parseInt(quantity);

      return {
        ...state,
        carts: updatedCarts,
      };
    } else {
      let cartProduct = {
        _id: product._id,
        product_id: product._id,
        product_match_id: product.title + 786,
        product_name: product.title,
        product_price_per_unit: parseFloat(product.price),
        product_quantity: parseInt(quantity),
        product_available_quantity: parseInt(product.stock),
      };

      return {
        ...state,
        carts: [...state.carts, cartProduct],
      };
    }
  }

  //remove single item from cart
  if (action.type === "REMOVE_SINGLE_ITEM") {
    let updatedCart = state?.carts?.filter(
      (currentItem) => currentItem?._id !== action?.payload?._id
    );
    return {
      ...state,
      carts: updatedCart,
    };
  }
  // remove all data from cart
  if (action.type === "REMOVE_SOLD_CART") {
    localStorage.removeItem("bill-cart");
    return {
      carts: [],
    };
  }

  return state;
};

export default SellCartReducer;
