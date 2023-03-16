import React, { useState, useEffect } from "react";
import { db } from "../firebase"
import { collection, query, onSnapshot} from "firebase/firestore";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "todos"));
        const unsub = onSnapshot(q, (querySnapshot) => {
          let todosArray = [];
          querySnapshot.forEach((doc) => {
            todosArray.push({ ...doc.data(), id: doc.id });
          });
          setTodos(todosArray);
        });
        return () => unsub();
      }, []);

    return (
        <div>
            {todos.map((todo) =>(
                <Todo key={todo.id}{...todo}/>
            ))}
        </div>
    );
};
export default TodoList;