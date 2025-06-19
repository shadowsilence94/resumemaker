import React, { useState } from 'react';

const mockReviews = [ { id: 1, name: 'John D.', rating: 5, comment: 'This tool is amazing! I created a professional resume in under 15 minutes.' }, { id: 2, name: 'Sarah L.', rating: 5, comment: 'Finally, a resume builder that is intuitive and has modern templates.' }, ];
const StarRating = ({ rating }) => ( <div className="text-yellow-400 text-xl mb-4"> {[...Array(5)].map((_, i) => <span key={i}>{i < rating ? '★' : '☆'}</span>)} </div> );

const Review = () => {
    const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
    const handleChange = (e) => setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    const handleSubmit = (e) => { e.preventDefault(); alert(`Thank you, ${formData.name}!`); setFormData({ name: '', rating: 5, comment: '' }); };

    return (
        <div className="max-w-5xl mx-auto my-8 p-4">
            <section className="mb-16">
                <h2 className="text-center text-3xl font-bold mb-8 dark:text-white">What Our Users Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {mockReviews.map(review => (
                        <div key={review.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
                            <StarRating rating={review.rating} />
                            <p className="italic text-gray-600 dark:text-gray-300 flex-grow mb-4">"{review.comment}"</p>
                            <p className="font-bold text-right text-gray-800 dark:text-gray-200">- {review.name}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-center text-3xl font-bold mb-8 dark:text-white">Leave Your Review</h2>
                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"/>
                    </div>
                     <div>
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Rating</label>
                        <select name="rating" id="rating" value={formData.rating} onChange={handleChange} className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600">
                            <option value="5">5 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="2">2 Stars</option>
                            <option value="1">1 Star</option>
                        </select>
                    </div>
                     <div>
                        <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Comment</label>
                        <textarea id="comment" name="comment" rows="5" value={formData.comment} onChange={handleChange} required className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"></textarea>
                    </div>
                    <button type="submit" className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg">Submit Review</button>
                </form>
            </section>
        </div>
    );
};
export default Review;