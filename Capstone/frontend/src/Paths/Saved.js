import { useContext } from "react";
import { reviewsContext } from "../App";
import { Review } from "../Components/Review";


export const SavedReviews = () => {
    const { reviews, savedReviews } = useContext(reviewsContext);

    return (
        <div>
            <h1>Saved Reviews</h1>
            <ul>
                {reviews.filter((item)=>savedReviews.includes(item._id)).map((review) => (
                    <li key={review._id}>
                        <Review review={review} />
                    </li>
                ))}
            </ul>
        </div>
    )
}