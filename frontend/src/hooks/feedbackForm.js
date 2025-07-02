import {useState} from "react";

export default function useFeedbackForm() {

    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);

    const handleStarClick = (index) =>{
        setRating(index);
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFeedback('');
        setRating(0);
    };

    return {feedback, rating, setFeedback, handleStarClick, handleSubmit};
}