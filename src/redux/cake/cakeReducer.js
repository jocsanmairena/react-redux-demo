//import action type
import { BUY_CAKE } from "./cakeType";
//set initial store state
const INITIAL_STATE = {
  numOfCakes: 10
};
//reducer modifies the inital state or previous state, based on the action provide it.
const cakeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //if the action type is the BUY_CAKE case scenario, proceed with this action's state modification steps.
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };
    default:
      return state;
  }
};

export default cakeReducer;
