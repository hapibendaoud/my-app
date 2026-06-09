"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic (e.g., API call)
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-900 from-slate-900 via-slate-850 to-gray-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
        
        {/* Section 1: Contact Information */}
        <div className="flex flex-col justify-between space-y-8 pl-0 md:pl-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gray-800-to-r from-gray-400 to-gray-400 bg-clip-text text-transparent mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-800 dark:text-slate-400 text-lg leading-relaxed">
              Have a question or want to work together? Fill out the form and we will get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-slate-400 ">Phone</h4>
                <p className="text-base text-gray-800 dark:text-slate-200">+212 600-000000</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-teal-500/10 text-teal-400 rounded-lg border border-teal-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-slate-400">Email</h4>
                <p className="text-base text-gray-800 dark:text-slate-200">contact@yourproject.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg border border-purple-500/20">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.118 1.118 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800 dark:text-slate-400">Location</h4>
                <p className="text-base text-gray-800 dark:text-slate-200">AGADIR</p>
              </div>
            </div>
          </div>

          <div className="text-sm text-gray-800 dark:text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        {/* Section 2: Contact Form */}
        <div className="bg-white/5 p-6 rounded-xl border border-white/5 shadow-inner">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-300 dark:bg-slate-900/50 border border-gray-400 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-slate-100 placeholder-slate-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-300 dark:bg-slate-900/50 border border-gray-400 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-slate-100 placeholder-slate-500"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-300 dark:bg-slate-900/50 border border-gray-400 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-slate-100 placeholder-slate-500"
                placeholder="Inquiry about services"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-slate-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-gray-300 dark:bg-slate-900/50 border border-gray-400 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-slate-100 placeholder-slate-500 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-350 transform hover:-translate-y-0.5 outline-none"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
