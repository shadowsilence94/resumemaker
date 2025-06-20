import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
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
        Privacy Policy
      </motion.h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Information We Collect</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            EasyResume collects information you provide when creating your resume, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Personal information (name, contact details)</li>
            <li>Professional experience and education</li>
            <li>Skills and certifications</li>
            <li>Profile photos you upload</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>To generate and format your resume</li>
            <li>To save your progress locally in your browser</li>
            <li>To provide customer support</li>
            <li>To improve our services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Data Storage</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Your resume data is stored locally in your browser's storage. We do not store your personal resume data on our servers unless you explicitly choose to create an account.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400">
            If you have questions about this Privacy Policy, contact us at support@easyresume.com
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;