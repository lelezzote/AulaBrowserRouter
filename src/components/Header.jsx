import React from 'react'
import {Link} from "react-router-dom"

export default function Header(){
    return(
    
    <>
    <nav className='navbar'>
    <div className="navbar-header">
    
        <ul className="navbar-menu">
            <Link to="/">
               <li className="navbar-li"> Home </li>
            </Link>
            <Link to="/produtos">
               <li> Produtos </li>
            </Link>
            <Link to="/oferta">
               <li> Oferta </li>
            </Link>
        </ul>
    
    </div>
    </nav>
    </>

    

    )
}