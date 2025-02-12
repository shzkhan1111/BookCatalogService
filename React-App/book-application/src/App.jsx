import React, { useEffect, useState } from 'react';

import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import BookList from "./components/BookList.jsx";
import BookDetails from "./components/BookDetails.jsx";
import BookAddNew from "./components/BookAddNew.jsx";
import  BookApiService  from "./services/book.service.js";


const sampleBooks = [
  {
    id: 1,
    title: 'Book One',
    author: 'Author A',
    description: 'This is the description for Book One.',
    price : 100
  },
  {
    id: 2,
    title: 'Book Two',
    author: 'Author B',
    description: 'This is the description for Book Two.',
    price : 200
  },
];



function App() {
  const [books, setBooks] = useState(sampleBooks);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showAddBook, setShowAddBook] = useState(false);
  const [error, setError] = useState(null);


  // this function will be passed to the child component <BookAddNew /> to handle the new book
  const handleAddBook = (newBook) => {
    debugger;
    setBooks([...books, newBook]);
    setShowAddBook(false);
    sampleBooks.push(newBook);  
  }

  useEffect(() => {
    console.log('calling useEffect');
    const fetchData = async () => {
        try {
          debugger;
            const result = await BookApiService.getAllBooks();
            setBooks(result);
        } catch (err) {
            setError(err.message);
        }
    };

    fetchData();
}, []);
  
  const handleSearch = (searchTerm) => {
    const filteredBooks = sampleBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBooks);
  };
  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetails = () => {
    setSelectedBook(null);
  };
  

  return (
    <div className="app" style={{width: '100%', margin: 'auto', maxWidth: '500rem'}}>
      <Header />
      {error && <p>{error}</p>}
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} onSelectBook={handleSelectBook} />

      <button
        className='add-button'
        style={{ borderRadius: '10px', padding: '10px', margin: '10px', backgroundColor: 'blue', color: 'white' }}
        onClick={() => setShowAddBook(true)}
      >
        Add New Book
      </button>

      {selectedBook && (
        <BookDetails book={selectedBook} onClose={handleCloseDetails} />
      )}

      {showAddBook && <BookAddNew onClose={() => setShowAddBook(false)} onSave={handleAddBook} />}
    </div>
  );
}

export default App
