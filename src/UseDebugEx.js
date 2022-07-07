
import React, {useState} from 'react'
import { useLocalStorageCustomHook} from './UseDebug-UseLocalStorageEx'

export const UseDebugEx = () => {

    const [firstName, setFirstName] = useLocalStorageCustomHook("firstName", "Mig")
    const [lastName, setLastName] = useState("Card")

    return (
        <>
        First: <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <br/>
        Last: <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        </>
    )
}

// continue 2:02


/**
 * Value that you can read in react devtools, under "Components", ONLY for custom hooks!
 * Example of what you see in components: LocalStorageCustomHook: ["firstName", "Mig"]
 * 
 * Performance: be careful to push it to production, each time componenet re-renders the "useDebugValue()" is called again, 
 * so if an expensive operation is performed to get the value it can get the app laggy
 * 
 * Performance Solution: 
 * useDebug(value, v => function(v)) where the function is called Only Whed Dev Tools Need it
 * the v in callback is the same value we pass on the first arg
 */