import React, { useImperativeHandle, useRef } from 'react'

const UseIHEx2ConfirmationModal = ({ isOpen, onClose }, ref) => {

  const closeRef = useRef()
  const confirmRef = useRef()
  const denyRef = useRef()

  useImperativeHandle(
    ref,                // ref which will be defined "Overriten"
    () => {
      console.log('Use Imp Handle called, custom ref defined!');
      return {
        focusClose: () => closeRef.current.focus(),
        focusConfirm: () => confirmRef.current.focus(),
        focusDeny: () => denyRef.current.focus(),
      }
    },
    // []       // is not depepndent on anything to change,
    // the empty dependency array means the callback will run ONCE at the beginning of the lifecycle of the component and never again

    // (i) because in this case we change the state (re-render) everytime we open or close the modal, we neeed to compute this custom ref 
    // each new render so that the one defined in the parent does not override the custom one. 
  )

  if (!isOpen) {
    return null
  }

  return (
    <div className='modal' ref={ref}>
      <button className="close-btn" ref={closeRef} onClick={onClose}>
        x
      </button>
      <div className="modal-header">
        <h1>Title</h1>
      </div>
      <div className="modal-body">Do you confirm?</div>
      <div className="modal-footer">
        <button className="confirm-btn" ref={confirmRef} onClick={onClose}>Yes</button>
        <button className="deny-btn" ref={denyRef} onClick={onClose}>No</button>
      </div>
    </div>

  )
}

export default React.forwardRef(UseIHEx2ConfirmationModal)

/**
 * our new custom hook is passed back to the Parent component
 */