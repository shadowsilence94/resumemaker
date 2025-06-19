import React, { useState } from 'react';
import './Review.css';

// Mock data for existing reviews
const mockReviews = [
    { id: 1, name: 'John D.', rating: 5, comment: 'This tool is amazing! I created a professional resume in under 15 minutes. The live preview feature is a game-changer.' },
    { id: 2, name: 'Sarah L.', rating: 5, comment: 'Finally, a resume builder that is intuitive and has modern templates. The PDF download is high-quality. Highly recommended!' },
    { id: 3, name: 'Mike R.', rating: 4, comment: 'Great application. It would be nice to have a few more template styles, but the classic one is perfect for my field.' },
];

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <span key={ratingValue} className={ratingValue <= rating ? 'star-filled' : 'star-empty'}>
                        ★
                    </span>
                );
            })}
        </div>
    );
};

const Review = () => {
    const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your review, ${formData.name}! Your feedback is valuable to us.`);
        setFormData({ name: '', rating: 5, comment: '' });
    };

    return (
        <div className="review-page-container">
            <section className="existing-reviews">
                <h2>What Our Users Say</h2>
                <div className="review-list">
                    {mockReviews.map(review => (
                        <div key={review.id} className="review-card">
                            <StarRating rating={review.rating} />
                            <p className="review-comment">"{review.comment}"</p>
                            <p className="review-author">- {review.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="review-form-section">
                <h2>Leave Your Review</h2>
                <form onSubmit={handleSubmit} className="review-form">
                     <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                     <div className="form-group">
                        <label htmlFor="rating">Rating</label>
                        <select name="rating" id="rating" value={formData.rating} onChange={handleChange}>
                            <option value="5">5 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="2">2 Stars</option>
                            <option value="1">1 Star</option>
                        </select>
                    </div>
                     <div className="form-group">
                        <label htmlFor="comment">Comment</label>
                        <textarea
                            id="comment"
                            name="comment"
                            rows="5"
                            value={formData.comment}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit Review</button>
                </form>
            </section>
        </div>
    );
};

export default Review;