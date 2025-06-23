import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8 text-center">
            Privacy Policy
          </h1>
          
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-gray-300 mb-4">
                  Easy Resume collects information you provide directly to us, such as when you create a resume, contact us, or use our services.
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Personal information (name, email, phone number, address)</li>
                  <li>Professional information (work experience, education, skills)</li>
                  <li>Profile photos you choose to upload</li>
                  <li>Usage data and analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide and maintain our resume building services</li>
                  <li>Generate and format your resume documents</li>
                  <li>Improve our services and user experience</li>
                  <li>Communicate with you about our services</li>
                  <li>Provide customer support</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Storage and Security</h2>
                <p className="text-gray-300 mb-4">
                  Your resume data is stored locally in your browser using localStorage. We do not store your personal resume information on our servers unless you explicitly choose to save it to our cloud service.
                </p>
                <p className="text-gray-300">
                  We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
                <p className="text-gray-300">
                  We may share information in response to legal requests or to protect our rights and the safety of our users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
                <p className="text-gray-300 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Delete your information</li>
                  <li>Opt out of communications</li>
                  <li>Data portability</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>
                <p className="text-gray-300">
                  We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Changes to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
                <p className="text-gray-300">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
