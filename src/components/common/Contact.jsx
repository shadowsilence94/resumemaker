import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaGlobe,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import {
  staggerContainer,
  staggerItem,
  featureCardAnimations,
  iconAnimations,
} from "../../utils/animationUtils";

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

    // Simulate form submission
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
      animation: featureCardAnimations.speedFeature,
      iconAnimation: iconAnimations.document,
    },
    {
      icon: <FaPhone className="text-2xl text-green-600 dark:text-green-400" />,
      title: "Call Us",
      content: "+66 (123) 456-7890",
      description: "Mon-Fri, 9AM-6PM EST",
      animation: featureCardAnimations.downloadFeature,
      iconAnimation: iconAnimations.speed,
    },
    {
      icon: (
        <FaMapMarkerAlt className="text-2xl text-red-600 dark:text-red-400" />
      ),
      title: "Visit Us",
      content: "123 4th Floor, Central World",
      description: "Bangkok, Thailand",
      animation: featureCardAnimations.designFeature,
      iconAnimation: iconAnimations.customize,
    },
    {
      icon: (
        <FaClock className="text-2xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Business Hours",
      content: "Monday - Friday",
      description: "9:00 AM - 6:00 PM EST",
      animation: featureCardAnimations.aiFeature,
      iconAnimation: iconAnimations.speed,
    },
  ];

  const formAnimation = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const inputAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
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
          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Have questions about our resume builder? Need help with your resume?
            We're here to help you succeed in your career journey.
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
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
              variants={info.animation}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 cursor-pointer text-center relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full -translate-y-10 translate-x-10 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <motion.div
                  className="mb-4 flex justify-center"
                  variants={info.iconAnimation}
                  initial="initial"
                  whileInView="animate"
                  whileHover="hover"
                  viewport={{ once: true }}
                >
                  {info.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-800 dark:text-gray-200 font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {info.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={formAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Send us a Message
            </motion.h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                variants={inputAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                  placeholder="Enter your full name"
                  whileFocus="focus"
                  variants={inputAnimation}
                />
              </motion.div>

              <motion.div
                variants={inputAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white"
                  placeholder="Enter your email address"
                  whileFocus="focus"
                  variants={inputAnimation}
                />
              </motion.div>

              <motion.div
                variants={inputAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell us how we can help you..."
                  whileFocus="focus"
                  variants={inputAnimation}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{
                  scale: isSubmitting ? 1 : 1.02,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Visit Us Section */}
            <motion.div
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <FaMapMarkerAlt className="mr-3 text-primary-600" />
                Visit Us
              </h3>

              {/* Interactive Map */}
              <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5394735861!2d100.53982731482!3d13.746781990356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29eccc7e8c9c3%3A0x3ec0c5ec8b9e0c8!2sCentralWorld!5e0!3m2!1sen!2sth!4v1635749234567!5m2!1sen!2sth"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>

              {/* Location Details */}
              <div className="space-y-4">
                <motion.div
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <FaMapMarkerAlt className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Address
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      CentralWorld Shopping Center
                      <br />
                      999/9 Rama I Road, Pathumwan
                      <br />
                      Bangkok 10330, Thailand
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <FaClock className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Business Hours
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Sunday: 10:00 AM - 10:00 PM
                      <br />
                      Public Holidays: 10:00 AM - 8:00 PM
                      <br />
                      24/7 Online Support Available
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <FaGlobe className="text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Service Area
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      We serve clients globally with our online resume building
                      platform. Local consultations available in Bangkok and
                      surrounding areas.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white p-8 rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    name: "Create Resume",
                    icon: <FaGlobe />,
                    path: "/templates",
                  },
                  {
                    name: "View Templates",
                    icon: <FaEnvelope />,
                    path: "/templates",
                  },
                  {
                    name: "About Us",
                    icon: <FaMapMarkerAlt />,
                    path: "/about",
                  },
                  { name: "Reviews", icon: <FaClock />, path: "/reviews" },
                ].map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = link.path;
                    }}
                    variants={staggerItem}
                    className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-200 cursor-pointer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Alert Messages */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            className="fixed top-4 right-4 z-50"
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={`p-4 rounded-lg shadow-lg flex items-center space-x-3 ${
                alertType === "success"
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {alertType === "success" ? (
                <FaCheckCircle />
              ) : (
                <FaExclamationTriangle />
              )}
              <span>{alertMessage}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive CSS for tablet range */}
      <style>{`
        @media (min-width: 768px) and (max-width: 1179px) {
          .contact-container {
            padding-left: 2rem !important;
            padding-right: 2rem !important;
            max-width: 1024px !important;
            margin: 0 auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
