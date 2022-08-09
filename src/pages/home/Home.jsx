import Future from "../../components/future/Future";
import FutureProprietes from "../../components/futureProprietes/FutureProprietes";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Partenaire from "../../components/listPartenaire/Partenaire";
import Email from "../../components/mailList/Email";
import Navbar from "../../components/navbar/Navbar";
import ListProprietes from "../../components/listProprietes/ListProprietes";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        {/* <Featured/> */}
        <h1 className="homeTitle">Future</h1>
        <ListProprietes/>
        {/* <h1 className="homeTitle">Type de propriété</h1>
        <ListProprietes/> */}
        <h1 className="homeTitle">Explorer le Sénégal</h1>
        
        <Future/>
        <h1 className="homeTitle">Les maisons adorable</h1>
        <FutureProprietes/>
        <h1 className="homeTitle" style={{marginTop: "20px"}}>Nos Partenaires</h1>
        <Partenaire/>

        <Email/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
