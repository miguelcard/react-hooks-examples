import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'

export const UseLayoutEffectEx = () => {
    const [show, setShow] = useState(false);
    const popup = useRef();
    const button = useRef();

    // useEffect(() => {                                    // has weird behaviours, will render first then do the DOM changes, then render again
    //     if (popup.current == null || button.current == null) return
    //     const { bottom } = button.current.getBoundingClientRect()
    //     popup.current.style.top = `${bottom + 25}px`          
    // }, [show])

    useLayoutEffect(() => {
        if (popup.current == null || button.current == null) return // if either the popup or button are missing, just return
        const { bottom } = button.current.getBoundingClientRect() // we are taking a measurement from the DOM!
        popup.current.style.top = `${bottom + 25}px`            // then we set the position of out popup, (should happen pre-render)
    }, [show])

    return (
        <>
            <button ref={button} onClick={() => setShow(prevShow => !prevShow)}>
                Cick Here
            </button>

            {show && (
                <div style={{ position: "absolute" }} ref={popup}>
                    This is a Popup
                </div>
            )}
        </>
    )
}



/**
 * -> similar to useEffect BUT: useEffect happens ASYNCRONOUSLY in the backround while your DOM renders and so on
 *  useLayoutEffect happens SYNCHRONOUSLY between when react ~calculates~ DOM and when it actually ~renders~ it to screen
 *  hance the name, because if you plan an operation that affects the LAYOUT of your DOM, this hook would be the right one
 * 
 * -> but is not as performant as useEffect because is synchronous --- try using useEffect when possible 
 * 
 * USE: when you need to do something based on layout of your DOM 
 *      whenever you are manipulating the DOM in ways that the user can directly see (based on measurements or other things)
 */