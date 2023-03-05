import React, { useState } from 'react'
import './css/Elements.css';
import { XMLHttpRequest } from 'xmlhttprequest-ts';








interface Elem{
}

const Login = ({}:Elem) =>{
    
    
            
    

    const accedi = () =>{
      var xhr = new XMLHttpRequest();
      var email = document.getElementById('username') as HTMLInputElement | null;
      
      xhr.onload = () => {
        console.log('pino'+xhr.responseText)
      }
      xhr.open('GET', './uploader.php?email='+email?.value);
      xhr.send();
      xhr.onerror = function() { // only triggers if the request couldn't be made at all
        alert(`Network Error`);
      };
    }

    return(
        <div id='bodyLogin'>
           <div id='formLogin'>
                <article>
                    <h3>{/*titolo*/}Logino</h3>
                    <input type="text" id='username'></input>
                    <input type="password" id='password'></input>
                    <input type="button" id='buttonLogin' onClick={accedi}></input>
                </article>
            </div> 
        </div>
        
    )
}

export default Login
