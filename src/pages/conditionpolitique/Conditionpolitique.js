import "./conditionpolitique.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Email from "../../components/mailList/Email";


const Conditionpolitique = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
            />
            <div className="sliderWrapper">
             image {/* <img src={photos[slideNumber].src} alt="" className="sliderImg" /> */}
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">texte</button>
          <h1 className="hotelTitle">Condition et politique</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              POLITIQUE DE CONFIDENTIALITÉ
              La protection des données à caractère personnel est un sujet très préoccupant de nos jours et nous en sommes conscients. 
              Chez Teralko.com, nous respectons votre vie privée et par conséquent, nous nous conformons rigoureusement aux lois et 
              réglementations en vigueur lors du traitement de vos données.
              Nous avons pris des mesures techniques et organisationnelles adaptées pour empêcher le traitement illicite de données 
              à caractère personnel ainsi que leur perte et destruction.
              Nous vous informons toujours sur la façon dont nous collectons et utilisons les données.
              Si vous souhaitez vous opposer en tout ou en partie à la collecte, au traitement ou à l’utilisation de vos données 
              à caractère personnel, veuillez adresser votre opposition par e-mail ou par courrier à l’interlocuteur suivant :<br/><br/>
              <b>TERALKO SUARL</b><br/>
              <b>Boucotte - Ouest</b><br/>
              <b>Ziguinchor - Senegal</b><br/>
              <b>reclamation@teralko.com</b><br/>
              <b>Nos coordonnées se trouvent également dans nos mentions légales.</b><br/><br/><br/>

              <b>Données traitées par nos soins</b><br/>
              TERALKO SUARL doit recevoir ou collecter des informations pour pouvoir exploiter, proposer, améliorer, personnaliser, 
              à des fins de gestion des réservations et des clients et pour mener des actions commerciales et des enquêtes de satisfaction. 
              Cela se produit notamment lorsque vous utilisez ou accédez à notre Plateforme. Les types d’informations que nous recevons 
              et collectons dépendent de la manière dont vous utilisez nos services.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <Email />
        <Footer />
      </div>
    </div>
  );
};

export default Conditionpolitique;
