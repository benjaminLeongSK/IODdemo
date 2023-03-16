import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AddBooks = () => {
    const [newBook, setNewBook] = useState({
        BookName:"",
        Author:"",
        Description:""
    })
    
    const navigate = useNavigate()

    const handleChange = (e) => {
        setNewBook((prev) =>({ ...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {    
        e.preventDefault()
        try{
            await axios.post('http://localhost:8080/api/books/create', newBook);
            navigate('/')
        }catch(err) {
            console.log(err)
        }        
    }
    return ( 
        <div className="form">
            <h1>Add a new book</h1>
            <input 
                type="text" 
                placeholder='BookName' 
                onChange={handleChange} 
                name='BookName'
            />
            <input 
                type="text" 
                placeholder='Author' 
                onChange={handleChange} 
                name='Author'
            />
            <input 
                type="text" 
                placeholder='Description' 
                onChange={handleChange} 
                name='Description'
            />

            <button onClick={handleClick}>Add</button>
        </div>
     );
}
 
export default AddBooks;