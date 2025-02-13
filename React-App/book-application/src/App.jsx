import React, { useEffect, useState } from 'react';

import Header from "./components/Header.jsx";
import SearchBar from "./components/SearchBar.jsx";
import BookList from "./components/BookList.jsx";
import BookDetails from "./components/BookDetails.jsx";
import BookAddNew from "./components/BookAddNew.jsx";
import  BookApiService  from "./services/book.service.js";


// let sampleBooks = [];



function App() {
  const [sampleBooks , setsampleBooks] = useState([]);
  const [books, setBooks] = useState(sampleBooks);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showAddBook, setShowAddBook] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async (id) =>{
    debugger;
    const result = await BookApiService.deleteBook(id);
    if(result){
      const updatedBooks = books.filter((book) => book.id !== id);
      setBooks(updatedBooks);
      setSelectedBook(null);
    }
    else{
      setError('failed to delete book');
    }
  } 

  // this function will be passed to the child component <BookAddNew /> to handle the new book
  const handleAddBook = async (newBook) => {
    
    try {
      debugger;
      const result = await BookApiService.createBook(newBook);
      console.log('add new book' , result);
      if(result){
        setBooks([...books, result]);
        setShowAddBook(false);
        setsampleBooks([...sampleBooks, newBook]); 
      }
      else{
        setError('failed to create a new book');
      }
    } catch (error) {
      setError(error.message);
    }
        
  }

  const  handleEditBook = async (editedBook) => {
    const result = await BookApiService.updateBook(editedBook);
    if(result){
      const updatedBooks = books.map((book) => (book.id === editedBook.id ? editedBook : book));
      setBooks(updatedBooks);
      setSelectedBook(null);
    }
    else{
      setError('failed to update book');
    }
  }

  useEffect(() => {
    console.log('calling useEffect');
    const fetchData = async () => {
        try {
            const result = await BookApiService.getAllBooks();
            console.log(result);
            setBooks(result);
            setsampleBooks(result);
        } catch (err) {
            setError(err.message);
        }
    };

    fetchData();
}, []);
  
  const handleSearch = (searchTerm) => {
    debugger;
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
      {error && <><p>{error}</p><button onClick={() => setError(null)}>x</button></>}
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} onSelectBook={handleSelectBook} />

      <button
        className='add-button'
        style={{ borderRadius: '10px', padding: '10px', margin: '10px', backgroundColor: 'blue', color: 'white' }}
        onClick={() => setShowAddBook(true)}
      >
        Add New Book
      </button>

    {/* add an edit button here */}
      {selectedBook && (
        <BookDetails book={selectedBook} onClose={handleCloseDetails} onSave={handleEditBook} onDelete={handleDelete} />
      )}

      {showAddBook && <BookAddNew onClose={() => setShowAddBook(false)} onSave={handleAddBook} />}
    </div>
  );
}

export default App
