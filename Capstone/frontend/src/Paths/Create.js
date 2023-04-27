import ReactImageFileToBase64 from "react-file-image-to-base64"
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { reviewsContext } from "../App";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';



export const Create = () => {
    const {fetchReviews, setOpen} = useContext(reviewsContext);
    const getUserID = window.localStorage.getItem("userID");
    const getUsername = window.localStorage.getItem("username");
    const navigate = useNavigate();


    const [review, setReview] = useState({
        restaurantName: "",
        restaurantAddress: "",
        rating: "",
        description: "",
        tags: [],
        image: [],
        reviewUser: getUserID,
        username: getUsername
    });

    const labels = {
        0.5: 'Terrible',
        1: 'Bad Tasting',
        1.5: 'Poor',
        2: 'Bland',
        2.5: 'So-so',
        3: 'Fair Value ',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Delicious',
        5: 'Super Delicious',
      };

    const getLabelText =(value) => {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
    }
    const [hover, setHover] = useState(-1);
    const [currentTag, setCurrentTag] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setReview({ ...review, [name]: value });
    };

    const handleAddTag = () => {
        const tags = [...review.tags, currentTag];
        setReview({ ...review, tags });
        setCurrentTag("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post( "http://localhost:5000/posts/", review)
          fetchReviews();
          setOpen(true);
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
            <form onSubmit={handleSubmit} className="create-form">
                <div className="form-group">
                    <label htmlFor="restaurantName"> Restaurant Name</label>
                    <input 
                        type="text" 
                        id="restaurantName" 
                        name="restaurantName"
                        value={review.restaurantName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="restaurantAddress"> Restaurant Address</label>
                    <input 
                        type="text" 
                        id="restaurantAddress" 
                        name="restaurantAddress"
                        value={review.restaurantAddress}
                        onChange={handleChange}
                    />
                </div>
                <Box
                    sx={{
                        width: 350,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <label htmlFor="ratings">Ratings:</label>
                    <Rating
                        name="hover-feedback"
                        value={review.rating}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                        setReview({ ...review, rating: newValue })
                        }}
                        onChangeActive={(event, newHover) => {
                        setHover(newHover);
                        }}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    {review.rating !== null && (
                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : review.rating]}</Box>
                    )}
                </Box>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={review.description}
                        onChange={handleChange}
                        rows="10"
                    ></textarea>
                    <input
                        type="text"
                        name="currentTag"
                        value={currentTag}
                        onChange={(event) => setCurrentTag(event.target.value)}
                    />
                    <button type="button" onClick={handleAddTag}>
                        Add tags
                    </button>
                </div>
                <div className="review-tags-box">
                    {review.tags.map((tag, index) => {
                        return (
                            <p key={`${tag}-${index}`} className="review-tag">
                                {tag}
                            </p>
                        );
                    })}
                </div>
                <div>
                     <ReactImageFileToBase64 multiple={true} onCompleted={handleOnCompleted} />
                </div>
                <div>
                    {review.image.map((image) => {
                        return <img src={image} alt="something" className="review-images"/>
                    })}
                </div>
                <button type="submit">Create Review</button>
            </form>

        </div>
    )
}