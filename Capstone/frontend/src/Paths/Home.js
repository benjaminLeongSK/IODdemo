import { useContext, useState } from "react";
import { Review } from "../Components/Review";
import { reviewsContext } from "../App";
import { TextField } from "@mui/material";



export const Home = () => {

    const {reviews, isReviewSaved} = useContext(reviewsContext)

    const [search, setSearch] = useState("")


    return (
        <>  
            <div className="search-bar">
                <TextField 
                    fullWidth 
                    label="Search for restaurants..." 
                    className="search-bar"
                    id="fullWidth"
                    onChange={(e) => setSearch(e.target.value)} 
                />
            </div>
            <div className="review-grid">
                {reviews
                .filter((review) => {
                    return search.toLowerCase() === "" 
                    ? review 
                    : review.restaurantName.toLowerCase().includes(search) || review.tags.toString().toLowerCase().includes(search)
                })
                .map((review) => (
                    <div key={review._id}>
                        <Review review={review} isReviewSaved={isReviewSaved} />
                    </div>
                ))}
            </div>
        </>
    )
}