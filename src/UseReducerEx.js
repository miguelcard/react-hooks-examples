
import React, {useReducer} from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

export const UseReducerEx = () => {
    // dispatch-> what we call to update state (calls reducer)
    const [state, dispatch] = useReducer(reducer, { count: 0}) // 2 args, reducer-> function called when state changes, and initial value generally object 

    function decrement() {
        dispatch({type : ACTIONS.DECREMENT}) // calls reducer function automatically
    }

    function increment() {
        dispatch({type : ACTIONS.INCREMENT})
    }

    return (
    <>
           <button onClick={decrement}>-</button>
           <span>{state.count}</span>
           <button onClick={increment}>+</button>
    </>
  )
}

export default UseReducerEx;

// dispatch function calls reducer function automatically
function reducer(state, action) {
    switch(action.type){
        case ACTIONS.DECREMENT:
            return {count: state.count - 1}
        case ACTIONS.INCREMENT:
            return {count: state.count + 1}
        default:
            return state
    }
}

/**
 * -> Also allows you to manage a state and re-render a component when that state changes
 * -> more concrete way to handle complex states with nested components (not really useful for small states)
 * -> similar to redux
 * -> the only way we can change our state is through actions we predefine, so thats good to have some constrains
 * ... se more complex example UseReducerEx2
*/