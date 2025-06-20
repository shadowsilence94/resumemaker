import React from "react";

const teamMembers = [
  {
    name: "Mr. Arthur",
    role: "System Designer",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    name: "Mr. Htut Ko",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ms. Erina",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
      <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            About Our Resume Builder
          </h1>
          <p className="text-gray-600 text-lg mb-10">
            Empowering professionals to create impactful resumes with ease.
          </p>

          {/* Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide an intuitive, AI-powered platform for job seekers to
                craft beautiful, effective resumes that stand out.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                Our Vision
              </h3>
              <p className="text-gray-600">
                Redefining career growth through smart design and technology for
                every job seeker, everywhere.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-16">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-xl shadow text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-700">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            Current Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                Templates
              </h3>
              <p className="text-sm text-gray-600">
                Choose from multiple designs, including minimalist, sidebar, and
                classic layouts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                Live Previews
              </h3>
              <p className="text-sm text-gray-600">
                See how your data looks in every template before you start
                editing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                Intuitive Editor
              </h3>
              <p className="text-sm text-gray-600">
                Easily add, edit, and remove sections, including custom
                user-defined sections.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                Section Visibility
              </h3>
              <p className="text-sm text-gray-600">
                Hide sections like "Summary" or "Skills" that you don't need for
                a specific application.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                Image Cropping
              </h3>
              <p className="text-sm text-gray-600">
                Upload and crop your profile picture for the perfect
                professional look.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                Data Persistence
              </h3>
              <p className="text-sm text-gray-600">
                Your data is saved in your browser, so you can pick up where you
                left off.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                Dark Mode
              </h3>
              <p className="text-sm text-gray-600">
                Work comfortably at any time of day with a sleek dark theme.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                PDF Download
              </h3>
              <p className="text-sm text-gray-600">
                Instantly download a high-quality, print-ready PDF of your final
                resume.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-2 text-indigo-600">
                Easy to Use
              </h3>
              <p className="text-sm text-gray-600">
                First-time users can start immediately. Clean layout, and
                readable fonts.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold pb-2 mb-4">Technology Stack</h2>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-700 dark:text-gray-300">
              This application is built as a single-page application using
              modern web technologies:
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-4">
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">
                Vite + React
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">
                React Router
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">
                Lucide React (Icons)
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">
                React Easy Crop
              </span>
              <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-1 px-3 rounded-full text-sm">
                jsPDF & html2canvas
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;