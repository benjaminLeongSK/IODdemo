import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddTodo = () => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (title !== "") {
        await addDoc(collection(db, "todos"), {
          title,
          completed: false,
        });
        setTitle("");
      } else {
        alert("You have not entered a todo yet")
      }
    };
    return ( 
        <form onSubmit={handleSubmit}>
            <div className="addtodo-container">
            <input
                type="text"
                placeholder="Enter todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            </div>
            <div className="button_container">
            <button>
                <AddCircleIcon sx={{fontSize: 35}}/>
            </button>
            </div>
      </form>
     );
}
 
export default AddTodo;