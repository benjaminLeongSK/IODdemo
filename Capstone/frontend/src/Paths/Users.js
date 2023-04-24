import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { reviewsContext } from "../App";
import { Review } from "../Components/Review";

export const Users = () => {
    
    let { userId } = useParams();
    const [user, setUser] = useState([]);
    const { reviews } = useContext(reviewsContext);

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

    return (
        <>
            <div>
                <h2>{user.username}</h2>
                <img src={user.profilePicture} alt="pp"/>
                <p>About Me: {user.bio}</p>
                <p>Joined: {user.createdAt}</p>
            </div>
            <div>
                <h2>My reviews</h2>
                {reviews.filter((review)=> (review.reviewUser === user._id)).map((review) =>(
                    <li key={review._id}>
                        <Review review={review} />
                    </li>
                ))}
            </div>
        </>
    )
}