import React from 'react'

export const UseReducerEx2Todo = ({ todo, dispatch }) => {
    return (
        <>
            <h2>{todo.name} | {todo.done ? 'done (/)' : 'open ( )'}</h2>
            <button onClick={() => dispatch({ type: 'set-done', payload: { id: todo.id } })}>
                {todo.done ? 'Mark Undone' : 'Mark Done!'}
            </button>
            <button onClick={() => dispatch({ type: 'delete', payload: { id: todo.id } })}>Delete</button>
        </>
    )
}
