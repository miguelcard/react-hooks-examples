import React, { useState, useEffect, useDebugValue } from 'react'

// custom hook to save value on the local storage (when page is refreshed value is still there)
export const useLocalStorageCustomHook = (key, initialValue) => {
    const [value, setValue] = useState(() => getSavedValue(key, initialValue));

    // useDebugValue([key, initialValue]) // you can put as many values as you want, example of what you see in components: LocalStorageCustomHook: ["firstName", "Mig"]
    //useDebugValue({ key, initialValue }) this also works and would show  the value in the same array as the previous one

    // when the operation is slow, you can fo the following so it is only calculated when needed (1)
    // useDebugValue(initialValue, () => aSlowFunction()) // no args, is this thee right way?

    useDebugValue(value, (v) => aSlowFunction(v)) // with args



    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}


function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key));

    if (savedValue) {
        return savedValue
    }

    //if initial value is a function, call it and get its value
    if (initialValue instanceof Function) {
        return initialValue();
    }

    return initialValue
}


function aSlowFunction(value) {
    for (let i = 0; i < 2000000000; i++) {
    }
    return value
}

// function aSlowFunction() {
//     for (let i = 0; i < 1000000000; i++) {
//         console.log(i);
//     }
//     return Math.random()
// }


/**
 * (1) Performance: be careful to push it to production, each time componenet re-renders the "useDebugValue()" is called again, 
 * so if an expensive operation is performed to get the value it can get the app laggy
 * 
 * Performance Solution: 
 * useDebug(value, v => function(v)) where the function is called Only Whed Dev Tools Need it
 * the v in callback is the same value we pass on the first arg
 */