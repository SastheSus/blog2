import React, { useState } from 'react'
import './css/Elements.css';

interface Elem{
    titolo:string;
    foto:string;
    testo:string;
}

const Art = ({titolo,foto,testo}:Elem) =>{
    return(
        <div className='top' id='1'>
                <h3 id='title'>{titolo}</h3>
                <div id='immagine'>
                    <img id='imgArt' src={foto} alt="leopard" />
                </div>
                <p className='descArtSec'>{testo}</p>
        </div>
    )
}

export default Art
