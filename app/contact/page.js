import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">Contact Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Feel free to reach out to me using the contact details below.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-center text-gray-800 dark:text-gray-200">
            <svg className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
            <span className="text-xl">+91 6386128903</span>
          </div>
          <div className="flex items-center justify-center text-gray-800 dark:text-gray-200">
            <svg className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 4v7a2 2 0 002 2h14a2 2 0 002-2v-7m-18 0h18"></path></svg>
            <span className="text-xl">shwetankrai12@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}