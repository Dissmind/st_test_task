import React from "react"
import './button.css'

interface ButtonPropTypes {
    children: string,
    onHandler: any
}

export const Button = ({children, onHandler}: ButtonPropTypes) => {
    return (
        <div
            className={'Button'}
            onClick={onHandler}
        >
            {children}
        </div>
    )
}