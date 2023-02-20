import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './css/Elements.css';

interface F{
    func:React.MouseEventHandler<HTMLButtonElement>;
}

const Header = ({func}:F) =>{
    return(
        <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Editor">Editor</Link></li>
            <li></li>
            <li id='logli'>
                <Link id='login'to="/Login">Login</Link>{/* <button  onClick={Link }>Login</button>*/}
            </li>
        </ul>
        <Outlet/>
        </div>
    )
}

export default Header