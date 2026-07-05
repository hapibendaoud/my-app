"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Register() {

  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const emailRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const patientData = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone,
    gender: gender,
    birthDate: birthDate,
    };

    try {
      // 2. كنصيفطو الـ Fetch Request
      const response = await fetch("/api/patients/register", {
        method: "POST", // 👈 رجعناها POST ماشي GET
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      });

      // 3. قراءة الجواب من السيرفر
      const res = await response.json();

      if (response.ok) {
        
        alert(res.message); 
            // Reset form fields after submission
        setFullName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setGender("");
        setBirthDate("");
        router.push("/login");
      } else {
        alert(res.message);
        emailRef.current.focus();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="min-h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-4">
      {/* تم تحسين الكارد هنا ليتناسب مع الشاشات الصغيرة والمتوسطة عبر إضافة التمرير الذكي عند الحاجة */}
      <div className="bg-white dark:bg-slate-800 shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md text-center max-h-[95vh] flex flex-col overflow-y-auto custom-scrollbar">

        <h2 className="text-2xl dark:text-white font-bold mb-1">Create Account</h2>
        <p className="text-gray-500 dark:text-gray-300 mb-5 text-sm">Register a new patient account</p>

        <form 
          onSubmit={handleSubmit}
          className="space-y-4 text-left flex-1">
          
          {/* الاسم الكامل */}
          <div>
            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full dark:text-white border border-gray-300 dark:border-slate-500 dark:bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* البريد الإلكتروني */}
          <div>
            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">Email Address</label>
            <input
              type="email"
              ref={emailRef}
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full dark:text-white border border-gray-300 dark:border-slate-500 dark:bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* كلمة المرور */}
          <div>
            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full dark:text-white border border-gray-300 dark:border-slate-500 dark:bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* رقم الهاتف */}
          <div>
            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">Phone Number</label>
            <input
              type="tel"
              placeholder="+212 600-000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full dark:text-white border border-gray-300 dark:border-slate-500 dark:bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* الجنس */}
          <div>
            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">Gender</label>
            <select 
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full text-slate-700 dark:text-white border border-gray-300 dark:border-slate-500 dark:bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* تاريخ الازدياد */}
          <div>
            <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1">Date of Birth</label>
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              className="w-full text-slate-700 dark:text-white border border-gray-300 dark:border-slate-500 dark:bg-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>

          {/* زر التسجيل */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition font-medium text-sm mt-2" 
          >
            Register Patient
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 font-medium hover:underline pl-1">
            Login
          </Link>
        </p>

      </div>
    </section>
  );
}