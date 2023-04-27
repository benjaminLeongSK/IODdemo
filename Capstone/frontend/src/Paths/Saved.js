import { useContext } from "react";
import { reviewsContext } from "../App";
import { Review } from "../Components/Review";
import { Divider } from "@mui/material";


export const SavedReviews = () => {
    const { reviews, savedReviews } = useContext(reviewsContext);

    return (
        <div className="saved-reviews">
            <Divider className="header-title">Saved Reviews</Divider>
            <div className="review-grid">
                    {reviews.filter((item)=>savedReviews.includes(item._id)).map((review) => (
                        <div key={review._id}>
                            <Review review={review} />
                        </div>
                    ))}
            </div>
        </div>
    )
}