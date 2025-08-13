// src/components/Dropdown.jsx
import { useState } from 'react';
import './dropdown.css';

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}>⌃</span>
      </div>
      {isOpen && <div className="dropdown-content"><p>{content}</p></div>}
    </div>
  );
}

export default Dropdown;

