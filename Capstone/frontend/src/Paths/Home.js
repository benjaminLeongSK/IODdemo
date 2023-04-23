import { useContext } from "react";
import { Review } from "../Components/Review";
import { reviewsContext } from "../App";


export const Home = () => {

    const {reviews, isReviewSaved} = useContext(reviewsContext)

    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {reviews.map((review) => (
                    <li key={review._id}>
                        <Review review={review} isReviewSaved={isReviewSaved}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}