import React, { useState } from 'react'
import './css/Elements.css';

interface F{
    funcL:React.MouseEventHandler<HTMLButtonElement>;
    funcR:React.MouseEventHandler<HTMLButtonElement>;
}

const Buttons = ({funcL, funcR}:F) =>{
    return(
        <div id='console'>
            <button className='move' id='prev' onClick={funcL}>{'⮜'}</button>
            <button className='round'>1</button>
            <button className='round'>2</button>
            <button className='move' id='next' onClick={funcR}>{'⮞'}</button>
        </div>
    )
}

export default Buttons