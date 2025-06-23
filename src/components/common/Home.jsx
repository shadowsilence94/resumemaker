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
  iconAnimations,
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
      gradient: "from-blue-500 to-cyan-500",
      animation: featureCardAnimations.speedFeature,
      iconAnimation: iconAnimations.speed,
    },
    {
      icon: (
        <FaPalette className="text-3xl text-purple-600 dark:text-purple-400" />
      ),
      title: "5 Professional Templates",
      description:
        "Choose from carefully crafted templates designed by professionals to make you stand out.",
      gradient: "from-purple-500 to-pink-500",
      animation: featureCardAnimations.designFeature,
      iconAnimation: iconAnimations.customize,
    },
    {
      icon: (
        <FaFileDownload className="text-3xl text-green-600 dark:text-green-400" />
      ),
      title: "Instant PDF Export",
      description:
        "Download your resume as a high-quality PDF ready for printing or digital sharing.",
      gradient: "from-green-500 to-emerald-500",
      animation: featureCardAnimations.downloadFeature,
      iconAnimation: iconAnimations.download,
    },
    {
      icon: (
        <FaMobile className="text-3xl text-orange-600 dark:text-orange-400" />
      ),
      title: "Mobile Responsive",
      description:
        "Edit your resume on any device. Our responsive design works perfectly on phones and tablets.",
      gradient: "from-orange-500 to-red-500",
      animation: featureCardAnimations.customizationFeature,
      iconAnimation: iconAnimations.document,
    },
    {
      icon: (
        <FaRegLightbulb className="text-3xl text-yellow-600 dark:text-yellow-400" />
      ),
      title: "Smart Suggestions",
      description:
        "Get intelligent recommendations for content and formatting to improve your resume.",
      gradient: "from-yellow-500 to-orange-500",
      animation: featureCardAnimations.aiFeature,
      iconAnimation: iconAnimations.customize,
    },
    {
      icon: (
        <FaShieldAlt className="text-3xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Privacy First",
      description:
        "Your data stays secure with local storage. No servers, no tracking, complete privacy.",
      gradient: "from-indigo-500 to-purple-500",
      animation: featureCardAnimations.securityFeature,
      iconAnimation: iconAnimations.document,
    },
  ];

  const stats = [
    { number: "50K+", label: "Resumes Created", icon: <FaFileDownload /> },
    { number: "98%", label: "Success Rate", icon: <FaAward /> },
    { number: "5min", label: "Average Time", icon: <FaClock /> },
  ];

  // Animation for the main title
  const titleText = "Create Your Perfect Resume";
  const titleLetters = titleText.split("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            variants={typingAnimation}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
              {titleLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterAnimation}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
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
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Building Now</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.button>

            <motion.button
              onClick={() => navigate("/templates")}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Templates
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl text-blue-600 dark:text-blue-400 mb-2"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Why Choose Easy Resume?
            </motion.h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to create a professional resume that gets you
              hired
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={feature.animation}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 cursor-pointer overflow-hidden"
              >
                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div
                    className="mb-6 p-4 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600"
                    variants={feature.iconAnimation}
                    initial="initial"
                    whileInView="animate"
                    whileHover="hover"
                    viewport={{ once: true }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated gradient border */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${20 + i * 20}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of professionals who have successfully created
              their resumes with our platform
            </p>
            <motion.button
              onClick={handleGetStarted}
              className="group px-10 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-3 mx-auto text-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Create My Resume Now</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
