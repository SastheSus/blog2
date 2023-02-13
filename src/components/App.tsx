import React, { useState } from 'react'
import articleImg from './assets/react.svg'
import './css/App.css'
import $ from "jquery"
import ReactDOM from 'react-dom';

import Art from "./Art";
import Header from "./Header";
import New from "./New";
import Princ from "./Princ";
import Footer from "./Footer";
import Buttons from "./Buttons";

import artImg from "./img/leopard.jpg";
import artImg2 from "./img/abrams.jpeg";
import artImg3 from "./img/Mi17.jpg";
import artImg4 from "./img/BM-21_Grad.jpg";
import artImg5 from "./img/t-14.jpg";
import artImg6 from "./img/t-72.jpg";
import artImg7 from "./img/abrams.jpeg";
import artImg8 from "./img/abrams.jpeg";

const App: React.FC = () => {
const [count, setCount] = useState(0)
const [name, setName] = useState("");
const [result, setResult] = useState("");
const oArt = document.getElementById('container');
const art = document.getElementById('1');
const titoloMain = 'Articolo più visto';
const titoloNew = 'Articolo recente';
const titoloArt = 'Articolo';
const testo = "Breve descrizione dell'argomento dell'articolo";
console.log("pino"+oArt!=null+' ')
console.log("pino"+art!=null+' ')
if(oArt!=null && art!=null){
    console.log(' '+art.offsetHeight+' '+oArt.offsetHeight)
    try {
        art.style.setProperty('height',oArt.offsetHeight.toString())
    } catch (error) {
        console.log(error)
    }
    
    console.log(' '+art.offsetHeight+' '+oArt.offsetHeight)
}else{
    console.log("pino")
}
//@ts-ignore
const handleChange = (e) => {
    setName(e.target.value);
};
//@ts-ignore
const handleSumbit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
            setResult(data);
        },
    }); 
};

const pronto = () =>{
    const oArt = document.getElementById('container');
    const art = document.getElementById('1');

    if(oArt != null && art != null){
        art.style.setProperty('width',''+oArt.offsetWidth/3)
    }
}

const prevArt = (event: React.MouseEvent<HTMLElement>) =>{
    const oArt = document.getElementById('container');
    const art = document.getElementById('1');

    if(oArt != null && art != null){
        oArt.scrollBy({
            left: art.offsetWidth*(-3)-(oArt.offsetWidth/100*15),
            behavior : "smooth"
        })
    }
}


const nextArt = (event: React.MouseEvent<HTMLElement>) =>{
    const oArt = document.getElementById('container');
    const art = document.getElementById('1');

    if(oArt != null && art != null){
        oArt.scrollBy({
            left: art.offsetWidth*3+(oArt.offsetWidth/100*15),
            behavior : "smooth"
        })
    }
}

/*const fill = () =>{
    try {
        $pdo = new PDO("mysql:host=localhost; dbname=minghie", "root", "");
        $query = $pdo->prepare("SELECT * FROM dipartimenti ");
        $query->execute();
    } catch (error) {
        
    }
    
}*/

return (
    <div className="App" onLoad={pronto}>
        {/*<form action="http://localhost/phptsx/server.php" method="post" onSubmit={(event) => handleSumbit(event)}>
        <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" value={name} onChange={(event) => handleChange(event)}/>
            <br/>
            <button type="submit">Submit</button>
        </form>
        <h1>{result}</h1>*/}
        
        {/* <Header func={login}/>*/}
        <div id='content' >
            <div id='introduction'>
                <h1>Benvenuti</h1>
                <h3>Qui' puoi trovare notizie e curiosita' riguardo il mondo dei veicoli militari e i loro impieghi sul campo, recenti e passati.</h3>
            </div>
            <div id='articles'>
                <New titolo={titoloNew} foto={artImg3} testo={testo}/>
                <Princ titolo={titoloMain} foto={artImg2} testo={testo}/>
                <div id='otherArticles'>
                    <h2>Altri articoli</h2>
                    <div id='container'>
                        <Art titolo={titoloArt} foto={artImg3} testo={testo}/>
                        <Art titolo={titoloArt} foto={artImg4} testo={testo}/>
                        <Art titolo={titoloArt} foto={artImg5} testo={testo}/>
                        <Art titolo={titoloArt} foto={artImg6} testo={testo}/>
                        <Art titolo={titoloArt} foto={artImg} testo={testo}/>
                        <Art titolo={titoloArt} foto={artImg} testo={testo}/>
                    </div>
                </div>
                <Buttons funcL={prevArt} funcR={nextArt}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default App
