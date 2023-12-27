import "./Nav.scss"
import Logo from "../../assets/images/logo.svg"
import { NavLink } from "react-router-dom"
import { useState } from "react"
const Nav = () => {
  return (
    <nav>
      <div className="nav__wrapper">
        <div className="nav__logo">
          <img src={Logo} alt="Logo of Website" />
        </div>
        <ul className="nav__menu">
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"/"}>Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"about"}>About</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"article"}>Article</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"service"}>Services</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"/"}>Contact Us</NavLink></li>
        </ul>
        <div className="nav__action">
          <button>Get Started</button>
      
        </div>
      </div>
    </nav>
  )
}

export default Nav