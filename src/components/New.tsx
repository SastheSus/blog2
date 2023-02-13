import React, { useState } from 'react'
import './css/Elements.css';

interface Elem{
    titolo:string;
    foto:string;
    testo:string;
}

const New = ({titolo,foto,testo}:Elem) =>{
    return(
        <div id='new'>
            <article>
                <h3>{titolo}</h3>
                <div id='immagine'>
                    <img id='imgArt' src={foto} alt="leopard" />
                </div>
                <p className='descArtSec'>{testo}</p>
            </article>
        </div>
    )
}

export default New
