import React, {useState} from "react";

function App() {

  // returns always an array of two values: 
  // [initialValue, functionToUpdateState] 
  const [count, setCount] = useState(3); // like this the value is called EVERY TIME THE COMPONENT RENDERS; i.e its state changes
  // const [count, setCount] = useState(() => { return 3})  // like this only gets ran one tyme (on load) => good when initial value comes from complex function
  const [direction, setDirection] = useState('up'); // another managed state, best like this instead of managing an entire object
  
  const [objState, setObjState] = useState({count: 5, direction: 'down'}); // not ideal

  function decrementCount() {
    // "right way" to always use the pevious value of count is:
    setCount( prevCount => prevCount - 1)
    // below not the best way, because if you called it twice, you would essentially be pointless cuz:
    // setCount(count - 1)    // count value = 3   (value when we render our function)
    // setCount(count - 1)    // count value = 3   still! , count is not really updated until we render again

    setDirection('down')
    // setDirection( prevDirection => 'down') //this wouldnt make sense fór example, prevDirection is not used for anything
    
    setObjState(prevObject => {   // this is how you would change the sate of entire object
      return {...prevObject , count: prevObject.count -1}
    })
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
    setDirection('up')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{direction}</span>
      <span> // </span>
      <span>{objState.count}{objState.direction}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;

/**
 * Notes: 
 * 1. You can only use Hooks inside function components (not class components)
 * 2. hooks must always be on top of the function, always called in the exact same order. (Not in if statements, functions, loops, etc)
 * 3. best to use setState with arrow function (using previous state value) than just with one argument
 * 4. if you have complex inital values set them with arrow funtions, gets computed only once! ex: useState(() => { logic...; return bla})
 * 5. if you have objects as states it is simpler to divide their prioperties anf manage the state, each one in a useState hook
 */