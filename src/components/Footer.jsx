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
            <a
              href="https://github.com/shadowsilence94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/htut-ko-ko-805770202/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://twitter.com/htutkoko"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { name: "Templates", href: "/templates" },
              { name: "About Us", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "Reviews", href: "/reviews" }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  {item.name}
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
              { name: "Resume Tips", href: "https://www.indeed.com/career-advice/resumes-cover-letters/how-to-make-a-resume" },
              { name: "CV Examples", href: "https://www.canva.com/resumes/templates/" },
              { name: "Job Search Guide", href: "https://www.linkedin.com/pulse/ultimate-job-search-guide-2024-tips-strategies-success/" },
              { name: "Career Resources", href: "https://www.glassdoor.com/blog/guide/career-advice/" }
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition"></span>
                  {item.name}
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
            © {new Date().getFullYear()} EasyResume. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
          <div className="flex items-center gap-1">
            Made by Ko HtutKoKo & Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;