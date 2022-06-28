import "./featured.css";
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
import img5 from "../../images/img5.jpg"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src={img5}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dakar</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src={img2}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ziguinchor</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src={img3}
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>st Louis</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
