import React, {useId} from 'react'

export const Email = () => {
    const id = Math.random()

    const id2 = useId(); 

    return (
        <>
{/* Problem */}
            <label htmlFor='email'>Email Hardcoded ID: </label>
            <input id='email' type="email" />

{/* Sol 1 */}
            <label htmlFor={id}>Email Rand ID: </label>
            <input id={id} type="email" />
            
{/* Sol2 */}
            <label htmlFor={`${id2}-email`}>Email with useID(): </label>
            <input id={`${id2}-email`} type="email" />
            <br/>
            <label htmlFor={`${id2}-name`}>Name: </label>
            <input id={`${id2}-name`} type='text'/>
        </>
    )
}

/**
 * Solution 1 generate each component with a random id, therefore both have different ids 
 * Solution 2 use the useId() hook! ... its cleaner, returns a unique id for each component, 
 * but the id for each component render remains constant (inmportant for Server side / client side rendering cuz consistent ids)
 * 
 * Notice we dont have to create another id with useId() to differentiate the name and the email, we can just edit the 
 * 1 generated to distinguish between both.  This equals better performance as we are not calling useId() twice
 */