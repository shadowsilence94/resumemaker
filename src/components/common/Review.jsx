import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { staggerContainer, staggerItem } from "../../utils/animationUtils";

const Review = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const reviews = [
    {
      uuid: "1",
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "This resume builder is absolutely fantastic! I created a professional resume in just 10 minutes and landed my dream job within a week.",
      picture: "https://randomuser.me/api/portraits/women/44.jpg",
      position: "Software Engineer",
      company: "Google",
    },
    {
      uuid: "2",
      name: "Michael Chen",
      rating: 5,
      comment:
        "I've tried many resume builders, but this one stands out. The PDF quality is excellent, and the customization options are perfect.",
      picture: "https://randomuser.me/api/portraits/men/32.jpg",
      position: "Marketing Manager",
      company: "Microsoft",
    },
    {
      uuid: "3",
      name: "Emily Rodriguez",
      rating: 5,
      comment:
        "Love how easy it is to use! The real-time preview made creating my resume a breeze. Got multiple interview calls after using this.",
      picture: "https://randomuser.me/api/portraits/women/68.jpg",
      position: "UX Designer",
      company: "Adobe",
    },
    {
      uuid: "4",
      name: "David Thompson",
      rating: 4,
      comment:
        "Great tool for creating professional resumes quickly. The templates are well-designed and the export quality is top-notch.",
      picture: "https://randomuser.me/api/portraits/men/75.jpg",
      position: "Data Analyst",
      company: "Netflix",
    },
    {
      uuid: "5",
      name: "Lisa Wang",
      rating: 5,
      comment:
        "This platform exceeded my expectations! The resume I created helped me stand out from other candidates. The process was smooth.",
      picture: "https://randomuser.me/api/portraits/women/25.jpg",
      position: "Product Manager",
      company: "Apple",
    },
    {
      uuid: "6",
      name: "James Wilson",
      rating: 5,
      comment:
        "Incredible resume builder! The variety of templates and ease of customization is unmatched. I created multiple versions with ease.",
      picture: "https://randomuser.me/api/portraits/men/18.jpg",
      position: "Financial Analyst",
      company: "Goldman Sachs",
    },
  ];

  const featuredTestimonials = reviews.slice(0, 3);

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-lg ${
            i < rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial(
      (prev) =>
        (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied users who have landed their dream jobs
            with our platform.
          </p>
        </motion.div>

        <div className="mb-20 max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
            <FaQuoteLeft className="text-6xl text-blue-200 dark:text-blue-800 mb-6" />
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-center"
              >
                <StarRating
                  rating={featuredTestimonials[currentTestimonial].rating}
                />
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                  {featuredTestimonials[currentTestimonial].comment}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={featuredTestimonials[currentTestimonial].picture}
                    alt={featuredTestimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-200 dark:ring-blue-800"
                  />
                  <div className="text-left">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {featuredTestimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {featuredTestimonials[currentTestimonial].position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.uuid}
              variants={staggerItem}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <StarRating rating={review.rating} />
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 italic">
                "{review.comment}"
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src={review.picture}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.position} at {review.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
