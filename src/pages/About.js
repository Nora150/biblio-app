import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHeader from "../components/AboutHeader";
import WhyChooseUs from "../components/WhyChooseUs";
import Faq from "../components/Faq";

const About = () => {
  return (
    <>
      <Header />
      <AboutHeader />
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="../assets/images/image13.png"
            alt="Bibliothèque numérique"
            style={styles.image}
          />
        </div>

        {/* 📝 Texte à droite */}
        <div style={styles.textContainer}>
          <h2 style={styles.title}>Notre Mission</h2>
          <p style={styles.paragraph}>
            Nous avons pour mission de rendre la connaissance accessible à tous,
            quel que soit l'endroit ou le moment. Grâce à notre plateforme
            intuitive, nous offrons une expérience de lecture fluide et
            enrichissante à tous les passionnés de savoir, qu'ils soient
            étudiants, professionnels ou curieux en quête de découvertes.
          </p>
          <p style={styles.paragraph}>
            Que vous soyez étudiant, professionnel ou passionné de lecture,
            notre plateforme vous offre une expérience fluide et enrichissante.
          </p>

          {/* 📌 Bouton d'appel à l'action */}
          <a href="/bibliotheque" style={styles.button}>
            Explorer la bibliothèque →
          </a>
        </div>
      </div>
      <WhyChooseUs/>
      <Faq/>
      <Footer />
    </>
  );
};
const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 10%",
    background: "#f9f9f9",
  },
  imageContainer: {
    flex: 1.5,
    marginRight: "40px",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#004d99",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "15px",
    color: "#333",
  },
  button: {
    display: "inline-block",
    marginTop: "15px",
    padding: "12px 24px",
    backgroundColor: "#007bff",
    color: "#fff",
    fontSize: "18px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "0.3s",
  },
};

export default About;
