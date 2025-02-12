import React from 'react';

const BookDetails = ({ book, onClose }) => {
    if (!book) {
        return null
    }

    return (
        <div className='book-details'>
            <button onClick={onClose}>Close</button>
            <h2>{book.title}</h2>
            <h3>By {book.author}</h3>
            <p>{book.description}</p>
        </div>
    )

};

export default BookDetails;
