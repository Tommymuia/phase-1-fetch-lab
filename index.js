// index.js

// Fetch books from the API and return the promise
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => {
      renderBooks(books); // Pass JSON to renderBooks
    })
    .catch(error => console.error("Error fetching books:", error));
}

// Render book titles into the DOM
function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = ''; // Clear previous content
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name; // Safer than innerHTML
    main.appendChild(h2);
  });
}

// Expose functions to window for tests
window.fetchBooks = fetchBooks;
window.renderBooks = renderBooks;
