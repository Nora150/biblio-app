import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
  };

  return (
    <div style={styles.contactContainer}>
      <div style={styles.contentWrapper}>
        {/* Texte d'introduction */}
        <h2 style={styles.title}>Besoin d'aide ? Une question ? Un avis à partager ?</h2>
        <p style={styles.description}>
          Que ce soit pour une demande d'information, un conseil ou simplement
          pour nous laisser un message, n'hésitez pas à nous contacter.
          Remplissez le formulaire ci-dessous, et notre équipe vous répondra
          dans les plus brefs délais.
        </p>

        {/* Formulaire */}
        <form style={styles.formStyle} onSubmit={handleSubmit}>
          <div style={styles.rowStyle}>
            <div style={styles.inputGroup}>
              <label style={styles.labelStyle}>
                Prénom <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                style={styles.inputStyle}
                required
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.labelStyle}>
                Nom <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                style={styles.inputStyle}
                required
              />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.labelStyle}>
              Email <span style={styles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.inputStyle}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.labelStyle}>Nom de l'entreprise</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={styles.inputStyle}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.labelStyle}>Téléphone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.inputStyle}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.labelStyle}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={styles.textAreaStyle}
              placeholder="Écrivez-nous"
            ></textarea>
          </div>
          <button type="submit" style={styles.buttonStyle}>
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

// 🎨 Styles
const styles = {
  contactContainer: {
    padding: "80px 10%",
    display: "flex",
    justifyContent: "center",
  },
  contentWrapper: {
    maxWidth: "700px",
    width: "100%",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: "15px",
  },
  description: {
    fontSize: "20px",
    color: "#555",
    textAlign: "center",
    marginBottom: "30px",
  },
  formStyle: {
    background: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
  },
  rowStyle: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
    flex: "1",
    minWidth: "calc(50% - 10px)",
  },
  labelStyle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
    color: "#333",
  },
  required: {
    color: "red",
  },
  inputStyle: {
    padding: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
  },
  textAreaStyle: {
    padding: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
    width: "100%",
    height: "120px",
    resize: "none",
  },
  buttonStyle: {
    width: "100%",
    padding: "16px",
    background: "#FCD34D",
    color: "#1E3A8A",
    fontSize: "18px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

// 📱 Responsive Design en JS
styles.rowStyle["@media (max-width: 768px)"] = {
  flexDirection: "column",
};
styles.inputGroup["@media (max-width: 768px)"] = {
  minWidth: "100%",
};

export default Contact;
