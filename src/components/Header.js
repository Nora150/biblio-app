import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate(); // Hook pour naviguer

  const handleNavigation = (path) => {
    navigate(path);
    document.getElementById("closeOffcanvas").click(); // Ferme le menu
  };

  return (
    <header style={{ backgroundColor: "#0056b3", padding: "10px 0" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          📚 Bibliothèque
        </Link>

        {/* Menu Desktop */}
        <div className="d-none d-md-flex" style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={linkStyle}>Accueil</Link>
          <Link to="/library" style={linkStyle}>Bibliothèque</Link>
          <Link to="/about" style={linkStyle}>À propos</Link>
        </div>

        {/* Boutons Desktop */}
        <div className="d-none d-md-flex" style={{ display: "flex", gap: "10px" }}>
          <Link to="/register"><button style={buttonStyle}>Inscription</button></Link>
          <Link to="/login"><button style={loginButtonStyle}>Connexion</button></Link>
        </div>

        {/* Bouton burger pour mobile */}
        <button
          className="d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          style={{
            border: "none",
            background: "transparent",
            color: "white",
            fontSize: "24px",
          }}
        >
          ☰
        </button>
      </nav>

      {/* Menu Off-Canvas pour mobile */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        style={{ backgroundColor: "#0056b3", width: "70%" }}
      >
        <div className="offcanvas-header">
          <button
            id="closeOffcanvas"
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ listStyle: "none", padding: 0 }}>
            <li><button className="nav-link text-white" onClick={() => handleNavigation("/")} style={mobileLinkStyle}>Accueil</button></li>
            <li><button className="nav-link text-white" onClick={() => handleNavigation("/library")} style={mobileLinkStyle}>Bibliothèque</button></li>
            <li><button className="nav-link text-white" onClick={() => handleNavigation("/about")} style={mobileLinkStyle}>À propos</button></li>
          </ul>

          {/* Boutons mobile */}
          <div className="d-flex flex-column align-items-center mt-3">
            <Link to="/register"><button className="btn btn-outline-light w-100 mb-2" style={buttonStyle}>Inscription</button></Link>
            <Link to="/login"><button className="btn text-white w-100" style={loginButtonStyle}>Connexion</button></Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const linkStyle = { color: "white", textDecoration: "none", fontSize: "18px", fontWeight: "bold" };
const buttonStyle = { backgroundColor: "transparent", border: "2px solid white", padding: "8px 15px", borderRadius: "10px", color: "white", fontSize: "16px", fontWeight: "bold" };
const loginButtonStyle = { backgroundColor: "#ffcc00", color: "#0056b3", fontWeight: "bold", padding: "8px 15px", borderRadius: "10px", fontSize: "16px", cursor: "pointer" };
const mobileLinkStyle = { fontSize: "20px", fontWeight: "bold", background: "none", border: "none", color: "white", textAlign: "left", width: "100%", padding: "10px 0" };

export default Header;
