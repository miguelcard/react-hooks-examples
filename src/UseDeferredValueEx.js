import React, { useState } from 'react'
import { UseDeferredValueExList } from './UseDeferredValueExList';

export const UseDeferredValueEx = () => {

  const [input, setInput] = useState("")

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <input type="text" value={input} onChange={handleInputChange} />
      <UseDeferredValueExList input={input} />
    </>
  )
}