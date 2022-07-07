import React, { useRef, useState } from 'react'
import UseIHCustomInput from './UseIHCustomInput'

export const UseImperativeHandleEx = () => {
    const [value, setValue] = useState("red")
    const inputRef = useRef()

    return (
        <>
            <UseIHCustomInput
                ref={inputRef}
                value={value}
                onChange={e => setValue(e.target.value)}
            />

            <br />
            {/* <button onClick={()=> inputRef.current.focus()}>Focus</button> */}
            <button onClick={() => inputRef.current.alertSomething()}>Focus</button>
        </>
    )
}
