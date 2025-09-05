import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./error";
import Slideshow from "../components/slideshow";
import Dropdown from "../components/dropdown";
import "./logement.css";
import starActive from "../assets/star-active.png";
import starInactive from "../assets/star-inactive.png";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not found");
        }
        return res.json();
      })
      .then((data) => {
        setLogement(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (!logement) return <ErrorPage />;

  const rating = parseInt(logement.rating);
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? starActive : starInactive
  );

  return (
    <div className="logement-container">
      {/* Slideshow avec toutes les images */}
      <Slideshow pictures={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-host-rating">
          <div className="host-info">
            <p className="host-name">{logement.host.name}</p>
            <img
              className="host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="rating">
            {stars.map((star, index) => (
              <img
                key={index}
                src={star}
                alt={index < rating ? "star filled" : "star empty"}
                className="star-image"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="logement-dropdowns">
        <Dropdown title="Description" content={logement.description} />
        <Dropdown
          title="Équipements"
          content={
            <ul className="equipments-list">
                {logement.equipments.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;
