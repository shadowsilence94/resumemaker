import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useResumeContext } from "../useContext/UseContext";
import {
  FaArrowRight,
  FaRegLightbulb,
  FaFileDownload,
  FaAward,
  FaUsers,
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  const { clearResumeData } = useResumeContext();
  const [activeFaq, setActiveFaq] = useState(null);

  const handleGetStarted = () => {
    clearResumeData();
    navigate("/templates");
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Sample data
  const features = [
    {
      icon: <FaRegLightbulb className="text-2xl" />,
      title: "Smart Suggestions",
      description: "AI-powered content recommendations",
    },
    {
      icon: <FaFileDownload className="text-2xl" />,
      title: "Multiple Formats",
      description: "PDF, DOCX, and TXT exports",
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: "ATS Optimized",
      description: "Pass automated resume screens",
    },
  ];

  const faqs = [
    {
      question: "Is Easy Resume really free?",
      answer:
        "Yes! Our basic features are completely free forever. We offer premium templates and features as optional upgrades.",
    },
    {
      question: "How do I download my resume?",
      answer:
        "After creating your resume, click the 'Download' button and choose your preferred format (PDF, DOCX, or TXT).",
    },
    {
      question: "Can I edit my resume later?",
      answer:
        "Absolutely! Your resumes are saved in your account and can be edited anytime.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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

    setAlertMessage("Thank you! Your message has been sent successfully.");
    setShowAlert(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="w-full">
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-7 right-20 z-50"
        >
          <div
            className={`px-6 py-4 rounded-lg shadow-lg ${
              alertMessage.includes("Thank You") ? "bg-green-500" : "bg-red-500"
            }text-white`}
          >
            {alertMessage}
            <button
              onClick={() => setShowAlert(false)}
              className="ml-4 font-bold"
            >
              x
            </button>
          </div>
        </motion.div>
      )}
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-[70vh] px-4 py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 mb-6"
        >
          Easy Resume
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mb-8">
          Craft a professional, modern resume in minutes.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGetStarted}
          className="relative overflow-hidden px-8 py-4 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group cursor-pointer hover:shadow-lg transition-all duration-300"
        >
          <span className="flex items-center gap-2">
            Get Started For Free
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>
      </section>

      {/* Animated Features Cards */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-blue-500 dark:text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            About Easy Resume
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We believe everyone deserves a professional resume without the
                hassle. Our platform simplifies resume creation while
                maintaining quality and effectiveness.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Founded in 2025, we've helped over 50,000 job seekers create
                resumes that get noticed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl p-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 h-full">
                <h3 className="text-2xl font-bold mb-4">Our Team</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We're a group of HR professionals, designers, and developers
                  passionate about helping you succeed in your job search.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span>{faq.question}</span>
                {activeFaq === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-600 dark:text-gray-400"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 dark:text-blue-400 mt-1">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      support@easyresume.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 dark:text-blue-400 mt-1">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      +66 123456789
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 dark:text-blue-400 mt-1">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      CentralWorld, 999/9 Rama I Rd, Pathum Wan, Bangkok 10330, Thailand
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Build Your Resume?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGetStarted}
            className="px-8 py-4 font-bold text-blue-500 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Create My Resume Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;