import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { testimonialAnimations, staggerContainer, staggerItem } from '../../utils/animationUtils';

const Review = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const reviews = [
    {
      uuid: "1",
      name: "Sarah Johnson",
      rating: 5,
      comment: "This resume builder is absolutely fantastic! I created a professional resume in just 10 minutes and landed my dream job within a week. The templates are modern and the interface is so intuitive.",
      picture: "https://randomuser.me/api/portraits/women/44.jpg",
      position: "Software Engineer",
      company: "Google"
    },
    {
      uuid: "2", 
      name: "Michael Chen",
      rating: 5,
      comment: "I've tried many resume builders, but this one stands out. The PDF quality is excellent, and the customization options are perfect. Highly recommend to anyone job hunting!",
      picture: "https://randomuser.me/api/portraits/men/32.jpg",
      position: "Marketing Manager",
      company: "Microsoft"
    },
    {
      uuid: "3",
      name: "Emily Rodriguez",
      rating: 5,
      comment: "Love how easy it is to use! The drag-and-drop functionality and real-time preview made creating my resume a breeze. Got multiple interview calls after using this.",
      picture: "https://randomuser.me/api/portraits/women/68.jpg",
      position: "UX Designer",
      company: "Adobe"
    },
    {
      uuid: "4",
      name: "David Thompson",
      rating: 4,
      comment: "Great tool for creating professional resumes quickly. The templates are well-designed and the export quality is top-notch. Saved me hours of formatting work.",
      picture: "https://randomuser.me/api/portraits/men/75.jpg",
      position: "Data Analyst",
      company: "Netflix"
    },
    {
      uuid: "5",
      name: "Lisa Wang",
      rating: 5,
      comment: "This platform exceeded my expectations! The resume I created helped me stand out from other candidates. The process was smooth and the results were professional.",
      picture: "https://randomuser.me/api/portraits/women/25.jpg",
      position: "Product Manager",
      company: "Apple"
    },
    {
      uuid: "6",
      name: "James Wilson",
      rating: 5,
      comment: "Incredible resume builder! The variety of templates and ease of customization is unmatched. I was able to create multiple versions for different job applications.",
      picture: "https://randomuser.me/api/portraits/men/18.jpg",
      position: "Financial Analyst",
      company: "Goldman Sachs"
    }
  ];

  const featuredTestimonials = reviews.slice(0, 3);

  const StarRating = ({ rating }) => {
    return (
      <motion.div 
        className="flex space-x-1 mb-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={testimonialAnimations.star}
            custom={i}
            initial="initial"
            whileInView="animate"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <FaStar 
              className={`text-lg ${
                i < rating 
                  ? 'text-yellow-400' 
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          </motion.div>
        ))}
      </motion.div>
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            What do our users say?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join thousands of satisfied users who have created professional resumes with our platform
          </motion.p>
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <motion.div 
          className="mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-center relative z-10"
              >
                <motion.div
                  className="text-6xl text-blue-200 dark:text-blue-800 mb-6"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <FaQuoteLeft />
                </motion.div>

                <StarRating rating={featuredTestimonials[currentTestimonial].rating} />

                <motion.p 
                  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed"
                  variants={testimonialAnimations.quote}
                  initial="initial"
                  animate="animate"
                >
                  {featuredTestimonials[currentTestimonial].comment}
                </motion.p>

                <motion.div 
                  className="flex items-center justify-center space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.img
                    src={featuredTestimonials[currentTestimonial].picture}
                    alt={featuredTestimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-200 dark:ring-blue-800"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        featuredTestimonials[currentTestimonial].name
                      )}&background=3b82f6&color=fff&size=64`;
                    }}
                  />
                  <div className="text-left">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {featuredTestimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {featuredTestimonials[currentTestimonial].position}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {featuredTestimonials[currentTestimonial].company}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronLeft />
              </motion.button>
              <motion.button
                onClick={nextTestimonial}
                className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaChevronRight />
              </motion.button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-4">
              {featuredTestimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial 
                      ? 'bg-blue-600 dark:bg-blue-400' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={testimonialAnimations.container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={review.uuid}
              variants={testimonialAnimations.card}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 relative overflow-hidden group"
            >
              {/* Floating background elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full -translate-y-10 translate-x-10 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <StarRating rating={review.rating} />
                
                <motion.div
                  className="text-2xl text-blue-300 dark:text-blue-700 mb-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  <FaQuoteLeft />
                </motion.div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 italic leading-relaxed">
                  "{review.comment}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <motion.img
                      src={review.picture}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-200 dark:ring-blue-800"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          review.name
                        )}&background=3b82f6&color=fff&size=48`;
                      }}
                    />
                    <motion.div 
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {review.position}
                    </p>
                    {review.company && (
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {review.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-16 px-8 rounded-3xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-8"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Trusted by Professionals Worldwide
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { number: "50,000+", label: "Resumes Created", icon: "📄" },
              { number: "98%", label: "Success Rate", icon: "🎯" },
              { number: "4.9/5", label: "User Rating", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="text-4xl mb-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Review;
