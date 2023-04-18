import React, { useEffect, useState } from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  const [categoria, setCategoria] = useState ("");
  useEffect( () =>{
    document.title =`${categoria}`
  },[categoria])

  const handlerClick = (categoria) => {
    setCategoria(categoria);
  }

  return (
    <header>
        <Link className='titulo' to ={"/"}>
          <h1>Tienda Boah</h1>
        </Link>
        <nav>
            <ul>
                <li>
                  <NavLink onClick={() => handlerClick ('Home')} className="titulo" to={"/"}>
                    Home
                  </NavLink></li>
                <li>
                  <NavLink onClick={() => handlerClick ('Conjuntos')} className="titulo" to={`/categoria/1`}> 
                    Conjuntos
                  </NavLink></li>
                <li>
                  <NavLink onClick={() => handlerClick ('Bodies')} className="titulo" to={`/categoria/2`}> 
                    Bodies
                  </NavLink></li>
                <li>
                  <NavLink onClick={() => handlerClick ('Bombachas')} className="titulo" to={`/categoria/3`}> 
                  Bombachas
                  </NavLink>
                </li>
            </ul>
        </nav>
      

        <CartWidget/>

    </header>
  )
}

export default NavBar