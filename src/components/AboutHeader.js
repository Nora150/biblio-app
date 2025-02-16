import React from "react";

const AboutHeader = () => {
  return (
    <section style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.title}>A propos</h1>

        <p style={styles.subtitle}>Bienvenue dans notre bibliothèque numérique, 
            un espace conçu pour faciliter
             l’accès au savoir et promouvoir la culture de la lecture à l’ère du numérique.</p>
      </div>
    </section>
  );
};

// 🎨 **Styles mis à jour**
const styles = {
  container: {
    width: "100%",
    height: "400px",
    background: "linear-gradient(to right, #0047AB, #FFD700)", // Dégradé bleu → jaune
    display: "flex",
    alignItems: "center", // Aligner verticalement au centre
    justifyContent: "flex-start", // Texte à gauche
    paddingLeft: "50px", // Espacement à gauche
    color: "#fff",
  },
  textContainer: {
    maxWidth: "600px",
  },
  title: {
    fontSize: "70px", // Augmenté
    fontWeight: "bold",
    marginBottom: "30px",
  },
  subtitle: {
    fontSize: "24px", // Augmenté
  },
};

export default AboutHeader;
