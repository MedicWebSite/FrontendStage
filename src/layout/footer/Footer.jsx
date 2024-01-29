import "./Footer.scss"
import Logo from "../../assets/images/logo.svg"
import { FaInstagramSquare, FaFacebookSquare, FaYoutube, FaTwitter } from "react-icons/fa";
import { Container } from "../../utils/Utils";
import { Link, useLocation } from "react-router-dom";



const Footer = () => {
  const {pathname} = useLocation()
  return pathname.includes("/auth") ? null : (
    <footer>
      <Container>
        <div className="footer-wrapper">
          <div className="footer-content">
            <img src={Logo} alt="Logo" />
            <p>Metairie, 3689  Bassel Street, LA, Louisiana</p>
            <p>Contact us: 225-788-5489</p>
            <div className="content-socials">
              <Link className="social-link"><FaFacebookSquare className="icon" /></Link>
              <Link className="social-link"><FaInstagramSquare className="icon" /></Link>
              <Link className="social-link"><FaYoutube className="icon" /></Link>
              <Link className="social-link"><FaTwitter className="icon" /> </Link>
            </div>
          </div>

          <div className="footer__menu-container">
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

          </div>
          <div className="footer__action">
            <strong>Subscribe newsletter</strong>
            <p>Sign up for tips, new destinations, and exclusive promos.</p>
            <input type="email" placeholder="Enter your email" />
            <button className="button">Subcribe</button>
          </div>
        </div>


        <div className="copyright"><p className="p">© 2021 Healthcare - All rights reserved.</p>
          <p className="privacy"><span>Privacy</span>  <span>Security</span>   <span>Terms</span></p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer