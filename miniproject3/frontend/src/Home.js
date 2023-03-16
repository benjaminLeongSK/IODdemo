import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";                

const Home = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8080/api/books")
                setBooks(res.data.data);
                console.log(res.data.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:8080/api/books/' + id);
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
        console.log(id)
    }



    return ( 
        <div className="homepage">
            <h1>Ben's bookshop</h1>
            <div className="all-books">
                {books.map((book)=>(
                    <div className="book" key={book.id}>
                        <h2>{book.BookName}</h2>
                        <h3>Written by: {book.Author}</h3>
                        <p>{book.Description}</p>
                        <button>
                            <Link to={`/update/${book.id}`} state={book} >Update</Link>
                        </button>
                        <button onClick={()=>{
                            handleDelete(book.id)
                        }}>Delete</button>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">Add a new book</Link>
            </button>
        </div>
     )
}
 
export default Home;