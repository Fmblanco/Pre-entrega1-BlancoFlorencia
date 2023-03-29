import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Tienda Boah</h1>

        <nav>
            <ul>
                <li>Home</li>
                <li>Conjuntos</li>
                <li>Bodies</li>
                <li>Bombachas</li>
                <li>Pijamas</li>
                <li>Tabla de talles</li>
 
            </ul>
        </nav>
      

        <CartWidget/>

    </header>





  )
}

export default NavBar