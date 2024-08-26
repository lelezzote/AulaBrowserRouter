import React from 'react'
import {Link} from "react-router-dom"

export default function Header(){
    return(
    
    <>
    <nav className='navbar'>
    <div className="navbar-header">
    <ul className="navbar-second">
            <img className="logo-nav" src='data:image/png;base64,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'/>
        </ul>
        <ul className="navbar-menu">
            <Link className="nav-link" to="/">
               <li className="navbar-li"> Home </li>
            </Link>
            <Link  className="nav-link" to="/produtos">
               <li> Produtos </li>
            </Link>
            <Link  className="nav-link" to="/ofertas">
               <li> Ofertas  </li>
            </Link>
        </ul>

        <ul className="header">
        <img className='login' src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"/>
        <img className="carrinho" src='https://cdn-icons-png.flaticon.com/128/34/34568.png'/>
        </ul>
    
    </div>
    </nav>
    </>

    

    )
}