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
    console.log("Form Submitted:", formData);
    alert("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-12">
      {/* تحويل الـ Grid إلى عمود واحد في الموبايل وعمودين بدءاً من شاشات md */}
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-slate-800 shadow-2xl">
        
        {/* القسم الأول: معلومات الاتصال */}
        <div className="flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-teal-500 dark:from-slate-200 dark:to-gray-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-gray-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              Have a question or want to work together? Fill out the form and we will get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-5 sm:space-y-6">
            {/* الهاتف */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl border border-blue-500/20 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-slate-400">Phone</h4>
                <p className="text-base font-bold text-gray-800 dark:text-slate-200">+212 600-000000</p>
              </div>
            </div>

            {/* البريد الإلكتروني */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-xl border border-teal-500/20 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-slate-400">Email</h4>
                <p className="text-base font-bold text-gray-800 dark:text-slate-200">contact@yourproject.com</p>
              </div>
            </div>

            {/* الموقع */}
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl border border-purple-500/20 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.118 1.118 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-500 dark:text-slate-400">Location</h4>
                <p className="text-base font-bold text-gray-800 dark:text-slate-200">AGADIR</p>
              </div>
            </div>
          </div>

          <div className="text-xs sm:text-sm text-gray-400 dark:text-slate-500 pt-4 border-t border-gray-200/60 dark:border-slate-800/60">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>

        {/* القسم الثاني: نموذج الارسال */}
        <div className="bg-gray-50/50 dark:bg-slate-900/40 p-5 sm:p-6 rounded-xl border border-gray-200/60 dark:border-slate-800 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500"
                placeholder="Inquiry about services"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-gray-300 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition duration-200 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-linear-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition duration-200 transform active:scale-98 outline-none"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}