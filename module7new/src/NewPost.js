import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [username, setUsername] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, username };

        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            navigate('/')
        })
    }

    return ( 
        <div className="newPost">
            <h2>Add a New Dweet</h2>

            <form onSubmit={handleSubmit}>
                <label>Dweet title:</label>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    value={title}
                    fullWidth
                    margin="normal"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Dweet body:</label>
                <TextField
                    id="outlined-multiline-static"
                    required
                    label="Required"
                    multiline
                    rows={4}
                    fullWidth
                    margin="normal"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Dweeter:</label>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    value={username}
                    fullWidth
                    margin="normal"
                    onChange={(e) => setUsername(e.target.value)}
                />

               <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default NewPost;