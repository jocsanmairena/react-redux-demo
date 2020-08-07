//Cake Container is the component where we want to display the numOfCakes, which is part of the redux state. Also, where we want to dispatch the "buyCake" action with a button click.

import React from 'react'
import { buyCake } from '../redux/actions/actionFunctions'

//How does the CakeContainer component access the redux store state values? ANSWER: The store state values are mapped as component properties, in the component, using the mapStateToProps function.
//How does the cakeContainer component access triggers redux actions for state changes? ANSWER: The store state values are mapped as component properties, in the component, using the mapStateToProps function.//We are given access to the redux dispatch method, which allows us to dispatch actions inside the component.
const CakeContainer = () => {
	return (
		<div>
			<h2>Number of cakes</h2>
			<button>Buy Cake</button>
		</div>
	)
}

//The mapStateToProps function uses/takes the redux store's state as its parameter. The mapStateToProps fucntion gives components (like CakeContainer) access to modify the "state" in the redux store.
const mapStateToProps = state => {

	return {
		//the local property we desire to give is numOfCakes.We are interested only on the numOfCake's, state store prorperty. In large application you might need to use, something called selectors, in order to make more granular data selection.
		numOfCakes: state.numOfCakes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		//the local property name we desire to give is buyCake. This is a function that trigger the redux dispatch fuction, which in turn triggers the redux buyCake action creator function.
		buyCake: () => dispatch(buyCake())
	}
}

export default CakeContainer
