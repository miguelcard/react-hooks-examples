import React, { useContext } from 'react'
import { ThemeContext, ToggleThemeContext, useTheme, useToogleTheme } from './ThemeCustomContext';

export const UseContextChild = () => {

    const isDarkTheme = useTheme() // custom hooks to call the value for a given context
    const toggleTheme = useToogleTheme()

    const themeStyles = {
        background: isDarkTheme ? '#333' : '#CCC',
        color: isDarkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>UseContextChild</div>
        </>
    )
}
