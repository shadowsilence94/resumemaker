import React, { useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  { uuid: '1', name: 'Emily Carter', picture: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2', comment: 'Amazing tool! Created a professional resume in minutes.', rating: 5 },
  { uuid: '2', name: 'David Lee', picture: 'https://images.unsplash.com/photo-1560250097-0b93528c311a', comment: 'Finally, an intuitive builder with modern templates.', rating: 5 },
  { uuid: '3', name: 'Maria Garcia', picture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', comment: 'Great application. The classic template is perfect for my field.', rating: 4 },
  { uuid: '4', name: 'James Brown', picture: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5', comment: 'The live preview feature is a game-changer.', rating: 5 },
  { uuid: '5', name: 'Jessica Wilson', picture: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80', comment: 'Simple, fast, and the PDF download is high-quality.', rating: 5 },
  { uuid: '6', name: 'Michael Harris', picture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', comment: 'I landed my dream job with a resume I made here!', rating: 5 },
  { uuid: '7', name: 'Linda Martinez', picture: 'https://images.unsplash.com/photo-1557862921-37829c790f19', comment: 'The custom sections feature is incredibly useful.', rating: 4 },
  { uuid: '8', name: 'William Anderson', picture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', comment: 'Highly recommended for anyone on the job hunt.', rating: 5 },
  { uuid: '9', name: 'Karen Thomas', picture: 'https://images.unsplash.com/photo-1580489944761-15a19d654956', comment: 'Easy to use and the results are very professional.', rating: 5 },
];

const StarRating = ({ rating }) => (
  <div className="text-yellow-400 text-xl mb-4">
    {[...Array(5)].map((_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ))}
  </div>
);

const Review = () => {
  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    comment: "",
  });
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) {
      setAlertMessage("Please fill in all required fields");
      setShowAlert(true);
      return;
    }
    
    setAlertMessage(`Thank you for your review, ${formData.name}!`);
    setShowAlert(true);
    setFormData({ name: "", rating: 5, comment: "" });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto my-8 p-4"
    >
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-7 right-20 z-50"
        >
          <div
            className={`px-6 py-4 rounded-lg shadow-lg ${
              alertMessage.includes("Thank you") ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {alertMessage}
            <button
              onClick={() => setShowAlert(false)}
              className="ml-4 font-bold"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
      
      <div className="bg-gradient-to-b from-yellow-400 to-white dark:from-yellow-500 dark:to-gray-800 py-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-10"
        >
          What do our users say?
        </motion.h2>

        <div className="px-4 md:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto rounded-xl">
          {reviews.map((review, index) => (
            <motion.div
              key={review.uuid}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:shadow-xl transition-all"
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 italic">
                "{review.comment}"
              </p>
              <img
                src={review.picture}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => {
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(review.name)}&background=3b82f6&color=fff&size=64`;
                }}
              />
              <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                {review.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
      
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-8"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold mb-8 text-gray-900 dark:text-white"
        >
          Leave Your Review
        </motion.h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <label
              htmlFor="rating"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Rating
            </label>
            <select
              name="rating"
              id="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
            >
              <option value="5">5 Stars - Excellent</option>
              <option value="4">4 Stars - Very Good</option>
              <option value="3">3 Stars - Good</option>
              <option value="2">2 Stars - Fair</option>
              <option value="1">1 Star - Poor</option>
            </select>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <label
              htmlFor="comment"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Comment *
            </label>
            <textarea
              id="comment"
              name="comment"
              rows="5"
              value={formData.comment}
              onChange={handleChange}
              required
              placeholder="Share your experience with Easy Resume..."
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
            ></textarea>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg"
          >
            Submit Review
          </motion.button>
        </form>
      </motion.section>
    </motion.div>
  );
};

export default Review;