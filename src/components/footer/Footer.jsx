import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    
    <div className="footer">
      <div className="fLists">
        
        <ul className="fList">
         <li className="fListItem"><Link to={"/societe"} >Société </Link></li>
          <li className="fListItem"><Link to={"/apropos"} >A propos de teralko</Link> </li>
          <li className="fListItem"><Link to={"/societe"} >Partenariats </Link></li>
          <li className="fListItem"><Link to={"/societe"} >Accedez à l'extranet</Link></li>
          <li className="fListItem"><Link to={"/societe"} >Publicité</Link></li>
          <li className="fListItem"><Link to={"/societe"} >Newsletter</Link></li>
          <li className="fListItem"><Link to={"/societe"} >Blog</Link></li>
          <li className="fListItem"><Link to={"/societe"} >Vlog</Link></li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><Link to={"/conditionpolitique"} >Condition et politique</Link> </li>
          <li className="fListItem"></li>
          <li className="fListItem"><Link to={"/conditionGdevente"} >Conditions générales de ventes(CGV) </Link></li>
          <li className="fListItem"> </li>
          <li className="fListItem"><Link to={"/societe"} >Conditions générales d'utilisation</Link> </li>
          <li className="fListItem"> </li>
          <li className="fListItem"><Link to={"/societe"} >Declaration sur les cookies </Link></li>
          <li className="fListItem"> </li>
          <li className="fListItem"><Link to={"/societe"} >Confidentialité et protection des donnees</Link></li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Assistance </li>
          <li className="fListItem">FAQ</li>
          <li className="fListItem">Modifier / annuler votre reservation </li>
          <li className="fListItem">Aide aux partenaires </li>
          <li className="fListItem">Contacter le services client</li>
          <li className="fListItem">Bon de reduction Teralko </li>
        </ul>
        
      </div>
      <div className="fText">Copyright © 2022 Teralko</div>
    </div>
  );
};

export default Footer;
