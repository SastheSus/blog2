import React, { useState } from 'react'
import './css/Elements.css';
import { RowDataPacket } from "mysql2";
import { OkPacket } from "mysql2";

// get the client
import mysql from 'mysql2';

// create the connection to database






interface Elem{
}

const Login = ({}:Elem) =>{
    /*
    try{
        
        const mysql = require('mysql2');
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'articoli'
          });
          
          
          // with placeholder
          connection.query(
            'SELECT * FROM `table` WHERE `id` = ?',
            [1],
            function(err, results) {
              console.log(results);
            }
          );
    }
    catch(error){
       console.log('Napoli'+error) 
    }*/

    const accedi = () =>{
        
    }

    return(
        <div id='bodyLogin'>
           <div id='formLogin'>
                <article>
                    <h3>{/*titolo*/}Login</h3>
                    <input type="text" id='username'></input>
                    <input type="password" id='password'></input>
                    <input type="button" id='buttonLogin'></input>
                </article>
            </div> 
        </div>
        
    )
}

export default Login
