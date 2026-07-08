"use client"
import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const URL = "";
  const router = useRouter(); 
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // زدنا هادي باش المستخدم ما يبقاش يبرك بزاف دالمرات فاش كيتسنى الـ API

  const emailRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true); // كيبدا التحميل

    const patientData = {
      email: email,
      password: password,
    };

    try {
      // صيفطنا الـ Fetch Request (حيّدنا الـ Authorization Headers حيت ما محتاجينهمش فـ اللوكين)
      const response = await fetch("/api/patients/login", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      });

      const res = await response.json();

      if (response.ok) {
        // حفظ التوكن والـ Role فـ الكوكيز
        Cookies.set("token", res.token, { expires: 7 });
        Cookies.set("role", res.role, { expires: 7 });
        
        alert(res.message || "Logged in successfully!");

        // مسح الحقول
        setEmail("");
        setPassword("");

        // التوجيه على حسب الـ Role
        if (res.role === "patient") {
          router.push("/dashboard");
        } else if (res.role === "doctor") {
          router.push("/doctor");
        } else {
          alert("Unknown role. Please contact support.");
        }
      } else {
        alert(res.message || "Login failed");
        emailRef.current?.focus(); // زدت الـ ? باش نضمنو ما يوقعش Error إلا كان الريف خاوي
      }
    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false); // كيسالي التحميل وخا يوقع Error
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gray-200 dark:bg-slate-950 flex items-center justify-center px-4 sm:px-6">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-10 w-full max-w-md text-center">
          
          <h2 className="text-2xl dark:text-white font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-500 dark:text-gray-300 mb-6 text-sm sm:text-base">Please login to your account</p>

          <form className="space-y-4" onSubmit={handleLogin}>
            <input
              type="email"
              ref={emailRef}
              placeholder="Email address"
              className="w-full dark:text-white border border-gray-300 dark:border-gray-500 dark:bg-gray-700 rounded-lg px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required // كيجبر المستخدم يدخل الايميل قبل ما يصيفط
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full dark:text-white border border-gray-300 dark:border-gray-500 dark:bg-gray-700 rounded-lg px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required // كيجبر المستخدم يدخل الباسورد
            />

            <button
              type="submit"
              disabled={isLoading} // كيحبس الزر فاش كيكون كيتسنى الجواب
              className={`w-full text-white py-2.5 rounded-lg font-medium transition text-sm sm:text-base ${
                isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-5">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 font-medium hover:underline pl-1">
              Register
            </Link>
          </p>

        </div>
      </section>
    </>
  );
}