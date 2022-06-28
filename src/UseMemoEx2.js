import React, { useState, useEffect, useMemo } from 'react'

export const UseMemoEx2 = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // // PROBLEM: even if we change the number or anything that triggers a re-render, we get a complete new themeStyles
    // // object (reference) hence it 'changes' and the use effect function runs everytime!
    // const themeStyles = {
    //     background: dark ? 'black' : 'white',
    //     color: dark ? 'white' : 'black'
    // }


    //SOLUTION: useMemo to change object only when it really needs to change, i.e. when value 'dark' changes
    const themeStyles = useMemo(() => {
        return {
            background: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    //lets say we wanted to do something each time the 'themeStyles' object changed, with useEffect:
    useEffect(() => {
        console.log('themeStyles object changed!');
    }, [themeStyles])

    return (
        <>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>ChangeTheme</button>
            <div style={themeStyles}>BLA</div>
        </>
    )
}

export default UseMemoEx2;

/**
* -> 2nd use case for useMemo: Referencial Equallity = refenrence to object is the same as it was last render, 
* only update the reference of object (new object) if the contents of object change
* 
* -> each re-render creates a new reference of the object, thats why useEffect would percieve 
* a new change each time the component rerenders if an object is passed to the dependencies array
*/