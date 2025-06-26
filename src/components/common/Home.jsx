import { useNavigate } from "react-router-dom";
import { useResumeContext } from "../../context/ResumeContext";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaRegLightbulb,
  FaFileDownload,
  FaAward,
  FaRocket,
  FaPalette,
  FaShieldAlt,
  FaClock,
  FaMobile,
} from "react-icons/fa";
import {
  featureCardAnimations,
  staggerContainer,
  staggerItem,
  typingAnimation,
  letterAnimation,
} from "../../utils/animationUtils";

const Home = () => {
  const navigate = useNavigate();
  const { clearResumeData } = useResumeContext();

  const handleGetStarted = () => {
    clearResumeData();
    navigate("/templates");
  };

  const features = [
    {
      icon: <FaRocket className="text-3xl text-blue-600 dark:text-blue-400" />,
      title: "Lightning Fast",
      description:
        "Create professional resumes in minutes, not hours. Our streamlined process gets you results quickly.",
    },
    {
      icon: (
        <FaPalette className="text-3xl text-purple-600 dark:text-purple-400" />
      ),
      title: "5 Professional Templates",
      description:
        "Choose from carefully crafted templates designed by professionals to make you stand out.",
    },
    {
      icon: (
        <FaFileDownload className="text-3xl text-green-600 dark:text-green-400" />
      ),
      title: "Instant PDF Export",
      description:
        "Download your resume as a high-quality PDF ready for printing or digital sharing.",
    },
    {
      icon: (
        <FaMobile className="text-3xl text-orange-600 dark:text-orange-400" />
      ),
      title: "Mobile Responsive",
      description:
        "Edit your resume on any device. Our responsive design works perfectly on phones and tablets.",
    },
    {
      icon: (
        <FaRegLightbulb className="text-3xl text-yellow-600 dark:text-yellow-400" />
      ),
      title: "Smart Suggestions",
      description:
        "Get intelligent recommendations for content and formatting to improve your resume.",
    },
    {
      icon: (
        <FaShieldAlt className="text-3xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Privacy First",
      description:
        "Your data stays secure with local storage. No servers, no tracking, complete privacy.",
    },
  ];

  const stats = [
    { number: "50K+", label: "Resumes Created", icon: <FaFileDownload /> },
    { number: "98%", label: "Success Rate", icon: <FaAward /> },
    { number: "5min", label: "Average Time", icon: <FaClock /> },
  ];

  const titleText = "Create Your Perfect Resume";
  const titleWords = titleText.split(" ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-20 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        </div>

        <div className="max-w-6xl mx-auto  mt-8   text-center relative z-10">
          <motion.div
            variants={typingAnimation}
            initial="hidden"
            animate="visible"
            className="mb-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight text-balance">
              {titleWords.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block whitespace-nowrap"
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      variants={letterAnimation}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                  {"\u00A0"}
                </span>
              ))}
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Build a professional resume that gets you hired. Choose from
            beautiful templates, customize with ease, and download instantly.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              onClick={handleGetStarted}
              className="group mt-4 relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Building Now</span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              onClick={() => navigate("/templates")}
              className="px-8 py-4 mt-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Templates
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        className="py-20 px-4 bg-white dark:bg-gray-800/50  via-white bg-gradient-to-br from-blue-50  to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-950 shadow-md hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Why Choose Easy Resume?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to create a professional resume that gets you
              hired
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                // variants={staggerItem}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of professionals who have successfully created their
            resumes with our platform
          </p>
          <motion.button
            onClick={handleGetStarted}
            className="group px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 mx-auto text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Create My Resume Now</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;
