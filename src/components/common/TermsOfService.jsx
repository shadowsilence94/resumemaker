import React from "react";
import { motion } from "framer-motion"; // eslint-disable-line no-unused-vars

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8 text-center">
            Terms of Service
          </h1>
          
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <p className="text-gray-300 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing and using Easy Resume, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
                <p className="text-gray-300 mb-4">
                  Easy Resume is a web-based resume building platform that allows users to create, edit, and download professional resumes using various templates.
                </p>
                <p className="text-gray-300">
                  The service is provided "as is" and we reserve the right to modify or discontinue the service at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
                <p className="text-gray-300 mb-4">
                  As a user of Easy Resume, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Provide accurate and truthful information in your resume</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to harm or disrupt the service</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not upload malicious content or viruses</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
                <p className="text-gray-300 mb-4">
                  The Easy Resume platform, including its design, templates, and functionality, is owned by us and protected by copyright and other intellectual property laws.
                </p>
                <p className="text-gray-300">
                  You retain ownership of the content you create using our service, but grant us a license to use it for the purpose of providing our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Privacy and Data</h2>
                <p className="text-gray-300">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-300 mb-4">
                  Easy Resume shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
                <p className="text-gray-300">
                  We do not guarantee that the service will be uninterrupted, secure, or error-free.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                <p className="text-gray-300">
                  We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
                <p className="text-gray-300">
                  These Terms shall be interpreted and governed by the laws of Thailand, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                <p className="text-gray-300">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
                <p className="text-gray-300">
                  If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
