import React, { useState } from 'react'
import { useLocalStorageCustomHook } from './useLocalStorageCustomHook';
import { useLoggerCustomHook } from './useLoggerCustomHook';

export const CustomHooksUseLocalStorage = () => {
    
    // custom hook to save the value in the local storage: takes local storage (key, value) to be saved
    const [name, setName] = useLocalStorageCustomHook('name','');

    // custom hook to log value when it changes:
    useLoggerCustomHook(name)


    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}


/**
 * Custom hooks: 
 * - just normal functions that can do something and usually encapsulate other hooks + logic inside 
 * - most important to: 
 *      Encapsulate logic / functionallity, to make client code more concise
 */