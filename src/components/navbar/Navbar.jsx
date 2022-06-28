import "./navbar.css"
import logo from "../../images/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo1">
          <img src={logo} alt="" className="logo" style={{width: "100px", height: "100px"}} />
        </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar