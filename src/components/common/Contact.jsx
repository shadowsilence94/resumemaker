import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { staggerContainer, staggerItem } from "../../utils/animationUtils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage("Please fill in all fields.");
      setAlertType("error");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setAlertMessage(
        "Thank you for your message! We'll get back to you soon."
      );
      setAlertType("success");
      setShowAlert(true);
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setShowAlert(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Email Us",
      content: "support@easyresume.com",
      description: "Get in touch via email",
    },
    {
      icon: <FaPhone className="text-2xl text-green-600 dark:text-green-400" />,
      title: "Call Us",
      content: "+66 (123) 456-7890",
      description: "Mon-Fri, 9AM-6PM EST",
    },
    {
      icon: (
        <FaMapMarkerAlt className="text-2xl text-red-600 dark:text-red-400" />
      ),
      title: "Visit Us",
      content: "123 4th Floor, Central World",
      description: "Bangkok, Thailand",
    },
    {
      icon: (
        <FaClock className="text-2xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Business Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM EST",
    },
  ];

  return (
    <div className="min-h-screen via-white bg-gradient-to-br from-blue-50  to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have questions about our resume builder? Need help with your resume?
            We're here to help you succeed in your career journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center"
            >
              <div className="mb-4 flex justify-center">{info.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {info.title}
              </h3>
              <p className="text-gray-800 dark:text-gray-200 font-medium mb-1">
                {info.content}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {info.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Visit Us
              </h3>
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.552399264424!2d100.5673398759553!3d13.74558489668353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f4d1425c277%3A0x2035a0592860a69!2sCentralWorld!5e0!3m2!1sen!2sth!4v1687532345678"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
