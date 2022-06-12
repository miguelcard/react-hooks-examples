import React, { useState, useEffect } from "react";
import UseEffectEx2 from "./UseEffectEx2";

export const UseEffectEx = () => {

    const [resource, setResource] = useState("users")
    const [jsonResponse, setJsonResponse] = useState([])// just to print the json result

    useEffect(() => {
        // this runs whenever a change happens in any of the variables given in the array of the 2nd argument

        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(json => setJsonResponse(json))
            console.log('api called');
            return () => {
                //this gets run first (than the code above) to cleanup whatever we did last time!
                // examples to do here, -> if above subscribes you to API, here unsubscribe you from an API
                // -> remove event listeners
                console.log("return from use effect, this  was called before the api called");
            }
    }, [resource])

    return (
        <div>
            <button onClick={() => { setResource("users") }}>users</button>
            <button onClick={() => { setResource("comments") }}>comments</button>
            <button onClick={() => { setResource("posts") }}>posts</button>
            <p>{resource}:</p>
            {jsonResponse.map(obj => {
            return <pre>{JSON.stringify(obj)}</pre>
            })}
            <UseEffectEx2 />
        </div>
    )
}

export default UseEffectEx;

/**
 * Notes: use useEffect anytime that you want to have a side effect occur. Than can be:
 * When component Mounts, Unmounts, a variable changes, state changes,  props change, anything changes
 */