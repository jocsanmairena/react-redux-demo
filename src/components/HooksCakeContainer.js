import React from 'react'
//The useSelectors hooks method is used to map "redux store state values" as property of the HooksCakeContainer
//The useDispatch hooks method is used to map "redux store state values" as property of the HooksCakeContainer
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/actions/actionFunctions'

const HooksCakeContainer = () => {
    //the useSelector hooks receive the store state as is parameter, from which we can specify the state value you want to retrive as a property of the HooksCakeContainer component.
    //With the useSelector hook, we have access the numOfCakes in the store's state and stored in the numOfCakes local constant.
    const numOfCakes = useSelector(state => state.numOfCakes)
    //The useDispatch hook, returns a reference of the dispatch function in the redux store, which allow us to dispatch actions as need it.
    const dispatch = useDispatch()
    return (
        <div>
            <h1>HooksCakeContainer</h1>
            <h2> Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
