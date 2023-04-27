import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ReactImageFileToBase64 from "react-file-image-to-base64"

export const Auth = () => {

    return (
        <div className="auth">
            <div className="auth-box">
                <Login />
                <Register />
            </div>
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
            window.localStorage.setItem("profilePicture", response.data.profilePicture)
            console.log(response.data)
            navigate("/")
        } catch (err) {
            alert("username or password is incorrect")
        }
    }

    return (
        <form className="login-box" onSubmit={onSubmit}>
            <h2>Login</h2>
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
    const [profilePicture, setProfilePicture] = useState("")


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
        <>
            <form className="register-box" onSubmit={onSubmit}>
                <h2>Register</h2>
                <Form 
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                />
                <div className="form-group">
                    <label htmlFor="bio">Share about yourself:</label>
                    <textarea 
                        rows="8"
                        type="text" 
                        id="bio" 
                        value={bio}
                        onChange={(event) => setBio(event.target.value)}
                    >
                    </textarea>
                    <button type="submit">Register</button>
                </div>
            </form>
                <div className="user-photo-input">
                    <img
                        src={
                            profilePicture ? profilePicture 
                            : "https://www.nicepng.com/png/detail/799-7998295_profile-placeholder-woman-720-profile-photo-placeholder-png.png"
                        }
                        alt="preview"
                    />
                    <ReactImageFileToBase64 onCompleted={handleOnCompleted} />
                </div>
        </>
    );
};


const Form = ({username, setUsername, password, setPassword, label}) => {
    return (
        <div>
                <h2>{label}</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input 
                    type="text" 
                    id="username" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>
                </div>

                <div className="form-group">
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