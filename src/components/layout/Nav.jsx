import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="nav">
    <ul>
        <li><NavLink to="/inicio">Inicio</NavLink></li>
        <li><NavLink to="/articulos">Articulos</NavLink></li>
        <li><NavLink to="/crear-articulos">Crear</NavLink></li>
        <li><a href="#">Contacto</a></li>
    </ul>
</nav>
  )
}

export default Nav
