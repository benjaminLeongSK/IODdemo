import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { reviewsContext } from "../App";
import { Review } from "../Components/Review";
import { Divider } from "@mui/material";
import ReactImageFileToBase64 from "react-file-image-to-base64";

export const Users = () => {
    
    let { userId } = useParams();
    const [user, setUser] = useState([]);
    const { reviews } = useContext(reviewsContext);
    const [toggle, setToggle] = useState(false)
    const [updateUsername, setUpdateUsername] = useState("");
    const [updateBio, setUpdateBio] = useState("");
    const [updateProfilePicture, setUpdateProfilePicture] = useState([])

    const fetchUser = async () => {
        try {
            const response = await axios.get( `http://localhost:5000/auth/user/${userId}`)
            setUser(response.data)
          } catch (error) {
            console.error(error);
          }
    };

    useEffect(() => {
        fetchUser()
    // eslint-disable-next-line
    }, [])

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`http://localhost:5000/auth/user/${userId}`, {bio:updateBio, username:updateUsername, profilePicture:updateProfilePicture})
            fetchUser()
            setToggle(!toggle)
        } catch (error) {
            console.error(error)
        }
    }

    const handleToggle = () => {
        setToggle(!toggle);
    }
    


    const handleOnCompleted = files => {
        setUpdateProfilePicture(files[0].base64_file);
    };
    
    return (
        <>
            <div className="user-bio">
                    {toggle ? 

                        <form className="edit-form-group" onSubmit={onSubmit}> 
                            <label htmlFor="username">Username:</label>
                            <input 
                            type="text" 
                            id="username" 
                            value={updateUsername}
                            onChange={(event) => setUpdateUsername(event.target.value)}></input>

                            <ReactImageFileToBase64 onCompleted={handleOnCompleted} />

                            <label htmlFor="updateBio">Change Bio:</label>
                            <input 
                                rows="12"
                                type="text" 
                                id="bio" 
                                value={updateBio}
                                onChange={(event) => setUpdateBio(event.target.value)}
                            ></input>
                            <button type="submit">Update</button>
                        </form>
                        :
                        <div>
                            <h2>{user.username}</h2>
                            <img src={user.profilePicture} alt="pp"/>
                            <p>About Me: {user.bio}</p>
                            <p>Joined: {new Date(user.createdAt).toLocaleString("en-GB", options)}</p>
                            <button onClick={handleToggle}>Update</button>
                        </div>
                    }
            </div>
                <div>
                    <Divider className="header-title">Reviews</Divider>
                    <div className="review-grid">
                    {reviews.filter((review)=> (review.reviewUser === user._id)).map((review) =>(
                    <div key={review._id}>
                        <Review review={review} />
                    </div>
                    ))}
                    </div>
                </div>
        </>
    )
}