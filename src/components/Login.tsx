import React, { BaseSyntheticEvent, useState } from 'react'
import './css/Elements.css';








interface Elem{
}

const Login = ({}:Elem) =>{
    
    
            
    

    const accedi = (e : BaseSyntheticEvent) =>{
      e.preventDefault()
      var xhr = new XMLHttpRequest();
      var email = document.getElementById('username') as HTMLInputElement | null;
      var password = document.getElementById('password') as HTMLInputElement | null;
      
      
      xhr.open('GET', 'http://localhost:80/blog/uploader.php?email='+email?.value+'&password='+password?.value, true);
      xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:80/blog/uploader.php")
      xhr.send();
      xhr.onload = () => {
        console.log(xhr.response)
      }
      xhr.onerror = function() { // only triggers if the request couldn't be made at all
        alert(`Network Error`);
      };
    }

    return(
        <div id='bodyLogin'>
           <div id='formLogin'>
                <article>
                    <h3>{/*titolo*/}Login</h3>
                    <input type="text" id='username'></input>
                    <input type="password" id='password'></input>
                    <input type="button" id='buttonLogin' onClick={accedi}></input>
                </article>
            </div> 
        </div>
        
    )
}

export default Login
