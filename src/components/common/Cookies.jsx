import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8 text-center">
            Cookie Policy
          </h1>
          
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
                <p className="text-gray-300">
                  Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-300 mb-4">
                  Easy Resume uses cookies to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Save your resume data locally in your browser</li>
                  <li>Analyze how you use our website to improve our services</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Ensure the security and proper functioning of our website</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Essential Cookies</h3>
                    <p className="text-gray-300">
                      These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Functional Cookies</h3>
                    <p className="text-gray-300">
                      These cookies allow us to remember choices you make and provide enhanced, more personal features. They may be set by us or by third-party providers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-300">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">Local Storage</h3>
                    <p className="text-gray-300">
                      We use browser local storage to save your resume data directly on your device. This ensures your work is preserved between sessions without sending data to our servers.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-300 mb-4">
                  We may use third-party services that set cookies on our website, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Google Analytics for website analytics</li>
                  <li>Font providers (Google Fonts) for typography</li>
                  <li>Content delivery networks for performance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Managing Cookies</h2>
                <p className="text-gray-300 mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Browser Settings: Most browsers allow you to view, delete, and block cookies</li>
                  <li>Browser Extensions: Use privacy-focused browser extensions</li>
                  <li>Opt-out Tools: Use industry opt-out tools for advertising cookies</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Please note that disabling cookies may affect the functionality of our website and your user experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookie Retention</h2>
                <p className="text-gray-300">
                  Different cookies have different retention periods:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mt-4">
                  <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent Cookies:</strong> Remain until they expire or you delete them</li>
                  <li><strong>Local Storage:</strong> Persists until manually cleared</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Updates to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about our use of cookies, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                  <p className="text-white">Email: support@easyresume.com</p>
                  <p className="text-white">Phone: +66 2 613 1111</p>
                  <p className="text-white">Address: CentralWorld, 999/9 Rama I Rd, Pathum Wan, Bangkok 10330, Thailand</p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cookies;
