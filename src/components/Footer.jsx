import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaRegEnvelope,
  FaRegHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <FaFileAlt className="text-blue-400 text-2xl" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              EasyResume
            </span>
          </div>
          <p className="text-gray-400">
            Build professional resumes that get you hired faster.
          </p>
          <div className="flex gap-4">
            {[FaTwitter, FaLinkedin, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label={`Social link ${i}`}
              >
                <Icon className="text-xl" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {["Templates", "Examples", "Pricing", "Blog"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
            Resources
          </h4>
          <ul className="space-y-3">
            {[
              "Resume Tips",
              "Cover Letters",
              "Interview Guide",
              "Career Advice",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
            Stay Updated
          </h4>
          <p className="text-gray-400 mb-4">
            Get resume tips and job trends in your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            >
              <FaRegEnvelope />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div>
            Â© {new Date().getFullYear()} EasyResume. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
          <div className="flex items-center gap-1">
            Made with <FaRegHeart className="text-red-400 mx-1" />
            by Ko HtutKoKo & Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;