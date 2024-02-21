import NavProfle from "../nav-profle/NavProfle";
import Logo from "../../assets/images/logo.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container } from "../../utils/Utils";
import "./Nav.scss";


const Nav = () => {
  const [acount, setAcount] = useState(false)
  const {pathname} = useLocation();

  useEffect(()=>{
    if(localStorage.getItem("token")){
      setAcount(true)
    }
    else{
      setAcount(false)
    }
  },[pathname])
  return pathname.includes("/auth") ?  null : (
    <nav>
     <Container>
     <div className="nav__wrapper">
        <div className="nav__logo">
          <Link to="/"><img src={Logo} alt="Logo of Website" /></Link>
        </div>
        <ul className="nav__menu">
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"/"}>Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"/doctor-list"}>Doctors</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"/about"}>About</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"/article"}>Article</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"/service"}>Services</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? "nav__link nav__link--active" : "nav__link"} to={"/contact-us"}>Contact Us</NavLink></li>
        </ul>
        <div className="nav__action">
          <Link to={"/auth/sign-up"}  className="start-link">Get Started</Link>
        </div>
      </div>
     </Container>
    </nav>
  )
}

export default Nav