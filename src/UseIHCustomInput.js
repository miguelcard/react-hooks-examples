import React, {useImperativeHandle} from 'react'

const UseIHCustomInput = ({ value, ...props }, ref) => {

    useImperativeHandle(
        ref,                                                // the ref you want to Override
        () => {
            return { alertSomething: () => alert("Blaaa")}  // the fcn which sets the value of the ref you define
        },
        []                                                  // array of dependencies / when should the ref value be changed again / same as other hooks
    )

    return (
        <>
            {/* <input ref={ref} type="text" {...props} />  this works fine if you have to pass a single ref directly to a single element inside a component */}
        </>
    )
}

export default React.forwardRef(UseIHCustomInput)


/**
 * Ex 1: No real use case, just to understand the concept
 * 
 * -> you need to understand how the useRef hook works
 * 
 * -> But what what if you have a custom ref? (Not related to a component but 
 * completely change how the ref works, a custom one entirely) = then useImperativeHandle comes in 
 * 
 * -> this example just shows how we can use the ref for something entirely different, and use its methods from the parent component.
 * Even if in this case is not even related to the input field ( so in this case it does not make much sense)
 */