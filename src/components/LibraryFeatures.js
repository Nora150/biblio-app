import React from "react";
import { useNavigate } from "react-router-dom";

const LibraryFeatures = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        textAlign: "center",
        padding: "60px 20px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Titre principal */}
      <h2
        style={{
          fontSize: "36px",
          color: "#001F3F",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Découvrez nos services exclusifs 📚
      </h2>
      <p style={{ fontSize: "18px", color: "#555", marginBottom: "40px" }}>
        Explorez une bibliothèque numérique riche et variée pour tous les
        passionnés de lecture.
      </p>

      {/* Cartes des services */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Carte 1 */}
        <div style={cardStyle}>
          <img
            src="../assets/images/image3.png"
            alt="E-books"
            style={iconStyle}
          />
          <h3 style={titleStyle}>Accès à des E-books</h3>
          <p style={textStyle}>
            Téléchargez ou lisez en ligne des milliers de livres numériques
            disponibles dans tous les genres.
          </p>
        </div>

        {/* Carte 2 */}
        <div style={{ ...cardStyle, backgroundColor: "#D4EDDA" }}>
          <img
            src="../assets/images/image4.png"
            alt="Communauté"
            style={iconStyle}
          />
          <h3 style={titleStyle}>Communauté de Lecteurs</h3>
          <p style={textStyle}>
            Rejoignez notre forum et partagez vos avis, recommandations et
            découvertes avec d'autres passionnés.
          </p>
        </div>

        {/* Carte 3 */}
        <div style={cardStyle}>
          <img
            src="../assets/images/image5.png"
            alt="Audiobooks"
            style={iconStyle}
          />
          <h3 style={titleStyle}>Livres Audio</h3>
          <p style={textStyle}>
            Écoutez vos livres préférés en format audio, idéal pour les
            déplacements ou la détente.
          </p>
        </div>
      </div>

      {/* Deuxième section : Liste avec icônes */}
      <div
        style={{
          marginTop: "60px",
          textAlign: "left",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "30px",
            color: "#001F3F",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "100px", // Ajoute un espace vers le bas
          }}>
        
          Pourquoi choisir notre bibliothèque ? 
        </h2>

        {/* Liste des avantages */}
        <ul style={{ listStyle: "none", padding: "0" }}>
          {[
            "Un catalogue de plus de 10 000 livres en ligne 📖",
            "Un accès gratuit et illimité pour tous 🆓",
            "Des recommandations personnalisées selon vos goûts 💡",
            "Un espace communautaire pour échanger avec d’autres lecteurs ",
            "Un service client disponible 24/7 pour vous aider ",
          ].map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "18px",
                marginBottom: "15px",
                color: "#333",
              }}
            >
              <span
                style={{
                  marginRight: "10px",
                  fontSize: "20px",
                  color: "#28A745",
                }}
              >
                ✅
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bouton d'action */}
      <div style={{ marginTop: "40px" }}>
        <button
         onClick={() => navigate("/library")}
          style={{
            backgroundColor: "#0056B3",
            color: "white",
            padding: "15px 25px",
            fontSize: "18px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#003D7A")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0056B3")}
        >
           Explorer la Bibliothèque
        </button>
      </div>
    </div>
  );
};

// Styles partagés pour les cartes
const cardStyle = {
  backgroundColor: "#F8F9FA",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  width: "300px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
};

const iconStyle = { width: "50px", height: "50px", marginBottom: "10px" };
const titleStyle = { fontSize: "22px", fontWeight: "bold", color: "#333" };
const textStyle = { fontSize: "16px", color: "#666" };

export default LibraryFeatures;
