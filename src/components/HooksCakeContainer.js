import React from 'react'
//The useSelectors hooks method is used to map "store state values" as property of the HooksCakeContainer
import { useSeletor } from 'react-redux'

export default HooksCakeContainer = () => {
  //the useSelector hooks receive the store state as is parameter, from which we can specify the state value you want to retrive as a property of the HooksCakeContainer component.
  //We have access the numOfCakes in the store's state and stored in the numOfCakes local constant.
  const numOfCakes = useSeletor(state => state.numOfCakes)
  return (
    <div>
      <h2> Number of cakes - {numOfCakes}</h2>
      <button>Buy Cake</button>
    </div>
  )
}
