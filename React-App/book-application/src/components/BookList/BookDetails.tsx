import React , { useEffect, useState } from 'react';
import { addItemToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { Book } from '../../models/books';

interface BookDetailsProps{
    book : Book;
    onClose: () => void;
    onSave : (Book : Book) => void;
    onDelete : (id : number) => void
}

const BookDetails : React.FC<BookDetailsProps> = ({ book, onClose , onSave , onDelete}) => {
    const dispatch = useDispatch(); 
    const [isEditingBook , setisEditingBook] = useState(false);
    const [editedBook , setEditedBook] = useState(book);
    if (!book) {
        return null
    }

    const HandleAddCart = () => {
        console.log(book)
        dispatch(addItemToCart(book));
    }
    const handleSave = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSave(editedBook);
        setisEditingBook(false);
    }
    const handleDelete = (e : React.MouseEvent<HTMLButtonElement>) => {
         
        e.preventDefault();
        onDelete(editedBook.id);
        setisEditingBook(false);
        onClose();
    }
    return (
        <div className='book-details'>
            <button onClick={onClose}>Close</button>
            {/* Editing  */}
            {isEditingBook ? (
                <>
                    <input type='text' value={editedBook.title} onChange={(e) => setEditedBook({...editedBook, title: e.target.value})} />
                    <input type='text' value={editedBook.author} onChange={(e) => setEditedBook({...editedBook, author: e.target.value})} />
                    <input type='text' value={editedBook.description} onChange={(e) => setEditedBook({...editedBook, description: e.target.value})} />
                    <input type='text' value={editedBook.price} onChange={(e) => setEditedBook({...editedBook, price: Number(e.target.value)})} />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setisEditingBook(false)}>Cancel</button>
                </>
            )
        :(
        <>
        <h2>{book.title}</h2>
            <h3>By {book.author}</h3>
            <h4>${book.price}</h4>
            <p>{book.description}</p>
            <button onClick={() => setisEditingBook(true)}>Edit Book</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={HandleAddCart}>Add to Cart</button>
        </>
        )
        }
        </div>
    )

};

export default BookDetails;
