import axios from "axios";
import { useContext } from "react"
import { reviewsContext } from "../App";
import { Link } from "react-router-dom";

export const Review = ({review}) => {

    const {setSavedReviews, updateReview, savedReviews} = useContext(reviewsContext);
    const userID = window.localStorage.getItem("userID");

    const saveReview = async (reviewID) => {    
        try {
            const response = await axios.put( "http://localhost:5000/posts", {reviewID, userID})
            setSavedReviews(response.data.savedReviews)
          } catch (error) {
            console.error(error);
          }
    }

    const likeReview = async (userID, reviewID) => {
        try {
            const response = await axios.put("http://localhost:5000/posts/like", {userID, reviewID})
            updateReview(response.data.data)
        } catch (error) {
            console.error(error);
        }
    }

    return <div>
                <div>
                    <h2>{review.restaurantName}</h2>
                </div>
                <div>
                    <h3>Tags: {review.tags.join(", ")}</h3>
                    <h3>Ratings: {review.rating}</h3>
                    {review.image.map((image) => {
                        return <img src={image} alt={review.restaurantName}/>
                    })}
                    <p>{review.description}</p>
                    <p><i>{review.restaurantAddress}</i></p>
                    <p>Posted by: <Link to={`/users/${review.reviewUser}`}>{review.username}</Link></p>
                    <button 
                    onClick={() => saveReview(review._id)}
                    > 
                    {savedReviews.includes(review._id) ? "Unsave" : "save"}
                    </button>
                    <button onClick={() => likeReview(userID, review._id)}>
                        { review.likes.includes(userID) ? "Unlike!" : "like!"}
                    </button>
                    <h5>liked by {review.likes.length} users</h5>
                </div>
         </div>
}