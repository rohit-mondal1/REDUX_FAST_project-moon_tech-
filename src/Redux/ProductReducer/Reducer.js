import { ADD_To_Cart, Remove_To_Cart } from "../actionType/actionType";

const inituilState = {
  cart: [],
};

const productReducer = (state = inituilState, action) => {
  switch (action.type) {
    case ADD_To_Cart:
      return {
        ...state,
        cart: [...state.cart, action.paylode],
      };

    case Remove_To_Cart:
      return {};

    default:
      return state;
  }
};

export default productReducer;
