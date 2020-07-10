import React from "react";

const CakeContainer = () => {
  //How does the cakeContainer component access the redux store state values? ANSWER: The store state values are mapped as component properties, in the component, using the mapStateToProps function.
  //How does the cakeContainer component access triggers redux actions for state changes? ANSWER: The store state values are mapped as component properties, in the component, using the mapStateToProps function.//We are given access to the redux dispatch method, which allows us to dispatch actions inside the component.
  return (
    <div>
      <h2>Number of cakes</h2>
      <button>Buy Cake</button>
    </div>
  );
};

//The mapStateToProps function takes the redux store's state as its parameter.
const mapStateToProps = state => {
  //we are interested only on numOfCakes store state prorperty.
  return {
    //the local property we desire to give is numOfCakes
    numOfCakes: state.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //the local property name we desire to give is buyCake. This is a function that trigger the redux dispatch fuction, which in turn triggers the redux buyCake action creator function.
    buyCake: () => dispatch(buyCake())
  };
};

export default CakeContainer;
