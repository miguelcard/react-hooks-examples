import React, {useEffect, useRef, useState} from 'react'

// example to store previous value of state
export const UseRefEx3 = () => {
    const [name, setName] = useState('')
    const previousNameRef = useRef(name)
    console.log('1. component rendered');
    
    useEffect(() => {
        /** this holds the 'old' state because the render below happens 1st and then the use effect with
         *  the new value gets updated to the previousNameRef, but does not get displayed until the next render! */
        previousNameRef.current = name; 
        console.log('3. then effect is called, name changed previousname var is set to: '+ name);
    }, [name])

    return (
        <>
        <input value={name} onChange={ e => setName(e.target.value)} />
        <div>My Name is: {name}, but my previous one was: {previousNameRef.current}</div>
        { console.log('2. then render happens first: rendered name: ('+name+ ') prev name: ('+ previousNameRef.current+')') }
        </>
    )
}

export default UseRefEx3;
