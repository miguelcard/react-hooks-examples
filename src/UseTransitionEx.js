import React, {useState, useTransition} from 'react'

export const UseTransitionEx = () => {

    const [isPending, startTransition] = useTransition();
    const [input, setInput] = useState("");
    const [list, setList] = useState([]);

    function handleInputChange(e) {
        setInput(e.target.value);

        startTransition(() => {
            const otherList = []
            for(let i = 0; i < 20000; i++){   // this here takes really long time, we want to render the input even before this... all inside startTransition is lower prio
                otherList.push(e.target.value);
            }
            setList(otherList);
        })
    }

    return (
        <div>
            <input type="text" value={input} onChange={handleInputChange} />
            
            {isPending ? "Loading ..." : list.map((listElement, index) => 
                <div key={index}>{listElement}</div>
            )}
        </div>
    )
}


/**
 * used to speed up applications and make them feel responsive, allows us to do two different state changes / renders at same time, and rank them by priority
 * use case: time intensive computation that runs often (same use case as useDefferedValue)
 * 
 * by default all states are high priority, and React will runs all, one after the other until all finish and then renders the screen
 * i.e = Redner does not happen until all states are defined!
 * 
 *  -> inside the startTransition method you define all of the code which is low priority
 *  that way renders first all the high priority stuff first, and leaves for after the low priority things (inside startTransition)
 * 
 * -> isPending var: boolean , if things inside startTransition are still computing: true , are done: false
 * 
 * -> try to use it ONLY when needed. for performance related issues
 */