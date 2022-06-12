import React, { useState, useMemo } from 'react'

export const UseMemoEx = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    // const numberByTwo = slowFunction(number) // this function gets called everytime the component re-renders! & is slow
                                            // sol: useMemo
    const numberByTwo = useMemo(() => {
        return slowFunction(number)
    }
    , [number])  // when 'number' changes, the function gets called, else it uses the last "cached" value it returned, saved in memory


    const themeStyles = {
        background: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>ChangeTheme</button>
            <div style={themeStyles}>{numberByTwo}</div>
        </>
    )
}

function slowFunction(num) {
    console.log('calling slow finction');
    for (let i = 0; i < 1000000000; i++) {
    }
    return num * 2;
}

export default UseMemoEx;

/**
 * Notes:
 * -> Everytime you change the components state, the whole component re-renders, i.e. all the code from 
 * the component runs again
 * -> useMemo use cases: slow functions that dont relly change that often 
 * -> the idea is to cache a value so that it does not have to be computed every single time
 * -> takes also an argument that when it changes, then the function inside it is recalculated (like useEffect)
 * if it stays the same we dont calculate everything inside it again, but use the old value
 * 
 * (i) you dont want to memoize everything, reason: performance and memory overhead (the useMemo function is called,
 *  and also you are saving a value in memory)
 * only useMemo when you really need the performance benefit, i.e. when you have a really slow function
 */
