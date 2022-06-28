import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { UseCallbackExList } from './UseCallbackExList';

export const UseCallbackEx = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const themeStyles = {
    background: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  // const getItems = (incrementer) => {
  //   console.log('get items was called');
  //   return [number + incrementer, number + incrementer + 1, number + incrementer +2]
  // }

  const getItems = useCallback((incrementer) => {
    console.log('get items was called');
    return [number + incrementer, number + incrementer + 1, number + incrementer +2]
  }, [number]) // only recreates the getItems function when the 'number' changes and not when something else like the 'dark' changes

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>ChangeTheme</button>
      <UseCallbackExList  getItems={getItems}/>
    </div>
  )
}

/**
 * -> Similar to UseMemo Hook, will not run code inside of it unless certain parameters change
 * -> Same signature as UseMemo
 * 
 * Problem: each new render creates referencial iniqualities, you can have the same fcn or value between renders but they are no longer 'equal'
 * 
 * -> Main Difference, useMemo vs useCallback: use callback returns the whole function from inside its block. (not just the return value of that function)
 *  this allows us to later use/call that function if needed later on the application and call it with any parameters
 * useMemo only returns the value that the function returns
 * 
 * -> Use it when: you want 'referencial equality', meaning you dont create a new function every render, only when we need to (depending on some variables change)
 * ... happen almost always with some other hook like useEffect or useMemo, where you need to have the Function inside the dependencies array (values that change cause the trigger) 
 *  or when: the case if for some reason creating a fcn is really slow (you are probably never going to run into this)
 */