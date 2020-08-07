//Store is a redux ONLY object. Meaning is not part of react-redux or react.
//import the createStore function from redux to create a Redux Store. 
import { createStore } from "redux";
//import the required reducer function
import cakeReducer from "./reducers/cakeReducer.js";
//The createStore method requires a reducer as its parameter in order to create a redux Store and update its state.
const store = createStore(cakeReducer);
//we export the store to provide it to the react application. The React-Redux Provider component helps us with that.
export default store;
