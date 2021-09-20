import React from 'react'
import './all.css'

export default function Button({symbol ,key, name,handleClick, color}) {
    return (
        <div
        className="symbol"
        onClick={() => handleClick(symbol)}
        style={{backgroundColor: color}}
        key={key}
        name={name}
        >
            {symbol}
        </div>
    )
}
