import "./navbar.css"
import logo from "../../images/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {

  // list of items
const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];



  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to={'/'}>
          <span className="logo1" >
          <img src={logo} alt="" className="logo" style={{width: "100px", height: "100px"}} />
        </span>
      </Link>
          
      
        <div className="navItems">
        {list.map(menu=>  menu.name)}
          <button className="navButton">Inscription</button>
          <button className="navButton">Connexion</button>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar