import React, { useState } from 'react'
import './css/Elements.css';

interface Elem{
    titolo:string;
    foto:string;
    testo:string;
}

const Main = ({titolo,foto,testo}:Elem) =>{
    return(
        <div id='main'>
            <article>
                <h3>{titolo}</h3>
                <p className='descArtSec'>{testo}</p>
                <div id='immagine'>
                    <img id='imgArt' src={foto} alt="leopard" />
                </div>
            </article>
        </div>
    )
}

export default Main
