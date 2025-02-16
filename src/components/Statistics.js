import React, { useEffect, useState } from "react";

const Statistics = () => {
  const statsData = [
    { icon: "../assets/images/image6.png", target: 1000, label: "Livres disponibles", increment: 30 },
    { icon: "../assets/images/image7.png", target: 506, label: "Lecteurs inscrits", increment: 50 },
    { icon: "../assets/images/image8.png", target: 4.8, label: "Note moyenne", increment: 0.02 },
    { icon: "../assets/images/image9.png", target: 100, label: "Genres littéraires", increment: 1 },
  ];

  const [stats, setStats] = useState(
    statsData.map((stat) => ({ ...stat, current: 0 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) =>
        prevStats.map((stat) => {
          if (stat.current < stat.target) {
            const newValue = Math.min(stat.current + stat.increment, stat.target);
            return { ...stat, current: parseFloat(newValue.toFixed(2)) };
          }
          return stat;
        })
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={statsContainer}>
      <h2 style={titleStyle}> Nos Statistiques</h2>
      <p style={descriptionStyle}>
        Notre bibliothèque grandit chaque jour, rejoignez-nous pour une expérience de lecture unique !
      </p>
      <div style={statsGrid}>
        {stats.map((stat, index) => (
          <div key={index} style={statCard}>
            <div style={iconWrapper}>
              <img src={stat.icon} alt={stat.label} style={iconStyle} />
            </div>
            <h3 style={numberStyle}>{stat.current.toLocaleString()}</h3>
            <p style={labelStyle}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🎨 Styles
const statsContainer = {
  padding: "80px 10%",
  textAlign: "center",
  color: "#1E293B", // Texte en noir/gris foncé pour meilleure visibilité
};

const titleStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#111827", // Texte plus foncé
};

const descriptionStyle = {
  fontSize: "16px",
  marginBottom: "30px",
  color: "#374151", // Texte plus visible
};

const statsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "40px",
  justifyContent: "center",
};

const statCard = {
  width: "160px",
  height: "160px",
  borderRadius: "12px", // Retour à une forme carrée avec bords arrondis légers
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.15)",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)", // Légère ombre pour profondeur
  cursor: "pointer",
};

const iconWrapper = {
  width: "60px",
  height: "60px",
  borderRadius: "12px", // Coins légèrement arrondis pour les icônes
  // Fond jaune clair
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "10px",
};

const iconStyle = {
  width: "30px",
  height: "30px",
};

const numberStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  color: "#1E293B", // Texte foncé pour lisibilité
};

const labelStyle = {
  fontSize: "14px",
  color: "#374151", // Texte plus foncé
};

export default Statistics;
