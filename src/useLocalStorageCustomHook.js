import React, { useState, useEffect } from 'react'

// custom hook to save value on the local storage (when page is refreshed value is still there)

export const useLocalStorageCustomHook = (key, initialValue) => {

    const [value, setValue] = useState( () => getSavedValue(key, initialValue));

    useEffect(() => {
        //save value to local storage whenever is saved
      localStorage.setItem(key, JSON.stringify(value))
    }, [value])
    

    return [value, setValue] // setValue was not really needed here
}


function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));

    if(savedValue){
        return savedValue
    }

    //if initial value is a function, call it and get its value
    if(initialValue instanceof Function) {
        return initialValue();
    }

    return initialValue 
}