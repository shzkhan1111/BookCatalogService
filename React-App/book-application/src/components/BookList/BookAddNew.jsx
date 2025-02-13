import React from 'react';


const BookAddNew = ({onClose , onSave}) =>{

    const [formData , setFormData] = React.useState({
        title: '',
        author: '',
        description: '',
        price: 0
    });

    const handleChange = (e) => { 
        e.preventDefault();
        onSave(formData);
    };

    
    return (
        <>
        <div className="book-details" style={{width: '80%', margin: 'auto' , maxWidth: '500rem'}}>
            <h2>Add New Book</h2>
            <form>
            <input type='text' placeholder='Book Title'
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            />

            <input type='text' placeholder='Author'
            value={formData.author}
            onChange={(e) => setFormData({...formData, author: e.target.value})}
            />
            <input type='number' placeholder='$0.00' 
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            />
            <br/>
            <textarea placeholder='Description'
            value={formData.description}
            style={{width: '50%', height: '100px'}}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            ></textarea>

            <div className='form-buttons'>
                <button onClick={onClose} style={{borderRadius: '10px', padding: '10px', margin: '10px' , backgroundColor: 'blue', color: 'white'}}>Cancel</button>
                <button type='submit'
                style={{borderRadius: '10px', padding: '10px', margin: '10px' , backgroundColor: 'blue', color: 'white'}} 
                onClick={handleChange}>Save</button>
            </div>
            </form>
        </div>
        </>
    )
}


export default BookAddNew;