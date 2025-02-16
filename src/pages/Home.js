import React from "react";
import { useNavigate } from "react-router-dom"; // Pour la navigation
import Header from "../components/Header";
import Footer from "../components/Footer";
import LibraryFeatures from "../components/LibraryFeatures";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonial";
import Contact from "../components/Contact";

const Home = () => {
  const navigate = useNavigate(); // Hook pour gérer la navigation

  return (
    <>
      <Header />
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100vh", // Pleine hauteur de l'écran
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          background: `linear-gradient(to bottom, rgba(0, 0, 139, 0.5), rgba(0, 0, 139, 0.7)), url('/assets/images/image1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div style={{ maxWidth: "800px", padding: "20px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "20px" }}>
            Bienvenue dans notre Bibliothèque Numérique
          </h1>
          <p style={{ fontSize: "20px", marginBottom: "30px" }}>
            Découvrez un monde de savoir avec notre vaste collection de livres en ligne. 
            Rejoignez-nous et plongez dans la lecture illimitée !
          </p>

          {/* Boutons */}
          <div>
            <button
              onClick={() => navigate("/library")}
              style={{
                backgroundColor: "#ffc107",
                color: "#343a40",
                padding: "15px 25px",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                marginRight: "10px",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#0056b3";
                e.target.style.color = "white";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#ffc107";
                e.target.style.color = "#343a40";
              }}
            >
              📚 Explorer la Bibliothèque
            </button>

            <button
              onClick={() => navigate("/register")}
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "15px 25px",
                border: "2px solid white",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = "#0056b3";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "white";
              }}
            >
              📝 S'inscrire Gratuitement
            </button>
          </div>
        </div>
      </div>
      <LibraryFeatures/>
      <Statistics/>
      <Testimonials/>
      <Contact/>
      <Footer />
    </>
  );
};

export default Home;
