import React from 'react'
import { NavLink } from 'react-router-dom'
import header from './css/Header.module.css'

const Header = () => {
  return (
    <header>
      <nav className={header.nav}>
        <ul>
          <NavLink className={header.link} to="/" end>Home</NavLink>
          <NavLink className={header.link} to="sobre">Sobre</NavLink>
          <NavLink className={header.link} to="contato">Contato</NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header