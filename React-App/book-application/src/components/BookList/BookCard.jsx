import React from 'react';

const BookCard  = ({book , onSelect}) => {

    return(
        <div className="book-card" onClick={() => onSelect(book)}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>{book.description}</p>
        </div>
    )
};

export default BookCard;
