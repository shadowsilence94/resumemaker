import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage("Please fill in all fields");
      setShowAlert(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setAlertMessage("Please enter a valid email address");
      setShowAlert(true);
      return;
    }

    setAlertMessage(`Thank you for your message, ${formData.name}!`);
    setShowAlert(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center p-4 md:p-8"
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
      
      <div className="bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-20 w-full max-w-7xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12"
        >
          Contact Us
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Have questions or feedback? We'd love to hear from you. Fill out
              the form or reach us through the contact info.
            </p>

            <div className="space-y-6 mb-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <FaEnvelope className="text-indigo-600 dark:text-indigo-400 text-xl" />
                <div>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Email:</span>
                  <span className="text-gray-700 dark:text-gray-300 ml-2">support@easyresume.com</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center space-x-3"
              >
                <FaPhone className="text-indigo-600 dark:text-indigo-400 text-xl" />
                <div>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Phone:</span>
                  <span className="text-gray-700 dark:text-gray-300 ml-2">+66 123456789</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start space-x-3"
              >
                <FaMapMarkerAlt className="text-indigo-600 dark:text-indigo-400 text-xl mt-1" />
                <div>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Location:</span>
                  <span className="text-gray-700 dark:text-gray-300 ml-2">
                    CentralWorld, 999/9 Rama I Rd, Pathum Wan, Bangkok 10330, Thailand
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full h-64 rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5394267618!2d100.53731507484!3d13.746834986666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ecfe3c5e6b3%3A0x9c6b0a4e4b4b4b4b!2sCentralWorld!5e0!3m2!1sen!2sth!4v1699999999999!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CentralWorld Bangkok Location"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all"
                ></textarea>
              </motion.div>
              
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;