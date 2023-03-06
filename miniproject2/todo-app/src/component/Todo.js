import { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const Todo = (props) => {
    const [updateTodo, setUpdateTodo] = useState(props.title);
    const [toggle, setToggle] = useState(false);
    const docRef = doc(db, "todos", props.id)

    const handleUpdate = async () => {
        await updateDoc(docRef, {title: updateTodo})
        setToggle(!toggle)
    }
    const handleComplete = async () => {
        await updateDoc(docRef, {completed: !props.completed})
    }
    const handleDelete = async () => {
        await deleteDoc(docRef)
    }

    return ( 
        <div key={props.id}>
            <div>
                <p 
                    style={{ textDecoration: props.completed && "line-through" }}
                >
                    {props.title}
                </p>
                <button onClick={() => setToggle(!toggle)}>
                    {toggle ? "cancel" : "edit"}
                </button>
                <button onClick={handleComplete}>Completed</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
            {toggle ? 
                <div>
                    <input
                        value={updateTodo}
                        onChange={(e) => setUpdateTodo(e.target.value)}
                    ></input>
                    <button onClick={handleUpdate}>Update</button>
                </div> 
            : null}
        </div>
     );
}
 
export default Todo;