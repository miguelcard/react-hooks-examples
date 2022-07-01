import React, { useEffect } from 'react'

// Custom hook to log whatever value is passed in when it changes
export const useLoggerCustomHook = (value) => {
    
    useEffect(() => {
        console.log(value);
    }, [value])

}
