import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./firebase";

const AllTodos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        await getDocs(collection(db, "todos")).then((response) => {
            const newData = response.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setTodos(newData);
            console.log(todos, newData);
        });
    };

    return (
        <div>
            {todos?.map((todo, i) =>(
                <p key={i}>{todo.todo}</p>
            ))}
        </div>
    );
};

export default AllTodos;