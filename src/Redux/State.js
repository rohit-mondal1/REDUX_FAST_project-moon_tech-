import { createStore } from "redux";
import productReducer from "./ProductReducer/Reducer";

const stor = createStore(productReducer)

export default stor;