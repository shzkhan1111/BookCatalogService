import React from 'react';
import BookCard from './BookCard';
import { Book } from '../../models/books';

//declare interface for props

interface BookListProps{
  books: Book[]
  onSelectBook : (book : Book) => void
}

const BookList : React.FC<BookListProps> = ({ books, onSelectBook }) => {
    if (!books || books.length === 0) {
      return <p>No books available.</p>;
    }
  
    return (
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onSelect={onSelectBook} />
        ))}
      </div>
    );
  };

export default BookList;
