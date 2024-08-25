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
            <Link to="/ofertas">
               <li> Oferta </li>
            </Link>
        </ul>
        <ul className="navbar-second">
            <img className="carrinho" src='https://cdn-icons-png.flaticon.com/128/34/34568.png'/>
        </ul>
        <ul>
        <img className='login' src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"/>
        </ul>
    
    </div>
    </nav>
    </>

    

    )
}