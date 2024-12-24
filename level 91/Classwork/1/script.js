const books = [
    { id: 1, title: 'Fantastic Book', author: 'Author 1', genre: 'Fantasy', price: 25, description: 'An amazing fantasy story.', inCollection: false },
    { id: 2, title: 'Dramatic Story', author: 'Author 2', genre: 'Drama', price: 20, description: 'A heart-wrenching drama.', inCollection: false },
    { id: 3, title: 'Comedic Book', author: 'Author 3', genre: 'Comedy', price: 15, description: 'A hilarious comedy.', inCollection: false },
];


let storeBooks = new Map();
let collectionBooks = new Map();


books.forEach(book => {
    storeBooks.set(book.id, book);
});


function renderBooks() {
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';

    storeBooks.forEach(book => {
        if (!book.inCollection) {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Genre: ${book.genre}</p>
                <p>Price: ${book.price}₾</p>
                <p>${book.description}</p>
                <button onclick="addToCollection(${book.id})">Add to collection</button>
            `;
            bookList.appendChild(bookCard);
        }
    });
}


function renderCollection() {
    const collectionList = document.getElementById('collectionList');
    collectionList.innerHTML = '';

    collectionBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>Price: ${book.price}₾</p>
            <button onclick="removeFromCollection(${book.id})">Remove from collection</button>
        `;
        collectionList.appendChild(bookCard);
    });
}


function addToCollection(id) {
    const book = storeBooks.get(id);
    book.inCollection = true;  
    storeBooks.set(id, book);  
    collectionBooks.set(id, book);  
    renderBooks();  
    renderCollection();  
}


function removeFromCollection(id) {
    const book = collectionBooks.get(id);
    book.inCollection = false;  
    storeBooks.set(id, book);  
    collectionBooks.delete(id);  
    renderBooks();  
    renderCollection();  
}


function filterBooks() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value;
    const priceFilter = document.getElementById('priceFilter').value;

    const filteredBooks = [];
    storeBooks.forEach(book => {
        if (!book.inCollection &&
            (book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)) &&
            (genreFilter === '' || book.genre === genreFilter) &&
            book.price <= priceFilter) {
            filteredBooks.push(book);
        }
    });

    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>Price: ${book.price}₾</p>
            <p>${book.description}</p>
            <button onclick="addToCollection(${book.id})">Add to collection</button>
        `;
        bookList.appendChild(bookCard);
    });
}


function filterCollection() {
    const searchTerm = document.getElementById('searchCollection').value.toLowerCase();

    const filteredCollection = [];
    collectionBooks.forEach(book => {
        if (book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)) {
            filteredCollection.push(book);
        }
    });

   
    const collectionList = document.getElementById('collectionList');
    collectionList.innerHTML = '';
    filteredCollection.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Genre: ${book.genre}</p>
            <p>Price: ${book.price}₾</p>
            <button onclick="removeFromCollection(${book.id})">Remove from collection</button>
        `;
        collectionList.appendChild(bookCard);
    });
}


renderBooks();
renderCollection();
