import React from 'react'

function Input(props) {

    return (
        <input type={props.type} class={props.className} onChange={props.onChange} />
    )
        //<input ref={props.value} type
}


export default Input