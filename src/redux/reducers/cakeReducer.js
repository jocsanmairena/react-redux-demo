//The reducer file is the actual place where we modify the state, which is then given to the store
//import action name or type
import { BUY_CAKE } from "../actions/actionTypes";
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
        //We return whatever is the current state (...state, is a copy of the state)
        ...state,
        //and the modification of the current state.
        numOfCakes: state.numOfCakes - 1
      };
    //If nothing matches, we add a default state, the return what is there now in the state
    default:
      return state;
  }
};

export default cakeReducer;
