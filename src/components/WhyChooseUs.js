import React from "react";

const WhyChooseUs = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>🚀 Pourquoi nous choisir ?</h2>
      <p style={styles.subtitle}>
      Nous croyons que l'accès au savoir doit être simple, intuitif et illimité. 
      Notre bibliothèque numérique vous offre une expérience fluide et immersive, où
       que vous soyez et quel que soit votre appareil.
      </p>

      {/* 📌 Liste des objectifs */}
      <div style={styles.gridContainer}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>📖 Offrir un large choix de contenus</h3>
          <p style={styles.cardText}>
            Des milliers de livres, revues et documents dans divers domaines.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🌍 Faciliter l'accès au savoir</h3>
          <p style={styles.cardText}>
            Une bibliothèque numérique disponible à tout moment, sur tous les appareils.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>🎓 Encourager l'apprentissage continu</h3>
          <p style={styles.cardText}>
            Un espace interactif pour approfondir ses connaissances et explorer de nouvelles thématiques.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>✨ Proposer une expérience immersive</h3>
          <p style={styles.cardText}>
            Une interface simple, intuitive et agréable pour une lecture optimisée.
          </p>
        </div>
      </div>
    </section>
  );
};

// 🎨 STYLES CSS-IN-JS
const styles = {
  container: {
    textAlign: "center",
    padding: "60px 10%",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#004d99",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "20px",
    color: "#666",
    marginBottom: "40px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", 
    gap: "20px",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "rgb(255, 204, 0)",
    marginBottom: "10px",
  },
  cardText: {
    fontSize: "18px",
    color: "#333",
  },
  // 📱 RESPONSIVE
  "@media (max-width: 768px)": {
    gridContainer: {
      gridTemplateColumns: "1fr", // 📱 Une seule colonne sur mobile
    },
  },
};

export default WhyChooseUs;
