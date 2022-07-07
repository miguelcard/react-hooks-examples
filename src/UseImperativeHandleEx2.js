import React, { useRef, useState} from 'react'
import UseIHEx2ConfirmationModal from './UseIHEx2ConfirmationModal'
import './styles.css'

export const UseImperativeHandleEx2 = () => {
    const [open, setOpen] = useState(false)
    const modalRef = useRef()
    console.log('use Ref defined again?');

    return (
        <>
            <button onClick={() => setOpen(true)}>Open</button>
            <button onClick={() => modalRef.current.focusClose()} >Focus Close</button>
            <button onClick={() => modalRef.current.focusConfirm()}>Focus Accept</button>
            <button onClick={() => modalRef.current.focusDeny()}>Focus Deny</button>
            <UseIHEx2ConfirmationModal
                ref={modalRef}
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </>
    )
}


/**
 * Ex 2: real use case example
 * 
 * "When you need to access multiple elements from a Custom Component, outside of that component where props just dont make sense"
 * "This hook is something you should NOT use very often at all. there are only a few cases where you must"
 */