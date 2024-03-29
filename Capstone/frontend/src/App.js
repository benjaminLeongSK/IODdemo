import React, { createContext,useEffect, useState } from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home } from "./Paths/Home"
import { Auth } from "./Paths/Auth"
import { Create } from "./Paths/Create"
import { SavedReviews } from "./Paths/Saved"
import { Navbar } from './Components/Navbar';
import axios from "axios"
import { Users } from './Paths/Users';
import Snackbar from '@mui/material/Snackbar';


export const reviewsContext = createContext(null);



const App = () => {
    const [ reviews, setReviews ] = useState([]);
    const [ savedReviews, setSavedReviews ] = useState([]);
    const userID = window.localStorage.getItem("userID");

    const fetchReviews = async () => {
        try {
            const response = await axios.get( "http://localhost:5000/posts")
            setReviews(response.data);
          } catch (error) {
            console.error(error);
          }
    };

    const fetchSavedReviews = async () => {
        try {
            const response = await axios.get( `http://localhost:5000/posts/savedReviews/ids/${userID}`);
            setSavedReviews(response.data.savedReviews);
          } catch (error) {
            console.error(error);
          };
        };

    useEffect(() => {
        fetchReviews();
        fetchSavedReviews();
// eslint-disable-next-line 
    }, []);

    const isReviewSaved = (id) => savedReviews.includes(id);

    const updateReview = (newData) => {
        let reviewsCopy = [...reviews]
        const target = reviewsCopy.findIndex(review => review._id === newData._id)
        reviewsCopy.splice(target, 1, newData)
        setReviews(reviewsCopy);
    } 

    const updateDelete = (reviewID) => {
        let reviewsCopy = [...reviews]
        const target = reviewsCopy.findIndex(review => review._id === reviewID)
        reviewsCopy.splice(target, 1)
        console.log(target)
        setReviews(reviewsCopy);
    } 

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const value = {reviews,savedReviews,isReviewSaved,updateReview,fetchReviews, setSavedReviews, updateDelete, setOpen}

    return (
        <div>
            <Router>
                <Navbar />
                <reviewsContext.Provider value={value}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/auth" element={<Auth />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/saved" element={<SavedReviews />} />
                        <Route path="/users/:userId" element={<Users />} />
                    </Routes>
                    <Snackbar
                        anchorOrigin={{ vertical:"top", horizontal:"center" }}
                        open={open}
                        onClose={handleClose}
                        message="Review Created!"
                        key={"topcenter"}
                        autoHideDuration={3000}
                    />
                </reviewsContext.Provider>
            </Router>
        </div>
    )
}

export default App;