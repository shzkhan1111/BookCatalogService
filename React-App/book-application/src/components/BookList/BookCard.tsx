import React from 'react';
import { Book } from '../../models/books';
interface BookListProps{
    book : Book,
    onSelect : (book : Book) => void
}
const BookCard : React.FC<BookListProps> = ({book , onSelect}) => {

    return(
        <div className="book-card" onClick={() => onSelect(book)}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>{book.description}</p>
        </div>
    )
};

export default BookCard;
