import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Mr. Arthur",
    role: "System Designer",
    image: "/profiles/arthur.jpeg",
    github: "https://github.com/mrphyowork",
  },
  {
    name: "Mr. Htut Ko",
    role: "Lead Developer",
    image: "/profiles/htutkoko.jpg",
    github: "https://github.com/shadowsilence94",
  },
  {
    name: "Ms. Erina",
    role: "UI/UX Designer",
    image: "/profiles/erina.jpg",
    github: "https://github.com/Erina943",
  },
];

const AboutUs = () => {
  const features = [
    { title: "Templates", desc: "Choose from multiple designs, including minimalist, sidebar, and classic layouts." },
    { title: "Live Previews", desc: "See how your data looks in every template before you start editing." },
    { title: "Intuitive Editor", desc: "Easily add, edit, and remove sections, including custom user-defined sections." },
    { title: "Section Visibility", desc: "Hide sections like 'Summary' or 'Skills' that you don't need for a specific application." },
    { title: "Image Cropping", desc: "Upload and crop your profile picture for the perfect professional look." },
    { title: "Data Persistence", desc: "Your data is saved in your browser, so you can pick up where you left off." },
    { title: "Dark Mode", desc: "Work comfortably at any time of day with a sleek dark theme." },
    { title: "PDF Download", desc: "Instantly download a high-quality, print-ready PDF of your final resume." },
    { title: "Easy to Use", desc: "First-time users can start immediately. Clean layout, and readable fonts." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto my-8 p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
    >
      <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4"
          >
            About Our Resume Builder
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg mb-10"
          >
            Empowering professionals to create impactful resumes with ease.
          </motion.p>

          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To provide an intuitive, AI-powered platform for job seekers to
                craft beautiful, effective resumes that stand out.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Redefining career growth through smart design and technology for
                every job seeker, everywhere.
              </p>
            </motion.div>
          </div>

          {/* Team Section */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200"
          >
            Meet the Team
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
            {teamMembers.map((member, index) => (
              <motion.a
                key={member.name}
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow text-center hover:shadow-lg transition-shadow cursor-pointer block"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=3b82f6&color=fff&size=96`;
                  }}
                />
                <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </motion.a>
            ))}
          </div>

          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200"
          >
            Current Features
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
              >
                <h3 className="text-lg font-semibold mb-2 text-indigo-600 dark:text-indigo-400">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold pb-2 mb-4 text-gray-800 dark:text-gray-200"
          >
            Technology Stack
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
          >
            <p className="text-gray-700 dark:text-gray-300">
              This application is built as a single-page application using
              modern web technologies:
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              {["Vite + React", "React Router", "Tailwind CSS", "Framer Motion", "React Icons", "React Easy Crop", "jsPDF & html2canvas"].map((tech, index) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutUs;