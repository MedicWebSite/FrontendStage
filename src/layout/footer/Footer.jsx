import "./Footer.scss"
import Logo from "../../assets/images/logo.svg"
import { FaInstagramSquare , FaFacebookSquare,  FaYoutube, FaTwitter  } from "react-icons/fa";
 


const Footer = () => {
  return (
    <>
    <footer className="footer">
    <div className="menu-wrapper">
    <ul className="menu">
        <li><img src={Logo} alt="" /> </li>
        <li className="menu-item">Metairie, 3689  Bassel Street, LA, Louisiana</li>
        <li className="menu-item">Contact us: 225-788-5489</li>
        <li><div className="icon-wrapper"><FaFacebookSquare className="icon" /> <FaInstagramSquare className="icon" /> <FaYoutube className="icon" />  <FaTwitter className="icon"/> </div></li>
      </ul>
      <ul className="menu">
        <li className="title">Category</li>
        <li className="menu-item">Home</li>
        <li className="menu-item">About</li>
        <li className="menu-item">Services</li>
        <li className="menu-item">Reviews</li>
        <li className="menu-item">Article</li>
      </ul>
      <ul className="menu">
        <li className="title">About</li>
        <li className="menu-item">Partners</li>
        <li className="menu-item">Careers</li>
        <li className="menu-item">Press</li>
        <li className="menu-item">Community</li>
      </ul>
      <ul className="menu">
        <li className="title">Subscribe newsletter</li>
        <li className="menu-item">Sign up for tips, new destinations, and exclusive promos.</li>
        <li><input type="email" placeholder="Enter your email" /></li>
        <li><button>Subcribe</button></li>
      </ul>
    </div>
      

    <div className="copyright"><p className="p">© 2021 Healthcare - All rights reserved.</p>
   <p className="privacy"><span>Privacy</span>  <span>Security</span>   <span>Terms</span></p>
   </div>
    </footer>
    </>
  )
}

export default Footer