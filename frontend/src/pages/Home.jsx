import { useState, useEffect } from "react";
import Banner from "../components/banner";
import Card from "../components/card";
import bannerHome from "../assets/banner-home.jpg"; 
import "./home.css";

const Home = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setLogements(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des logements :", error)
      );
  }, []);

  return (
    <div className="home-container">
      <Banner image={bannerHome} title="Chez vous, partout et ailleurs" className="home-banner" />

      <section className="logement-list">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;


