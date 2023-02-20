import React, { useState } from 'react'
import './css/Elements.css';

const Footer = () =>{
    return(
        <footer>
            <div className='foot' id='crediti'>
                <h5>Author:</h5>
                <h5>Michele Bardotti</h5>
            </div>
            <div className='foot' id='contatti'>
                <h5>Contatti:</h5>
                <a href= "mailto:michele.bardotti.2004@calvino.edu.it">michele.bardotti.2004@calvino.edu.it</a>
            </div>
            <div className='foot' id='links'>
                <h5>Links:</h5>
                <a>https://www.esempio.com</a>
            </div>
        </footer>
    )
}

export default Footer