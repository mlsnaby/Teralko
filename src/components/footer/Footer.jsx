import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        
        <ul className="fList">
          <li className="fListItem">Société </li>
          <li className="fListItem">A propos de teralko </li>
          <li className="fListItem">Partenariats </li>
          <li className="fListItem">Accedez à l'extranet</li>
          <li className="fListItem">Publicité</li>
          <li className="fListItem">Newsletter</li>
          <li className="fListItem">Blog</li>
          <li className="fListItem">Vlog</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Condition et politique </li>
          <li className="fListItem"></li>
          <li className="fListItem">Conditions générales de ventes(CGV) </li>
          <li className="fListItem"> </li>
          <li className="fListItem">Conditions générales d'utilisation </li>
          <li className="fListItem"> </li>
          <li className="fListItem">Declaration sur les cookies </li>
          <li className="fListItem"> </li>
          <li className="fListItem">Confidentialité et protection des donnees</li>
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
