import "./futureProprietes.css";
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
// import img5 from "../../images/img5.jpg"

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src={img1}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Dakar</span>
        <span className="fpPrice">Commençant par 120.000CFA</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img2}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Comfort Suites</span>
        <span className="fpCity">Saint Louis</span>
        <span className="fpPrice">Commençant par 100.000 CFA</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img3}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hôtel des Quatre Saisons</span>
        <span className="fpCity">Ziguichor</span>
        <span className="fpPrice">Commençant par 110.000 CFA</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src={img4}
          alt=""
          className="fpImg"
        />
        <span className="fpName">Confort</span>
        <span className="fpCity">Matam</span>
        <span className="fpPrice">Commençant par</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
