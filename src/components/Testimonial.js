import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Alice Dupont",
      text: "Une bibliothèque incroyable avec une collection très riche ! Je trouve toujours de quoi lire.",
      avatar: "../assets/images/image10.png",
    },
    {
      name: "Jean Martin",
      text: "J'adore la simplicité et l'accès 24/7 aux livres. Idéal pour les passionnés de lecture !",
      avatar: "../assets/images/image11.png",
    },
    {
      name: "Sophie Lemoine",
      text: "Une communauté bienveillante et un contenu de qualité. Je recommande à 100% !",
      avatar: "../assets/images/image12.png",
    },
  ];

  return (
    <div style={testimonialsContainer}>
      <h2 style={titleStyle}> Ce que disent nos lecteurs</h2>
      <div style={reviewsContainer}>
        {reviews.map((review, index) => (
          <div key={index} style={testimonialCard}>
            <img src={review.avatar} alt="User" style={avatarStyle} />
            <h3 style={nameStyle}>{review.name}</h3>
            <p style={textStyle}>"{review.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🎨 Styles
const testimonialsContainer = {
  padding: "80px 10% 40px", // Réduction de l’espace bas pour coller au footer
  textAlign: "center",
  background: "linear-gradient(135deg, #1E3A8A, #FCD34D)", // Dégradé sombre bleu et jaune
};

const titleStyle = {
  fontSize: "32px",
  color: "#fff", // Texte blanc pour contraste
  fontWeight: "bold",
  marginBottom: "20px",
};

const reviewsContainer = {
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  flexWrap: "wrap",
};

const testimonialCard = {
  background: "rgba(255, 255, 255, 0.15)", // Transparence pour effet moderne
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  color: "#fff", // Texte blanc pour bonne lisibilité
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // Ombre légère
  maxWidth: "300px",
  backdropFilter: "blur(5px)", // Flou pour effet classe
};

const avatarStyle = {
  width: "70px",
  height: "60px",
  borderRadius: "50%",
  marginBottom: "10px",
};

const nameStyle = {
  fontSize: "18px",
  fontWeight: "bold",
};

const textStyle = {
  fontSize: "16px",
  fontStyle: "italic",
};

export default Testimonials;
