import { useState, useEffect } from 'react'; 
import bannerImage from "../assets/banner-home.jpg";
import Card from "../components/Card"; // ✅ IMPORT DU COMPOSANT
import "./home.css";
import Banner from '../components/Banner';


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
    <Banner image={bannerImage} text="Chez vous, partout et ailleurs"/>

      {/* Liste des logements */}
      <section className="location-grid">
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

