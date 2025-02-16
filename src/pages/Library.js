import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Library = () => {
  const [search, setSearch] = useState("");

  // Liste des livres avec images et descriptions
  const books = [
    {
      title: "Le Pouvoir du Moment Présent",
      category: "Développement personnel",
      image: "../assets/images/image14.png",
      description: "Un guide puissant pour vivre pleinement l'instant présent.",
    },
    {
      title: "Les 7 habitudes des gens efficaces",
      category: "Développement personnel",
      image: "../assets/images/image15.png",
      description: "Un livre de développement personnel pour améliorer sa productivité.",
    },
    {
      title: "L'Alchimiste",
      category: "Roman",
      image: "../assets/images/image16.png",
      description: "Un conte philosophique inspirant sur la quête de soi.",
    },
    {
      title: "1984",
      category: "Roman",
      image: "../assets/images/image17.png",
      description: "Un roman dystopique visionnaire sur un monde totalitaire.",
    },
    {
      title: "Sapiens : Une brève histoire de l'humanité",
      category: "Bestseller",
      image: "../assets/images/image18.png",
      description: "Une exploration fascinante de l'histoire de l'humanité.",
    },
    {
      title: "Père riche, père pauvre",
      category: "Bestseller",
      image: "../assets/images/image19.png",
      description: "Un livre incontournable sur l'éducation financière.",
    },
    {
      title: "Introduction à la Programmation",
      category: "Informatique",
      image: "../assets/images/image20.png",
      description: "Les bases essentielles pour apprendre à coder.",
    },
    {
      title: "Histoire du Monde",
      category: "Histoire",
      image: "../assets/images/image21.png",
      description: "Un voyage captivant à travers les grandes civilisations.",
    },
  ];

  // Filtrer les livres en fonction de la recherche
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />

      <div style={styles.libraryContainer}>
        {/* Titre et Description */}
        <h2 style={styles.title}>📚 Notre Collection</h2>
        <p style={styles.subtitle}>
          Découvrez une large sélection de livres pour élargir vos connaissances.
        </p>

        {/* Barre de Recherche */}
        <input
          type="text"
          placeholder="Rechercher un livre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchBar}
        />

        {/* Catégories */}
        <div style={styles.categories}>
          <span style={styles.category}>📖 Roman</span>
          <span style={styles.category}>🌟 Bestseller</span>
          <span style={styles.category}>💡 Développement personnel</span>
          <span style={styles.category}>📖 Informatique</span>
          <span style={styles.category}>📜 Histoire</span>
          <span style={styles.category}>🔬 Sciences</span>
          <span style={styles.category}>💡 Philosophie</span>
          <span style={styles.category}>📈 Business</span>
        </div>

        {/* Liste des livres */}
        <div style={styles.booksContainer}>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div key={index} style={styles.bookCard}>
                <img src={book.image} alt={book.title} style={styles.bookImage} />
                <h3 style={styles.bookTitle}>{book.title}</h3>
                <p style={styles.bookCategory}>{book.category}</p>
                <p style={styles.bookDescription}>{book.description}</p>
              </div>
            ))
          ) : (
            <p style={styles.noResult}>Aucun livre trouvé.</p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

// Styles
const styles = {
  libraryContainer: {
    padding: "50px 20px",
    textAlign: "center",
  },
  title: {
    color: "#007bff",
    fontSize: "28px",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "20px",
  },
  searchBar: {
    width: "60%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  categories: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "30px",
  },
  category: {
    padding: "8px 15px",
    backgroundColor: "#f0f0f0",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "14px",
  },
  booksContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  bookCard: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  bookImage: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  bookTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  bookCategory: {
    fontSize: "14px",
    color: "#007bff",
    fontWeight: "bold",
  },
  bookDescription: {
    fontSize: "14px",
    color: "#555",
    marginTop: "5px",
  },
  noResult: {
    fontSize: "16px",
    color: "#999",
  },
};

export default Library;
