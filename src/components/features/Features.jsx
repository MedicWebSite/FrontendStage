import "./Features.scss"
import Heppy from "../../assets/images/heppy-logo.png";
import Calendar from "../../assets/images/calendar-logo.png"
import Search from "../../assets/images/search-logo.png"

const Features = () => {
  return (
    <div>
      <h2 className="features-title">3 Easy Steps and Get Your Solution</h2>
      <div className="features-cards">
        <div className="features__card">
          <div className="card-logo">
            <img src={Search} alt="" />
          </div>
          <h3 className="card-title">Find best doctor’s</h3>
          <p className="card-text">Find your doctor easily with a minimum of effort. We've kept everything organised for you.</p>
        </div>
        <div className="features__card">
          <div className="card-logo">
            <img src={Calendar} alt="" />
          </div>
          <h3 className="card-title">Find best doctor’s</h3>
          <p className="card-text">Find your doctor easily with a minimum of effort. We've kept everything organised for you.</p>
        </div>
        <div className="features__card">
          <div className="card-logo">
            <img  src={Heppy} alt="" />
          </div>
          <h3 className="card-title">Find best doctor’s</h3>
          <p className="card-text">Find your doctor easily with a minimum of effort. We've kept everything organised for you.</p>
        </div>
      </div>
    </div>
  )
}

export default Features