import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="logo">🚀 Meu Site</div>
      <nav>
        <ul ref={menuRef} className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>Sobre Nós</Link></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`line ${menuOpen ? "active" : ""}`}></span>
        <span className={`line ${menuOpen ? "active" : ""}`}></span>
        <span className={`line ${menuOpen ? "active" : ""}`}></span>
      </div>
    </header>
  );
}

export default Navbar;