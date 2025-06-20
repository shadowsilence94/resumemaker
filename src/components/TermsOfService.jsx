import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto my-8 p-6 md:p-8 bg-white dark:bg-gray-800 rounded-lg shadow-xl"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6"
      >
        Terms of Service
      </motion.h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Acceptance of Terms</h2>
          <p className="text-gray-600 dark:text-gray-400">
            By using EasyResume, you agree to these Terms of Service. If you do not agree, please do not use our service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Service Description</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            EasyResume provides:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Resume building tools and templates</li>
            <li>PDF export functionality</li>
            <li>Local data storage in your browser</li>
            <li>Image cropping and editing features</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">User Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Provide accurate information in your resume</li>
            <li>Use the service for lawful purposes only</li>
            <li>Respect intellectual property rights</li>
            <li>Not attempt to harm or disrupt the service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Limitation of Liability</h2>
          <p className="text-gray-600 dark:text-gray-400">
            EasyResume is provided "as is" without warranties. We are not liable for any damages arising from your use of the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Questions about these terms? Contact us at support@easyresume.com
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default TermsOfService;