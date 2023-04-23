// import FileBase from "react-file-base64";
import ReactImageFileToBase64 from "react-file-image-to-base64"
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { reviewsContext } from "../App";


export const Create = () => {
    const {fetchReviews} = useContext(reviewsContext)
    const getUserID = window.localStorage.getItem("userID");
    const getUsername = window.localStorage.getItem("username");
    const navigate = useNavigate();

    const [review, setReview] = useState({
        restaurantName: "",
        restaurantAddress: "",
        rating: "",
        description: "",
        tags: [],
        image: "",
        reviewUser: getUserID,
        username: getUsername
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReview({ ...review, [name]: value });
    };

    const handleTagChange = (event, index) => {
        const { value } = event.target;
        const tags = [...review.tags];
        tags[index] = value;
        setReview({ ...review, tags });
    };

    const handleAddTag = () => {
        const tags = [...review.tags, ""];
        setReview({ ...review, tags });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post( "http://localhost:5000/posts/", review)
          fetchReviews();
          alert("Recipe Created");
          navigate("/");
        } catch (error) {
          console.error(error);
        }
      };

      
    const handleOnCompleted = files => {
        const result = files.map((file)=> {
            return file.base64_file
        })
        setReview({ ...review, image: result })
    };


    return(
        <div className="create-recipe">
            <h2> New Review</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="restaurantName"> Restaurant Name</label>
                <input 
                    type="text" 
                    id="restaurantName" 
                    name="restaurantName"
                    value={review.restaurantName}
                    onChange={handleChange}
                />

                <label htmlFor="restaurantAddress"> Restaurant Address</label>
                <input 
                    type="text" 
                    id="restaurantAddress" 
                    name="restaurantAddress"
                    value={review.restaurantAddress}
                    onChange={handleChange}
                />

                <label htmlFor="rating">Rating</label>
                <input
                    type="number"
                    id="rating"
                    name="rating"
                    value={review.rating}
                    onChange={handleChange}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={review.description}
                    onChange={handleChange}
                ></textarea>

                <label htmlFor="tags">Tags</label>
                {review.tags.map((tags, index) => (
                <input
                    key={index}
                    type="text"
                    name="tags"
                    value={tags}
                    onChange={(event) => handleTagChange(event, index)}
                />
                ))}
                <button type="button" onClick={handleAddTag}>
                Add tags
                </button>

                <div>
                    {/* <FileBase 
                        type="file" 
                        name="image"
                        id="image"
                        multiple={false}
                        onDone={({base64}) => setReview({ ...review, image: base64 })}
                    /> */}
                     <ReactImageFileToBase64 multiple={true} onCompleted={handleOnCompleted} />
                </div>
                <button type="submit">Create Recipe</button>
            </form>
        </div>
    )
}