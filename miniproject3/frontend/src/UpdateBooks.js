import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
 

const UpdateBooks = (props) => {
    const location = useLocation();
    const {state} = location;

    const [newBook, setNewBook] = useState({
        BookName: state.BookName,
        Author: state.Author,
        Description: state.Description
    })
    

    const navigate = useNavigate();

    let {bookId} = useParams();


    const handleChange = (e) => {
        setNewBook((prev) =>({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {    
        e.preventDefault()
        try{
            await axios.put('http://localhost:8080/api/books/' + bookId, newBook);
            navigate('/')
        }catch(err) {
            console.log(err)
        }        
    }
    return ( 
        <div className="form">
            <h1>Update a book</h1>
            <input 
                type="text" 
                placeholder='BookName' 
                onChange={handleChange} 
                name='BookName'
                value={newBook.BookName}
            />
            <input 
                type="text" 
                placeholder='Author' 
                onChange={handleChange} 
                name='Author'
                value={newBook.Author}
            />
            <input 
                type="text" 
                placeholder='Description' 
                onChange={handleChange} 
                name='Description'
                value={newBook.Description}
            />

            <button onClick={handleClick}>Update</button>
        </div>
     );
}
 
export default UpdateBooks;