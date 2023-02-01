import { ADD_To_Cart, Remove_To_Cart } from "../actionType/actionType";

const inituilState = {
  cart: [],
};

const productReducer = (state = inituilState, action) => {

  const selectproducts = state.cart.find(pro => pro._id === action.paylode._id)
  switch (action.type) {
    case ADD_To_Cart:
      if(selectproducts){
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, {...action.paylode , quntyti:1}],
      };

    case Remove_To_Cart:
      return {
        ...state,
        cart : state.cart.filter(p => p !== action.paylode)
      };

    default:
      return state;
  }
};

export default productReducer;
