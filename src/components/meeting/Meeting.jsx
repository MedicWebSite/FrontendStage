import "./Meeting.scss"
import Doctor1 from "../../assets/images/meeting_doctor1.png"
import Doctor2 from "../../assets/images/meeting_doctor2.png"
import Doctor3 from "../../assets/images/meeting_doctor3.png"
import Doctor4 from "../../assets/images/meeting_doctor4.png"

import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link } from "react-router-dom"

const Meeting = () => {
  return (
    <div className="meeting-wrapper">
      <div className="meeting__title">
        <h2>Meet Our Certified Online Doctors</h2>
        <p>Our online doctors have an average of 15 years experience and a 98% satisfaction rating, they really set us apart!</p>
      </div>
      <div className="meeting__card-container">
        <div className="meeting-card">
          <div className="image">
            <Link to="/user"><img src={Doctor1} /></Link>

          </div>
          <p>Dr Amanda Linda </p>
          <strong>Dentist Specilist</strong>
          <div className="card__icons">
            <Link><FaFacebook /></Link>
            <Link><AiFillTwitterCircle /></Link>
            <Link><FaFacebook /></Link>
          </div>
        </div>
        <div className="meeting-card">
          <div className="image">
            <img src={Doctor2} />

          </div>
          <p>Dr. Alisa Rahman</p>
          <strong>Carddiologist Specilist</strong>
          <div className="card__icons">
            <Link><FaFacebook /></Link>
            <Link><AiFillTwitterCircle /></Link>
            <Link><FaFacebook /></Link>
          </div>
        </div>
        <div className="meeting-card">
          <div className="image">
            <img src={Doctor3} />

          </div>
          <p>Dr. Anthony Fauci</p>
          <strong>Carddiologist Specilist</strong>
          <div className="card__icons">
            <Link><FaFacebook /></Link>
            <Link><AiFillTwitterCircle /></Link>
            <Link><FaFacebook /></Link>
          </div>
        </div>
        <div className="meeting-card">
          <div className="image">
            <img src={Doctor4} />

          </div>
          <p>Dr. Khalid Abbed</p>
          <strong>Carddiologist Specilist</strong>
          <div className="card__icons">
            <Link><FaFacebook /></Link>
            <Link><AiFillTwitterCircle /></Link>
            <Link><FaFacebook /></Link>
          </div>
        </div>
      </div>
      <button className="explore-btn">Explore All Doctors</button>
    </div>
  )
}

export default Meeting