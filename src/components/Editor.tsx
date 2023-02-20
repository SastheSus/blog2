import React, { useState } from 'react'
import './css/Elements.css';

import img from "./img/abrams.jpeg";

interface Elem{
}

const Editor = () =>{

    const invia = (event: React.MouseEvent<HTMLElement>) =>{
        const title = document.getElementById('editorTitolo');
        const img = document.getElementById('editorImgArt');
        const content = document.getElementById('editorInputImg');

        if(title!=null && img!=null && content!=null){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("DAJE ROMA = "+img.innerHTML);
            }
            };
            xmlhttp.open("GET", "uploader.php?title=" + title.innerHTML + "&img=" + img.innerHTML + "&content=" + content.innerHTML, true);
            xmlhttp.send();
        }
        

    }

    return(
        <div id='editorContainer'>
            <article>
                <div id="ediTitContainer">
                    <h3 id="editorH3">Titolo:</h3>
                    <input id="editorTitolo" type="text"></input>
                </div>
                <textarea id='editorDescArt'></textarea>
                <div id='editorImmagine'>
                    <img id='editorImgArt' src="" alt="sample" />
                </div>
                <div id='editorInputs'>
                    <input id="editorInputImg" type="file" accept=".png, .jpg, .jpeg" />
                    <input type="button" onClick={invia}/>
                </div>
            </article>
        </div>
    )
}

export default Editor
