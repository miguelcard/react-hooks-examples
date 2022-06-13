import React, {useEffect, useState, useRef} from 'react'

export const UseRefEx = () => {
    const [name, setName] = useState('')

    // example: we want to increment a count each time the component renders:
    const renderCount = useRef(1)
    // {current: bla} -> this is the obj that useRef returns

    useEffect(()=> {
        renderCount.current += 1;                   // if a state was used for the count here, it would change and trigger a render again and we would be stuck in an infinite loop
    })                                              // no array here means effect triggers each render!

    return (
        <>
        <input value={name} onChange={ e => setName(e.target.value)} />
        <div>My Name is: {name}</div>
        <div>The component has rendered {renderCount.current} times</div>
        </>
    )
}

export default UseRefEx;

/**
 * Notes:
 * very similar to state -> it persists values between renders of component
 * BUT ref, does NOT cause component to re-render / re-update when it gets changed
 * 
 * use case: commonly used to reference input elements from the HTML or a DOM element on your page ... see Ex2
 * use case: store the previous value of your state ...see Ex3
 */