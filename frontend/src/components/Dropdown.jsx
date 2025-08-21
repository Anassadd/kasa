import { useState } from "react";
import arrow from "../assets/arrow.png";
import "./dropdown.css";

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img
          src={arrow}
          alt="flèche"
          className={`dropdown-arrow ${isOpen ? "up" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="dropdown-content">
          {content}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
