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
//   const [sampleBooks , setsampleBooks] = useState([]);
//   const [books, setBooks] = useState(sampleBooks);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [showAddBook, setShowAddBook] = useState(false);
//   const [error, setError] = useState(null);

const {books  , sampleBooks, selectedBook ,showAddBook ,  error} = useSelector(
    (state) => state.books
);    

const dispatch = useDispatch();



  const handleDelete = async (id) =>{
     
    const result = await BookApiService.deleteBook(id);
    if(result){
      const updatedBooks = books.filter((book) => book.id !== id);
    //   setBooks(updatedBooks);
    //   setSelectedBook(null);
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
        // setBooks([...books, result]);
        // setShowAddBook(false);
        // setsampleBooks([...sampleBooks, newBook]); 
        dispatch(setBooks([...books, result]));
        dispatch(toggleAddBook(false));
        dispatch(setSampleBooks([...sampleBooks, newBook]));
      }
      else{
        // setError('failed to create a new book');
        dispatch(setError('failed to create a new book'));
      }
    } catch (error) {
    //   setError(error.message);
        dispatch(setError(error.message));
    }
        
  }

  const  handleEditBook = async (editedBook) => {
    const result = await BookApiService.updateBook(editedBook);
    if(result){
      const updatedBooks = books.map((book) => (book.id === editedBook.id ? editedBook : book));
    //   setBooks(updatedBooks);
    //   setSelectedBook(null);
    dispatch(setBooks(updatedBooks));
    dispatch(setSelectedBook(null));
    }
    else{
    //   setError('failed to update book');
    dispatch(setError('failed to update book'));
    }
  }

  useEffect(() => {
    console.log('calling useEffect');
    const fetchData = async () => {
        try {
            const result = await BookApiService.getAllBooks();
            console.log(result);
            // setBooks(result);
            // setsampleBooks(result);
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
    // setBooks(filteredBooks);
    dispatch(setBooks(filteredBooks));
  };
  const handleSelectBook = (book) => {
    // setSelectedBook(book);
    dispatch(setSelectedBook(book));
  };

  const handleCloseDetails = () => {
    // setSelectedBook(null);
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
