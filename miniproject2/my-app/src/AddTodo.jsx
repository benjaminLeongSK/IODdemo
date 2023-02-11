import React, {useState} from 'react';

function AddTodo() {
    const [todo, setTodo] = useState("");

    const handleSubmit = () => {
        console.log(todo)
    };

    return (
        <div>
            <input type="text" placeholder="Add a Todo" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default AddTodo;
