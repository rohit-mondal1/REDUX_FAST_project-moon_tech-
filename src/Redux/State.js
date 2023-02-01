import { createStore } from "redux";
import productReducer from "./ProductReducer/Reducer";
import {composeWithDevTools} from "@redux-devtools/extension"

const stor = createStore(productReducer , composeWithDevTools())

export default stor;