import React, { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Fonction pour gérer l'ouverture/fermeture des réponses
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.container}>
      <div style={styles.faqBox}>
        {/* Section de contact */}
        <div style={styles.contactSection}>
          <h2 style={styles.title}>Vous avez des questions ?</h2>
          <p style={styles.description}>
             N'hésitez pas à nous contacter si vous avez besoin d'aide !
          </p>
          <button style={styles.contactButton}>📞 Contacter le support</button>
        </div>

        {/* Section des questions fréquentes */}
        <div style={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} style={styles.faqItem}>
              <div style={styles.questionContainer} onClick={() => toggleAnswer(index)}>
                <h3 style={styles.question}>{item.question}</h3>
                <span style={styles.icon}>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              {openIndex === index && <p style={styles.answer}>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Données des FAQ
const faqData = [
  {
    question: " Qu'est-ce qu'une bibliothèque numérique ?",
    answer:
      "Une bibliothèque numérique est une plateforme en ligne qui permet d’accéder à un large éventail de ressources documentaires sous format numérique. Elle regroupe des livres, revues, articles, documents académiques, archives et parfois même des audiobooks et vidéos éducatives.",
  },
  {
    question: " Puis-je enregistrer des livres pour les lire plus tard ?",
    answer:
      "Oui ! Vous pouvez enregistrer vos livres favoris et y accéder quand vous le souhaitez, même hors ligne.",
  },
  {
    question: " Vais-je recevoir un certificat d'apprentissage ?",
    answer:
      "Nous proposons des certificats pour certaines formations et lectures validées sur notre plateforme.",
  },
  {
    question: " Comment puis-je m'abonner à la bibliothèque ?",
    answer:
      "L'abonnement est simple ! Il vous suffit de choisir un forfait et de procéder au paiement sécurisé en ligne.",
  },
];

// Styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "50px 10%",
  },
  faqBox: {
    display: "flex",
    flexDirection: "row",
    padding: "30px",
    maxWidth: "900px",
    width: "100%",
  },
  contactSection: {
    flex: 1,
    paddingRight: "30px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#004d99",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "20px",
  },
  contactButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  faqList: {
    flex: 2,
  },
  faqItem: {
    marginBottom: "15px",
    paddingBottom: "10px",
    borderBottom: "1px solid #ddd",
    cursor: "pointer",
  },
  questionContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#004d99",
    margin: 0,
  },
  icon: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#004d99",
  },
  answer: {
    fontSize: "16px",
    color: "#555",
    marginTop: "10px",
    transition: "all 0.3s ease-in-out",
  },
};

export default Faq;
