import React from 'react'

export default function Input(props) {

    return (
        <input
            id={props.id}
            ref={props.inputRef}
            type={props.type}
            min={props.min}
            step={props.step}
            className={props.className}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
    )
}