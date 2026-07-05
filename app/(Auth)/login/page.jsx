"use client"
import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();

      const patientData = {
      email: email,
      password: password,
      };

      try {
        // 2. كنصيفطو الـ Fetch Request
        const response = await fetch("/api/patients/login", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("token")}`, // Assuming you are using cookies for authentication
            "role": Cookies.get("role"), // Assuming you are storing the role in cookies
          },
          body: JSON.stringify(patientData),
        });

        // 3. قراءة الجواب من السيرفر
        const res = await response.json();

        if (response.ok) {
          Cookies.set("token", res.token, { expires: 7 });
          Cookies.set("role", res.role, { expires: 7 });
          alert(res.message);
          console.log("Token:", res.token);
          console.log("Role:", res.role);

          // Reset form fields after submission
          setEmail("");
          setPassword("");
          // router.push("/dashboard");
        } else {
          alert(res.message);
          emailRef.current.focus();
        }
      } catch (error) {
        console.error(error);
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
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full dark:text-white border border-gray-300 dark:border-gray-500 dark:bg-gray-700 rounded-lg px-4 py-2.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 font-medium transition text-sm sm:text-base"
            >
              Login
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
};