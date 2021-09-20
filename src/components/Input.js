import React from 'react'
import './all.css'

export default function Input({result, text}) {
    return (
        <div className='input'>
            <div className="result">
            <h1>{result}</h1>
            </div>

            <div className="text">
            <h3>{text}</h3>
            </div>
            
        </div>
    )
}
