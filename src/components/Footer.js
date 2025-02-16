import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(0, 86, 179)", // Bleu foncé
        color: "white",
        padding: "40px 20px",
        marginTop: "50px",
      }}
    >
      {/* Section principale */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* Section Services */}
        <div>
          <h3 style={{ color: "#ffcc00" }}>Nos Services</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/library" style={{ color: "white", textDecoration: "none" }}>Bibliothèque</Link></li>
            <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>À propos</Link></li>
            <li><Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link></li>
          </ul>
        </div>

        {/* Section Informations */}
        <div>
          <h3 style={{ color: "#ffcc00" }}>Informations</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/terms" style={{ color: "white", textDecoration: "none" }}>Mentions légales</Link></li>
            <li><Link to="/privacy" style={{ color: "white", textDecoration: "none" }}>Politique de confidentialité</Link></li>
            <li><Link to="/faq" style={{ color: "white", textDecoration: "none" }}>FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 style={{ color: "#ffcc00" }}>Newsletter</h3>
          <p>Inscrivez-vous pour recevoir les dernières mises à jour.</p>
          <div style={{ display: "flex" }}>
            <input
              type="email"
              placeholder="Votre email"
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                width: "200px",
              }}
            />
            <button
              style={{
                backgroundColor: "#ffcc00",
                border: "none",
                padding: "10px",
                marginLeft: "5px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>

      {/* Section bas de page */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          paddingTop: "20px",
          borderTop: "1px solid white",
        }}
      >
        <p>&copy; 2025 Bibliothèque. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
