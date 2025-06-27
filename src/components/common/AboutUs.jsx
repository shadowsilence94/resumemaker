import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { staggerContainer, staggerItem } from "../../utils/animationUtils";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Mr. Phyo",
      role: "Product Manager",
      image: "/profiles/arthur.jpeg",
      bio: "Strategic thinker focused on building products that solve real problems for users.",
      social: {
        linkedin: "https://www.linkedin.com/in/aung-phyo-thu-arthur/",
        github: "#",
      },
    },
    {
      name: "Mr. Htut Ko Ko",
      role: "Lead Developer",
      image: "/profiles/htutkoko.jpg",
      bio: "Full-stack developer with lots of experience in creating user-friendly applications.",
      social: {
        linkedin: "https://www.linkedin.com/in/htut-ko-ko-805770202/",
        github: "https://github.com/shadowsilence94",
      },
    },
    {
      name: "Ms. Erina",
      role: "UI/UX Designer",
      image: "/profiles/erina.jpg",
      bio: "Creative designer passionate about crafting beautiful and intuitive user experiences.",
      social: {
        linkedin: "#",
        github: "https://github.com/Erina943",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            About Easy Resume
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're on a mission to help professionals create stunning resumes
            that get them hired. Our platform combines beautiful design with
            powerful functionality to make resume building fast, easy, and
            effective.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.section
          className="py-20 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Passionate professionals dedicated to helping you succeed in
                your career
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group bg-white dark:bg-gray-800 p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative z-10">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 p-1">
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
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href={member.social.linkedin}
                        className="text-blue-600 hover:scale-110 transition-transform"
                      >
                        <FaLinkedin size={20} />
                      </a>
                      <a
                        href={member.social.github}
                        className="text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform"
                      >
                        <FaGithub size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs;
