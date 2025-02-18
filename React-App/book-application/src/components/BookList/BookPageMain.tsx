import { useSelector ,useDispatch } from "react-redux";
import Header from "./Header.js";
import SearchBar from "./SearchBar.js";
import BookList from "./BookList.js";
import BookDetails from "./BookDetails.js";
import BookAddNew from "./BookAddNew.js";
import  Cart  from "../cart/cart.js";
import  BookApiService  from "../../services/book.service.js";
import { useEffect } from "react";
import { setBooks, setSampleBooks, setSelectedBook, toggleAddBook, setError } from "../../store/bookSlice.js";
import { Book } from "../../models/books.js";

interface BookState{
  books : Book[];
  sampleBooks : Book[];
  selectedBook : Book | null;
  showAddBook : boolean;
  error : string | null
}

const BookPageMain : React.FC = () =>  {


const {books  , sampleBooks, selectedBook ,showAddBook ,  error} = useSelector(
    (state : {books : BookState}) => state.books
);    

const dispatch = useDispatch();



  const handleDelete = async (id : number) =>{
     
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
  const handleAddBook = async (newBook : Book) => {
    
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
        // dispatch(setError((error as Error).message || ""));
        if(error instanceof Error){
          dispatch(setError(error.message || "Unknown Error Has Occured"))
        }else{
          dispatch(setError("Some Error has occured"))
        }
    }
        
  }

  const  handleEditBook = async (editedBook : Book) => {
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
        } catch (error) {
            // setError(err.message);
            if(error instanceof Error){
              dispatch(setError(error.message || "Unknown Error Has Occured"))
            }else{
              dispatch(setError("Some Error has occured"))
            }
        }
    };

    fetchData();
}, [dispatch]);
  
  const handleSearch = (searchTerm: string) => {
     
    const filteredBooks = sampleBooks.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(setBooks(filteredBooks));
  };
    const handleSelectBook = (book : Book) => {
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
