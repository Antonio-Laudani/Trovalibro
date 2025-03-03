import '../css/styleMobile.css' ;
console.log("il file è stato eseguito");

async function fetchDescription(key) {
    try {
      const response = await fetch(`https://openlibrary.org${key}.json`);
      const data = await response.json();
  
      //console.log("API Response:", data);  Debug
      let title = "Unknown Title";
      if (data.title) {
        title = data.title;
      }
  
      let description = "No description available";
      if (typeof data.description === "string") {
        description = data.description;
      } else if (typeof data.description === "object" && data.description.value) {
        description = data.description.value;
      }
  
      // Rimuove eventuali finestre modali precedenti
      const existingModal = document.getElementById("bookDescriptionModal");
      if (existingModal) {
        existingModal.remove();
      }
  
      // Creazione del contenitore modale
      const modal = document.createElement("div");
      modal.id = "bookDescriptionModal";
      modal.classList.add("modal");
  
      // Contenuto della finestra modale
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
  
      // Titolo del libro
      const titleElement = document.createElement("h2");
      titleElement.textContent = title; // Mostra il titolo corretto
  
      // Testo della descrizione
      const descriptionText = document.createElement("p");
      descriptionText.textContent = description;
  
      // Pulsante di chiusura
      const closeButton = document.createElement("span");
      closeButton.textContent = "X";
      closeButton.classList.add("close-button");
  
      // Event listener per chiudere la finestra modale
      closeButton.addEventListener("click", function () {
        modal.remove();
      });
  
      // Aggiunge tutto al modal
      modalContent.appendChild(closeButton);
      modalContent.appendChild(titleElement);
      modalContent.appendChild(descriptionText);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
    } catch (error) {
      console.error("Errore durante il recupero della descrizione:", error);
    }
  }
  
  // Rende la funzione accessibile globalmente
window.fetchDescription = fetchDescription;
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".form-control");
    const searchButton = document.querySelector(".btn");
    const carousel = document.querySelector(".carousel-inner");
    const indicatorsContainer = document.querySelector(".carousel-indicators"); // <- AGGIUNTO
    const carouselContainer = document.querySelector(".carousel");
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");
  
    let currentBooks = []; // Array per memorizzare i libri trovati
  
   // ** Nasconde il carosello all'inizio **
   carouselContainer.style.display = "none";
   //nasconde le frecce//
   prevButton.style.display = "none";
   nextButton.style.display = "none";
    // ** Crea il loader **
  const loader = document.createElement("div");
  loader.innerHTML = `<div class="spinner-border text" role="status"></div>`;
  loader.style.display = "none"; // Inizialmente nascosto
  loader.style.textAlign = "center";
  loader.style.margin = "20px auto"; // Per centrarlo
  loader.style.width = "50px"; 
  loader.style.height = "50px";
  
  /* Aggiungilo dentro il carosello per evitare che sia fuori posto */
  carouselContainer.parentNode.insertBefore(loader, carouselContainer);
  
    // Funzione per ottenere i libri dalla ricerca
    async function fetchBooks(query) {
      try {
        //console.log("pippo");//
        
        loader.style.display = "block"; // Mostra il loader prima della richiesta
        let url = `https://openlibrary.org/search.json?q=${query}`;
        /**Simula un ritardo di 5 secondi prima della richiesta API
      await new Promise(resolve => setTimeout(resolve, 5000));**/
        const response = await fetch(url);
        const data = await response.json();
  
      // **Nasconde il loader quando i dati sono disponibili**
      loader.style.display = "none";
  
        if (!data.docs || data.docs.length === 0) {
          displayNoResults();
          return;
        }
        currentBooks = data.docs;
        displayBooks(currentBooks);
        carouselContainer.style.display = "block";
        prevButton.style.display="block";
        nextButton.style.display="block";
      } catch (error) {
        console.error("Errore durante il recupero dei libri:", error);
      }
    }
  
    // Funzione per mostrare un messaggio quando non ci sono risultati
  function displayNoResults() {
    carousel.innerHTML = `<div class="no-results"><p>Mi dispiace, nessun libro con il seguente titolo è stato trovato.</p></div>`;
  }
  
    // Funzione per visualizzare i libri nel carosello
    function displayBooks(books) {
      carousel.innerHTML = ""; // Pulisce il carosello
      books.forEach((book, index) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("carousel-item");
        if (index === 0) bookElement.classList.add("active"); // Prima immagine attiva
  
        const bookImage = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : "img/standardcover.png";
        const bookTitle = book.title;
        const bookAuthors = book.author_name ? book.author_name.join(", ") : "Unknown Author";
  
        bookElement.innerHTML = `
          <img src="${bookImage}" class="d-block w-100" alt="${bookTitle}">
          <div class="carousel-caption">
            <h6>${bookTitle}</h6>
            <p>${bookAuthors}</p>
            <button class="innerbtn" onclick="fetchDescription('${book.key}')">See Description</button>
          </div>
        `;
        carousel.appendChild(bookElement);
  
         // Creazione indicatori
      const indicator = document.createElement("button");
      indicator.setAttribute("type", "button");
      indicator.setAttribute("data-bs-target", "#carouselExampleCaptions");
      indicator.setAttribute("data-bs-slide-to", index);
      if (index === 0) indicator.classList.add("active");
      indicatorsContainer.appendChild(indicator);
      });
    }
  
    // Funzione di ricerca (case-insensitive)
    searchButton.addEventListener("click", function () {
      const query = searchInput.value.trim().toLowerCase();
      if (query) {
        fetchBooks(query);
      }
    });
  
    // Gestione della navigazione del carosello (freccia precedente)
    prevButton.addEventListener("click", function () {
      const activeItem = document.querySelector(".carousel-item.active");
      const prevItem = activeItem.previousElementSibling || carousel.lastElementChild;
      activeItem.classList.remove("active");
      prevItem.classList.add("active");
    });
  
    // Gestione della navigazione del carosello (freccia successiva)
    nextButton.addEventListener("click", function () {
      const activeItem = document.querySelector(".carousel-item.active");
      const nextItem = activeItem.nextElementSibling || carousel.firstElementChild;
      activeItem.classList.remove("active");
      nextItem.classList.add("active");
    });
  });