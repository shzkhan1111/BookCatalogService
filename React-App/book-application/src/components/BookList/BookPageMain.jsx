import { useSelector ,useDispatch } from "react-redux";
import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import BookList from "./BookList.jsx";
import BookDetails from "./BookDetails.jsx";
import BookAddNew from "./BookAddNew.jsx";
import  Cart  from "../cart/cart.jsx";
import  BookApiService  from "../../services/book.service.js";
import { useEffect } from "react";
import { setBooks, setSampleBooks, setSelectedBook, toggleAddBook, setError } from "../../store/bookSlice.js";


function BookPageMain() {

const {books  , sampleBooks, selectedBook ,showAddBook ,  error} = useSelector(
    (state) => state.books
);    

const dispatch = useDispatch();



  const handleDelete = async (id) =>{
     
    const result = await BookApiService.deleteBook(id);
    if(result){
      const updatedBooks = books.filter((book) => book.id !== id);

        dispatch(setBooks(updatedBooks));
        dispatch(setSelectedBook(null));
    }
    else{
      dispatch(setError('failed to delete book'));
    }
  } 

  // this function will be passed to the child component <BookAddNew /> to handle the new book
  const handleAddBook = async (newBook) => {
    
    try {
       
      const result = await BookApiService.createBook(newBook);
      console.log('add new book' , result);
      if(result){

        dispatch(setBooks([...books, result]));
        dispatch(toggleAddBook(false));
        dispatch(setSampleBooks([...sampleBooks, newBook]));
      }
      else{

        dispatch(setError('failed to create a new book'));
      }
    } catch (error) {
        dispatch(setError(error.message));
    }
        
  }

  const  handleEditBook = async (editedBook) => {
    const result = await BookApiService.updateBook(editedBook);
    if(result){
      const updatedBooks = books.map((book) => (book.id === editedBook.id ? editedBook : book));

    dispatch(setBooks(updatedBooks));
    dispatch(setSelectedBook(null));
    }
    else{
    dispatch(setError('failed to update book'));
    }
  }

  useEffect(() => {
    console.log('calling useEffect');
    const fetchData = async () => {
        try {
            const result = await BookApiService.getAllBooks();
            console.log(result);
            dispatch(setBooks(result));
            dispatch(setSampleBooks(result));
        } catch (err) {
            // setError(err.message);
            dispatch(setError(err.message));
        }
    };

    fetchData();
}, [dispatch]);
  
  const handleSearch = (searchTerm) => {
     
    const filteredBooks = sampleBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(setBooks(filteredBooks));
  };
    const handleSelectBook = (book) => {
      dispatch(setSelectedBook(book));
    };

  const handleCloseDetails = () => {
    dispatch(setSelectedBook(null));
  };
  

  return (
    <div className="app" style={{width: '100%', margin: 'auto', maxWidth: '500rem'}}>
      {/* <Header /> */}
      {error && <><p>{error}</p><button onClick={() => dispatch(setError(null))}>x</button></>}
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} onSelectBook={handleSelectBook} />

      <button
        className='add-button'
        style={{ borderRadius: '10px', padding: '10px', margin: '10px', backgroundColor: 'blue', color: 'white' }}
        onClick={() => dispatch(toggleAddBook(true))}
      >
        Add New Book
      </button>
      <Cart />

    {/* add an edit button here */}
      {selectedBook && (
        <BookDetails book={selectedBook} onClose={handleCloseDetails} onSave={handleEditBook} onDelete={handleDelete} />
      )}

      {showAddBook && <BookAddNew onClose={() =>dispatch(toggleAddBook(false))} onSave={handleAddBook} />}

      
    </div>
    
  );
}

export default BookPageMain
