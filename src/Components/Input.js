import React from 'react'

export default function Input(props) {

    return (
        <input ref={props.value} type={props.type} class={props.className} onChange={props.onChange} />
    )
}