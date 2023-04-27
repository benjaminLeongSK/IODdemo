import axios from "axios";
import { useContext } from "react";
import { reviewsContext } from "../App";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Review = ({review}) => {

    const {setSavedReviews, updateReview, savedReviews, updateDelete} = useContext(reviewsContext);
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

    const deleteReview = async (review) => {
        try {
            await axios.delete("http://localhost:5000/posts/delete", {data: {review}})
            updateDelete(review)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="review-box">
            {review.image.map((image) => {
                return <img src={image} alt={review.restaurantName} className="review-images"/>
            })}
                <div className="details">
                    <div className="review-head">
                        <div>
                            <h2>{review.restaurantName}</h2>
                            <span style={{ marginBottom: "0.5em", opacity: 0.7 }}>
                            {review.restaurantAddress}
                            </span>
                        </div>
                        <Rating value={review.rating} readOnly></Rating>
                    </div>
                    <div>
                        <div className="review-tags-box">
                            {review.tags.map((tag) => {
                                return <p className="review-tag">{tag}</p>
                            })}
                        </div>
                        <hr></hr>
                        <p className="description">{review.description}</p>
                    </div>
                </div>

                <div className="review-actions">
                    <p>Posted by: 
                        <Link to={`/users/${review.reviewUser}`}>{review.username}</Link>
                    </p>
                    <div className="action-btns">
                        <div class="likes-box delete-box">
                            <span onClick={() => deleteReview(review._id)}>
                                {review.reviewUser === userID ? <DeleteForeverIcon /> : <></>}
                            </span>
                        </div>
                        <div class="save-box likes-box">
                            <span onClick={() => saveReview(review._id)}>
                                {savedReviews.includes(review._id) ? (
                                    <BookmarkIcon />
                                ) : (
                                    <BookmarkBorderIcon />
                                )}
                            </span>
                        </div>
                        <div className="likes-box">
                            <span onClick={() => likeReview(userID, review._id)}>
                            {review.likes.includes(userID) ? (
                                <FavoriteIcon />
                            ) : (
                                <FavoriteBorderIcon />
                            )}
                            </span>
                            <p>{review.likes.length}</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}