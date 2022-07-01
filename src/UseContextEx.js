import React, {useState} from 'react'
import { ThemeCustomProvider } from './ThemeCustomContext';
import { UseContextChild } from './UseContextChild';


export const UseContextEx = () => {

  return (
    <>
      <ThemeCustomProvider>
        {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
        <UseContextChild />
      </ThemeCustomProvider>
    </>
  )
}

/**
 * -> For passing down props all the way down to all of the children (without having to pass props child by child)
 * “useContext” hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level
 * 
 * 
 * Note: const AContext = React.getContext() gives a component "AContext.Provider" (wrapper) to wrap all of the code that needs information from the context,
 *  taken from "value" property, without having to pass all down with props
 * - the way to use that Context in the child f components, is with the useContext hook!, it just returns the value for a given context. ex: const value = useContext(AContext)
 */

// timestamps to do: 8:26,  10:00