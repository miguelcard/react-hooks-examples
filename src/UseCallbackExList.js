import React, { useEffect, useState } from 'react'

export const UseCallbackExList = ({getItems}) => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        console.log('getItems fcn changed');
        setItems(getItems(1))
    }, [getItems])

  return (
    <div>
        {items.map(item => <div key={item}>{item}</div>)}
    </div>
  )
}
