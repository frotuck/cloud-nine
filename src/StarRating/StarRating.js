import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';
import "./StarRating.css"

// i know you can just install an npm package but thought it was best practice to do it myself!

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
    <div className="StarRating">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return(
            <label>
                <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)}
                    />
             <FaStar 
                color={ratingValue <= (hover || rating) ? "#b69f58" : "#e4e5e9"}
                size={20} 
                className="star"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                />
                
            </label>
            );
        })}
        </div>
    );
}

export default StarRating