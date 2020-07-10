import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer.js";
//The create store method access a reducer as its parameter
const store = createStore(cakeReducer);
export default store;
