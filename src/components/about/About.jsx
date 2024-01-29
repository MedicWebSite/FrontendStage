import "./About.scss"
import smile from "../../assets/images/smile.png"

const About = () => {
  return (
    <div className="about-wrapper">
        <div className="about-content">
          <h3>It’s time change your 
          life today</h3><button>Book an Appoinment </button>
        </div>

        <img src={smile} className="about-image"  />
            
      </div>
  )
}

export default About