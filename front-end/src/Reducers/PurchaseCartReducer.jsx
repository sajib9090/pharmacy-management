const CartReducer = (state, action) => {
  //
  if (action.type === "ADD_PURCHASED_PRODUCT") {
    let { product, quantity } = action.payload;

    const existingItemIndex = state.purchaseCarts?.findIndex(
      (item) => item?.product_id === product?._id
    );

    if (existingItemIndex !== -1) {
      const updatedCarts = [...state.purchaseCarts];
      updatedCarts[existingItemIndex].product_quantity += parseInt(quantity);

      return {
        ...state,
        purchaseCarts: updatedCarts,
      };
    } else {
      let purchasedCartProduct = {
        _id: product._id,
        product_id: product._id,
        product_match_id: product.product_id,
        product_name: product.title,
        product_price_per_unit: parseFloat(product.price),
        product_purchase_price_per_unit: parseFloat(
          product.product_purchase_price
        ),
        product_quantity: parseInt(quantity),
        product_available_quantity: parseInt(product.stock),
      };

      return {
        ...state,
        purchaseCarts: [...state.purchaseCarts, purchasedCartProduct],
      };
    }
  }

  //remove item from purchase cart
  if (action.type === "REMOVE_ITEM_FROM_PURCHASE_CART") {
    let updatedCart = state?.purchaseCarts?.filter(
      (currentItem) => currentItem?._id !== action?.payload?._id
    );
    return {
      ...state,
      purchaseCarts: updatedCart,
    };
  }
  //remove single item from cart
  // remove all data from cart

  if (action.type === "REMOVE_PURCHASE_CART") {
    localStorage.removeItem("purchase-cart");
    return {
      purchaseCarts: [],
    };
  }

  return state;
};

export default CartReducer;
