import React, { useState } from 'react'
import './css/Elements.css';

import img from "./img/abrams.jpeg";

interface Elem{
}

const Editor = ({}:Elem) =>{
    return(
        <div id='editorContainer'>
            <article>
                <div id="ediTitContainer">
                    <h3 id="editorH3">Titolo:</h3>
                    <input id="editorTitolo" type="text"></input>
                </div>
                <input className='editorDescArt'></input>
                <div id='editorImmagine'>
                    <img id='editorImgArt' src="" alt="sample" />
                </div>
                <div id='editorInputs'>
                    <input id="editorInputImg" type="file" accept=".png, .jpg, .jpeg" />
                </div>
            </article>
        </div>
    )
}

export default Editor
