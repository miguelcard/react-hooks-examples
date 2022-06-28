import React, { useState, useReducer } from 'react'
import { UseReducerEx2Todo } from './UseReducerEx2Todo'

export const UseReducerEx2 = () => {
    const [name, setName] = useState('')
    const [todos, dispatch] = useReducer(reducer, [])

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: 'add-todo', payload: { name: name } }) // payload are the variables we need in the reducer function, we send all in the action object
        setName('')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </form>
            {todos.map(t => {
                // return (
                    //     // you can add a new TODO component here, it seems that one always passes a 'key' prop with the id
                    //     // (I) also pass the 'dispatch' function as a prop
                    //     <>
                    //         <h2>{t.name} | {t.done ? 'done (/)' : 'open ( )'}</h2>
                    //         <button onClick={() => dispatch({ type: 'set-done', payload: { id: t.id } })}>
                    //             {t.done ? 'Mark Undone' : 'Mark Done!'}
                    //         </button>
                    //     </>
                    // )
                    return <UseReducerEx2Todo key={t.id} todo={t} dispatch={dispatch}/>
            })}
        </>
    )
}

function reducer(todos, action) {
    switch (action.type) {
        case 'add-todo':
            return [...todos, newTodo(action.payload.name)]
        case 'set-done':
            return todos.map(t => {
                return t.id === action.payload.id ? { ...t, done: !t.done } : t
            })
        case 'delete':
            return todos.filter(t => t.id !== action.payload.id);
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, done: false }
}

export default UseReducerEx2;

/**
 * Better example: create a TODO list
 * -> for subcomponents pass the dispatch fcn as a Prop
 * -> Usefulness: using useReducer you dont need a bunch of "handle..." methods (like handleAdd, handleDelete, ...),
 *  instead you call just 'dispatch' and the reducer will take care of the appropiate actions
 * -> also you dont need to pass down a bunch of fctions as Props to sub-Components, only the dispatch function!
 */