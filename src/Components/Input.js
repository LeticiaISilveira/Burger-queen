import React from 'react'

function Input(props) {

    return (
        <input ref={props.value} type={props.type} class={props.className} />
    )

}


export default Input