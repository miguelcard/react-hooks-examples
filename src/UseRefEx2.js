import React, {useRef, useState} from 'react'

export const UseRefEx2 = () => {
    const [name, setName] = useState('')
    const nameInputRef = useRef() // the ref att. in the html automatically assigns this var a reference to the element

    function focus() {
        nameInputRef.current.focus()   // same dom element you would get if using Document.querySelector() f.ex.
    }

    return (
        <>
        <input ref={nameInputRef} value={name} onChange={ e => setName(e.target.value)} />
        <div>My Name is: {name}</div>
        <button onClick={() => focus()}>Focus</button>
        </>
    )
}

export default UseRefEx2;
/**
 * -> you can use the "ref" html attribute, (each element in your html document has it) to store a reference 
 * to a particular element
 * 
 * -> Bad uses: normally you let react manage all of your states, values, onChanges
 * use state and onChange() to update your state. Do all (element) management through state or props
 * 
 * But people sometimes handle the elements, states just using onRef, e.g.: inputRef.current.value = bla, 
 * or appendChild / adding / removing childs: you want instead to handle all that with React and JSX 
 */