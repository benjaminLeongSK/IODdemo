import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ReactImageFileToBase64 from "react-file-image-to-base64"

export const Auth = () => {

    return (
        <div className="auth">
            <Login />
            <Register />
        </div>
    );
};

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [, setCookies] = useCookies(["access_token"])

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/auth/login", {username, password})

            setCookies("access_token", response.data.token)
            window.localStorage.setItem("userID", response.data.userID)
            window.localStorage.setItem("username", response.data.username)
            navigate("/")
        } catch (err) {
            alert("username or password is incorrect")
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Form 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <button type="submit">Login</button>
        </form>
    );
};

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const [profilePicture, setProfilePicture] = useState([])


    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post("http://localhost:5000/auth/register", {username, password, bio, profilePicture})
            alert("Registration successful! Proceed to Login")
        } catch (err) {
            console.error(err)
        }
    }

    const handleOnCompleted = files => {
        setProfilePicture(files[0].base64_file);
    };
    
    return (
        <form onSubmit={onSubmit}>
            <Form 
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <div>
                <label htmlFor="bio">Share about yourself:</label>
                <input 
                    type="text" 
                    id="bio" 
                    value={bio}
                    onChange={(event) => setBio(event.target.value)}
                >
                </input>
            </div>
            <div>
                <ReactImageFileToBase64 onCompleted={handleOnCompleted} />
            </div>
            <div>
                <img src={profilePicture} alt="preview"/>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};


const Form = ({username, setUsername, password, setPassword, label}) => {
    return (
        <div>
                <h2>{label}</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                    type="text" 
                    id="username" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>
                </div>
        </div>
    )
}