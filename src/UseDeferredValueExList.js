import React, { useMemo, useDeferredValue, useEffect } from 'react'

export const UseDeferredValueExList = ({ input }) => {

    // here we are saying this is low priority and its value can wait to 
    // chage and to render when there are no more constant changes to it, thus we give a high priority to render 
    // first the input field where the user is typing and a secondary priority to the list computed afterwards
    const deferredInput = useDeferredValue(input);

    const slowList = useMemo(() => {
        const tempList = [];
        for (let i = 0; i < 20000; i++) {
            tempList.push(<div key={i}>{deferredInput}</div>);
        }
        return tempList;
    }, [deferredInput])

    
    // this is just to log the example of how the deferred value changes only after some time that the real value "input" has not changed  
    // useEffect(() => {
    //     console.log(`input: ${input} deferred: ${deferredInput}`)
    // }, [input, deferredInput])
    
    return slowList;
}


/**
 * thought also for performance issues (like useTransition)
 * same high prio, low prio principle. the deffered value is low prio
 * 
 * good use case: value which changes a lot and often and is not neccessary to make a computation each time a small changes happen,
 * rather after a while (some ms) when value stops chnaging then do the computation
 * 
 * - (i) good when working with values from which you have no control over (like a library), you have no conrol to set its state, 
 * if you did you could use the useTransition hook
 * 
 * As long as there is not some ms gap between each change/ keypress, it wont do anything while value is changing
 */