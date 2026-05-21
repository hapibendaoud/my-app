"use client"
import { useState } from "react";
import Link from "next/link";




export default function Login() {
  return (
    <>
        <section className="h-screen  flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-87 text-center">
        
        <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
        <p className="text-gray-500 mb-6">Please login to your account</p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Don't have an account?
          <Link href="/register" className="text-blue-600 font-medium">
            Register
          </Link>
        </p>

      </div>
    </section>
    </>
  );  
}
