import React, { useState, useEffect} from 'react'

// modify a variable based on the width of the open window
export const UseEffectEx2 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => setWindowWidth(window.innerWidth);
    
    useEffect(() => {
        // code when component is mounted
        window.addEventListener('resize', handleResize); // the event listener is always listening, until removed

        return () => {
          // code when component is unmounted
          window.removeEventListener('resize', handleResize);
        }
    }, []) // only to happen on mount -> first time render
    
  return (
    <div>
        <h2>Window width: {windowWidth}</h2>
    </div>
  )
}

export default UseEffectEx2;
