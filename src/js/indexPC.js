import '../css/stylePC.css';

//ANIMAZIONI

document.addEventListener("DOMContentLoaded", function () {
    // Riferimenti agli elementi
    const book = document.querySelector('.book');
    const navbar = document.querySelector('.nav');
    const footer = document.querySelector('.footer');
    const postIts = document.querySelectorAll('.post-it');  // Assicurati che esistano gli elementi con classe 'post-it'

    // Inizializza la posizione degli elementi
    function initializePositions() {
        // Imposta inizialmente gli elementi fuori dallo schermo
        book.style.transform = "translateX(-200%)";  // Partenza libro fuori schermo a sinistra
        navbar.style.opacity = "0";  // Navbar invisibile all'inizio
        postIts.forEach(postIt => {
            postIt.style.transform = "translateY(120%)";  // Post-it parte sotto lo schermo
        });
    }

    // Funzione per animare il libro da sinistra a destra
    function animateBook() {
        book.style.transition = "transform 1s ease-in-out";
        book.style.transform = "translateX(0)"; // Spostamento verso la posizione finale
    }

    // Funzione per animare i post-it da sotto verso l'alto
    function animatePostIts() {
        postIts.forEach(postIt => {
            postIt.style.transition = "transform 1s ease-in-out";
            postIt.style.transform = "translateY(0)";  // Spostamento verso la posizione finale
        });
    }

    // Funzione per fare comparire la navbar con un effetto fade-in
    function fadeInNavbar() {
        navbar.style.transition = "opacity 1s ease-in-out";
        navbar.style.opacity = "1";
    }

    // Funzione per animare l'intera pagina
    function startAnimations() {
        initializePositions();  // Imposta la posizione iniziale degli elementi
        setTimeout(() => {
            animateBook();  // Anima il libro
            animatePostIts();  // Anima i post-it
            setTimeout(fadeInNavbar, 1000); // Navbar appare dopo 1 secondo
        }, 500);  // Ritardo di 0.5 secondi per avviare l'animazione
    }

    // Avvia le animazioni al caricamento della pagina
    startAnimations();
});



//LIBRO

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".form-control");
    const searchButton = document.querySelector(".searchbtn");
    const leftPage = document.getElementById("left-page");
    const rightPage = document.getElementById("right-page");
    const bookCover = document.getElementById("book-cover");
    const bookTitle = document.getElementById("book-title");
    const bookDescription = document.getElementById("book-description");
    const descriptionButton = document.getElementById("description-button");
    const previousButton = document.getElementById("previous-book");
    const nextButton = document.getElementById("next-book");
    const bookAuthor = document.getElementById("book-author");
    const loader = document.getElementById("loading-spinner");  // Aggiungi il riferimento al loader

    let currentBooks = []; // Array per memorizzare i libri trovati
    let currentBookIndex = 0; // Indice del libro attuale
  
    /* Creazione del loader
    const loader = document.createElement("div");
    loader.innerHTML = `<div class="spinner-border text" role="status"></div>`;
    loader.style.display = "none"; // Inizialmente nascosto
    /*loader.style.textAlign = "center";
    loader.style.margin = "10px auto"; // Per centrarlo
    loader.style.width = "50px"; 
    loader.style.height = "50px"; */
//aggiungi il loader
   // document.body.appendChild(loader); 
  
    // Funzione per ottenere i libri dalla ricerca
    async function fetchBooks(query) {
      try {
        loader.style.display = "block"; // Mostra il loader prima della richiesta
        let url = `https://openlibrary.org/search.json?q=${query}`;
        const response = await fetch(url);
        const data = await response.json();
  
        loader.style.display = "none"; // Nasconde il loader quando i dati sono disponibili
  
        if (!data.docs || data.docs.length === 0) {
          displayNoResults();
          return;
        }
        currentBooks = data.docs;
        displayBook(currentBooks[currentBookIndex]);
      } catch (error) {
        console.error("Errore durante il recupero dei libri:", error);
      }
    }
  
    // Funzione per ottenere la descrizione dettagliata del libro
    async function fetchBookDetails(bookKey) {
        try {
          const url = `https://openlibrary.org${bookKey}.json`;  // Costruisce l'URL per la descrizione
          const response = await fetch(url);
          const bookDetails = await response.json();
      
          if (bookDetails.description) {
            // Se la descrizione è un oggetto, prova a convertirlo in una stringa
            if (typeof bookDetails.description === 'object') {
              return bookDetails.description.value || "No description available.";
            }
            return bookDetails.description;
          } else {
            return "No description available.";  // Fallback se la descrizione non è disponibile
          }
        } catch (error) {
          console.error("Errore durante il recupero della descrizione:", error);
          return "Error loading description.";
        }
      }
  
    // Funzione per visualizzare i libri trovati
    async function displayBook(book) {
      const bookImage = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : "img/standardcover2.png";
      bookCover.src = bookImage;
      bookTitle.textContent = book.title || "Titolo non disponibile";
      const bookAuthorText = book.author_name ? book.author_name.join(", ") : "Autore sconosciuto";
      bookAuthor.textContent = bookAuthorText;  // Aggiorna l'autore nel DOM

      // Chiamata per ottenere la descrizione completa
      const description = await fetchBookDetails(book.key);
      bookDescription.querySelector("#description-text").textContent = description;

      // Nascondi la descrizione inizialmente
      //bookDescription.style.display = "none"; 
    }
  
    // Funzione di ricerca
    searchButton.addEventListener("click", function(event) {
      event.preventDefault(); // Impedisce il comportamento predefinito (il ricaricamento della pagina)
      const query = searchInput.value.trim().toLowerCase();
      if (query) {
        currentBookIndex = 0; // Resetta l'indice del libro alla ricerca successiva
        fetchBooks(query);
      }
    });
  
    // Mostra/Nascondi la descrizione del libro (a toggle)
    descriptionButton.addEventListener("click", function() {
      if (bookDescription.style.display === "none" || bookDescription.style.display === "") {
        bookDescription.style.display = "block";  // Mostra la descrizione nella pagina destra
      } else {
        bookDescription.style.display = "none";  // Nascondi la descrizione
      }
    });
  
    // Navigazione libro precedente
    previousButton.addEventListener("click", function () {
      if (currentBookIndex > 0) {
        currentBookIndex--;
        displayBook(currentBooks[currentBookIndex]);
      }
    });
  
    // Navigazione libro successivo
    nextButton.addEventListener("click", function () {
      if (currentBookIndex < currentBooks.length - 1) {
        currentBookIndex++;
        displayBook(currentBooks[currentBookIndex]);
      }
    });
  
    // Funzione quando non ci sono risultati
    function displayNoResults() {
      bookCover.src = "img/standardcover2.png";
      bookTitle.textContent = "Nessun risultato";
      bookAuthor.textContent = ""; // Pulisce il campo autore
      bookDescription.querySelector("#description-text").textContent = "Sembra che la ricerca non abbia prodotto risultati";
      bookDescription.style.display = "none";
    }
  });