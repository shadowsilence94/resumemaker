import { motion } from "framer-motion";
import {
  FaRocket,
  FaPalette,
  FaShieldAlt,
  FaMobile,
  FaDownload,
  FaClock,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  featureCardAnimations,
  iconAnimations,
  staggerContainer,
  staggerItem,
  documentCreationAnimation,
} from "../../utils/animationUtils";

const AboutUs = () => {
  const features = [
    {
      title: "Lightning Fast Creation",
      desc: "Build professional resumes in minutes with our streamlined, intuitive interface designed for efficiency.",
      icon: <FaRocket className="text-3xl text-blue-600 dark:text-blue-400" />,
      animation: featureCardAnimations.speedFeature,
      iconAnimation: iconAnimations.speed,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Beautiful Templates",
      desc: "Choose from 5 professionally designed templates that make your resume stand out to employers.",
      icon: (
        <FaPalette className="text-3xl text-purple-600 dark:text-purple-400" />
      ),
      animation: featureCardAnimations.designFeature,
      iconAnimation: iconAnimations.customize,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Privacy First",
      desc: "Your data stays secure with local storage. No servers, no tracking, complete privacy guaranteed.",
      icon: (
        <FaShieldAlt className="text-3xl text-green-600 dark:text-green-400" />
      ),
      animation: featureCardAnimations.securityFeature,
      iconAnimation: iconAnimations.document,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Mobile Responsive",
      desc: "Create and edit your resume on any device. Perfect experience on desktop, tablet, and mobile.",
      icon: (
        <FaMobile className="text-3xl text-orange-600 dark:text-orange-400" />
      ),
      animation: featureCardAnimations.customizationFeature,
      iconAnimation: iconAnimations.document,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Instant PDF Export",
      desc: "Download high-quality PDFs ready for printing or digital sharing with a single click.",
      icon: (
        <FaDownload className="text-3xl text-indigo-600 dark:text-indigo-400" />
      ),
      animation: featureCardAnimations.downloadFeature,
      iconAnimation: iconAnimations.download,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      title: "Real-time Preview",
      desc: "See your changes instantly with live preview. What you see is exactly what you get.",
      icon: <FaClock className="text-3xl text-teal-600 dark:text-teal-400" />,
      animation: featureCardAnimations.aiFeature,
      iconAnimation: iconAnimations.speed,
      gradient: "from-teal-500 to-blue-500",
    },
  ];

  const teamMembers = [
    {
      name: "Mr Phyo",
      role: "Lead Developer",
      image: "/profiles/arthur.jpeg",
      bio: "Full-stack developer with lots of experience in creating user-friendly applications.",
      social: {
        linkedin: "https://www.linkedin.com/in/aung-phyo-thu-arthur/",
        github: "#",
      },
    },
    {
      name: "Htut Ko Ko",
      role: "Product Manager",
      image: "/profiles/htutkoko.jpg",
      bio: "Strategic thinker focused on building products that solve real problems for users.",
      social: {
        linkedin: "https://www.linkedin.com/in/htut-ko-ko-805770202/",
        github: "https://github.com/shadowsilence94",
      },
    },
    {
      name: "Erina",
      role: "UI/UX Designer",
      image: "/profiles/erina.jpg",
      bio: "Creative designer passionate about crafting beautiful and intuitive user experiences.",
      social: {
        linkedin: "#",
        github: "https://github.com/Erina943",
      },
    },
  ];

  const stats = [
    { number: "50K+", label: "Happy Users", icon: "👥" },
    { number: "100K+", label: "Resumes Created", icon: "📄" },
    { number: "98%", label: "Success Rate", icon: "🎯" },
    { number: "24/7", label: "Support", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <motion.section
        className="py-20 px-4 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Easy Resume
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're on a mission to help professionals create stunning resumes
            that get them hired. Our platform combines beautiful design with
            powerful functionality to make resume building fast, easy, and
            effective.
          </motion.p>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
              >
                <motion.div
                  className="text-3xl mb-3"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
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
        viewport={{ once: true }}
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
              We've built the most intuitive and powerful resume builder to help
              you succeed
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
                className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer overflow-hidden"
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
                    {feature.desc}
                  </p>
                </div>

                {/* Animated gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl`}
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Floating particles */}
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

      {/* Team Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate professionals dedicated to helping you succeed in your
              career
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={documentCreationAnimation}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-400 cursor-pointer relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <motion.div
                    className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 p-1"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full bg-white dark:bg-gray-800"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          member.name
                        )}&background=3b82f6&color=fff&size=128`;
                      }}
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <motion.div
                    className="flex justify-center space-x-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      {
                        icon: <FaLinkedin />,
                        link: member.social.linkedin,
                        color: "text-blue-600",
                      },
                      {
                        icon: <FaGithub />,
                        link: member.social.github,
                        color: "text-gray-700 dark:text-gray-300",
                      },
                    ].map((social, socialIndex) => (
                      <motion.a
                        key={socialIndex}
                        href={social.link}
                        variants={staggerItem}
                        className={`${social.color} hover:scale-110 transition-transform duration-200`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Our Mission
            </motion.h2>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              To democratize professional resume creation by providing powerful,
              easy-to-use tools that help everyone present their best
              professional self. We believe that everyone deserves access to
              beautiful, effective resume design regardless of their technical
              skills or budget.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
