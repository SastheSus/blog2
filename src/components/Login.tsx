import React, { useState } from 'react'
import './css/Elements.css';

interface Elem{
}

const New = ({}:Elem) =>{
    return(
        <div id='bodyLogin'>
           <div id='formLogin'>
                <article>
                    <h3>{/*titolo*/}Login</h3>
                    <input type="text" id='username'></input>
                    <input type="password" id='password'></input>
                </article>
            </div> 
        </div>
        
    )
}

export default New
