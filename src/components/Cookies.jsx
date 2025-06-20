import React from "react";
import { motion } from "framer-motion";

const Cookies = () => {
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
        Cookie Policy
      </motion.h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">What Are Cookies</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">How We Use Cookies</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            EasyResume uses cookies and local storage for:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Saving your resume data locally in your browser</li>
            <li>Remembering your theme preference (dark/light mode)</li>
            <li>Maintaining your session while using the application</li>
            <li>Improving website performance and user experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Types of Cookies We Use</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300">Essential Cookies</h3>
              <p className="text-gray-600 dark:text-gray-400">Required for the website to function properly, including saving your resume data.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300">Preference Cookies</h3>
              <p className="text-gray-600 dark:text-gray-400">Remember your settings like theme preference and language.</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Managing Cookies</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You can control cookies through your browser settings. However, disabling cookies may affect the functionality of EasyResume, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
            <li>Loss of saved resume data</li>
            <li>Reset theme preferences</li>
            <li>Reduced website functionality</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-400">
            If you have questions about our use of cookies, contact us at support@easyresume.com
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default Cookies;