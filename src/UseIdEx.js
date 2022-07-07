import React from 'react'
import { Email } from './UseIdEx-Email'

export const UseIdEx = () => {
    return (
        <>
            <Email />
            <article style={{ marginBlock: "1rem"}}>
            lalalad als dlkd df hsdf hf fkjh h fkjdhflkdjh f  dfkdjsfh ksdjhf dkjfh dklf  dhf kjdfh k skfdh ssdf.
            </article>
            <Email />
        </>
    )
}

/** 
 * -> here we have a component twice, which means each one has the same id
 * in this case if we click either one it will just reference one of them
 * 
 * Solution 1 generate each component with a random id, therefore both have different ids 
 * Solution 2 use the useId() hook! ... its cleaner
 */