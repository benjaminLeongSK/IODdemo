import { useState } from "react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
        <>
            <div className="todolist-container">
                <div className="todolist-item">
                    <div className="todo-item">
                        <p 
                            style={{ textDecoration: props.completed && "line-through" }}
                        >
                            {props.title}
                        </p>
                    </div>
                    <div>
                        <button className="button-edit" onClick={() => setToggle(!toggle)}>
                            {toggle ? <CloseIcon sx={{fontSize: 30}}/> : <EditIcon sx={{fontSize: 30}}/>}
                        </button>
                        <button className="button-complete" onClick={handleComplete}><CheckBoxIcon sx={{fontSize: 30}}/></button>
                        <button className="button-delete" onClick={handleDelete}><DeleteForeverIcon sx={{fontSize: 30}}/></button>
                    </div>
                </div>
            </div>
            <div className="todo-update">
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
        </>
     );
}
 
export default Todo;