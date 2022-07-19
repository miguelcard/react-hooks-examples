import React, { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ToggleThemeContext = React.createContext();

// THIS IS A PARENT COMPONENT WHICH HAS THE RENDER ALREADY, THE CHILDREN ARG IS JUST WHATS IN BETWEEN THE <Theme...> <> TAGS WHEN CALLED FROM ITS PARENT
export function ThemeCustomProvider({ children }) {

  const [isDarkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme)
  }

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
  )
}

export function useTheme(){
  return useContext(ThemeContext); // useContext() just calls the value for a given (Parent/Global) context
}

export function useToogleTheme(){
  return useContext(ToggleThemeContext);
}

/**
 * -> the onclick=toggleTheme button there is fine but the better idea would be to allow the theme to be updated from anywhere in the child components, in anyway we want 
 *  for this we need to create another context here just to pass down to the children the toggleTheme fucntion (it seems the value can only be one per context)
 * 
 * -> THIS IS A REPEATABLE PATTERN FOR REACT, ESSENTIALY YOU MOSTLY USE THIS TEMPLATE FOR THE CONTEXT (ALSO WITH THE CUSTOM HOOKS)
 */


// you can also create two small custom hooks, just to return the context values to the child components in this case (easy access)
// that way you dont need to export  ThemeContext and ToggleThemeContext at all
