"use client";

import React, { useState } from "react";

export default function MedicalDashboard() {
  // 1. بيانات المريض (مخزنة مؤقتاً)
    const [patientInfo] = useState({
    id: "MED-9482",
    name: "Said Ait Bendaoud",
    age: 34,
    bloodType: "O+",
    phone: "+212 612-345678",
    email: "said.aitbendaoud@email.com",
    lastVisit: "May 20, 2026",
    });

  // 2. قائمة المواعيد (الجديدة والقديمة)
    const [appointments, setAppointments] = useState([
    { id: 1, doctor: "Dr. Laila Bensouda", specialty: "Cardiologist", date: "2026-06-15", time: "10:00 AM", status: "Upcoming" },
    { id: 2, doctor: "Dr. Karim Tazi", specialty: "Dermatologist", date: "2026-06-22", time: "03:30 PM", status: "Upcoming" },
    { id: 3, doctor: "Dr. Laila Bensouda", specialty: "Cardiologist", date: "2026-05-20", time: "11:15 AM", status: "Completed" },
    { id: 4, doctor: "Dr. Youssef El Amrani", specialty: "General Practitioner", date: "2026-04-12", time: "09:00 AM", status: "Completed" },
    ]);

  // 3. حالة الفورم ديال حجز موعد جديد
    const [showForm, setShowForm] = useState(false);
    const [newAppt, setNewAppt] = useState({ doctor: "", specialty: "", date: "", time: "" });

  // 4. دالة حذف (إلغاء) موعد
    const handleCancelAppointment = (id) => {
    if (confirm("Are you sure you want to cancel this appointment?")) {
        setAppointments(appointments.filter((appt) => appt.id !== id));
    }
    };

  // 5. دالة إضافة (حجز) موعد جديد
    const handleBookAppointment = (e) => {
        e.preventDefault();
    const newId = appointments.length + 1;
    const addedAppt = {
        id: newId,
        doctor: newAppt.doctor,
        specialty: newAppt.specialty,
        date: newAppt.date,
        time: newAppt.time,
        status: "Upcoming",
    };
    setAppointments([addedAppt, ...appointments]);
    setShowForm(false);
    setNewAppt({ doctor: "", specialty: "", date: "", time: "" });
    };

    return (
    <div className="min-h-screen dark:bg-slate-950 text-slate-100 p-6 md:p-10">
        
      {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-blue-700">
                Patient Dashboard
                </h1>
                <p className="text-slate-400 text-sm mt-1">Welcome back, manage your health and appointments.</p>
            </div>
            
            {/* زر حجز موعد جديد */}
            <button
                onClick={() => setShowForm(!showForm)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg transition duration-200 transform hover:-translate-y-0.5"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Book New Appointment
            </button>
        </div>

      {/* Grid Layout الرئيسي */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* العمود الأول: معلومات المريض + فورم الحجز (إلى كان مفتوح) */}
        <div className="lg:col-span-1 space-y-6">
            
          {/* كارت معلومات المريض */}
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-slate-800 shadow-xl">
            <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-xl font-bold text-slate-950 shadow-inner">
                {patientInfo.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                <h2 className="text-xl font-bold text-slate-200">{patientInfo.name}</h2>
                <p className="text-sm text-teal-400 font-medium">Patient ID: {patientInfo.id}</p>
                </div>
            </div>

            <div className="border-t border-slate-800/80 my-4"></div>

            <div className="space-y-4 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">Age:</span><span className="font-semibold">{patientInfo.age} years</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Blood Type:</span><span className="font-semibold text-rose-400">{patientInfo.bloodType}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Phone:</span><span className="font-semibold">{patientInfo.phone}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Email:</span><span className="font-semibold text-slate-300 break-all">{patientInfo.email}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Last Checkup:</span><span className="font-semibold text-slate-300">{patientInfo.lastVisit}</span></div>
            </div>
            </div>

          {/* فورم حجز موعد جديد (Pop-in Form) */}
            {showForm && (
            <div className="bg-slate-900/90 border border-blue-500/30 rounded-2xl p-6 shadow-2xl transition duration-300 animate-in fade-in slide-in-from-bottom-4">
                <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Schedule Appointment
                </h3>
                <form onSubmit={handleBookAppointment} className="space-y-4 text-sm">
                <div>
                    <label className="block text-slate-400 mb-1.5">Doctor Name</label>
                    <input
                    type="text"
                    required
                    placeholder="e.g., Dr. Samir"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 focus:outline-none focus:border-blue-500 text-slate-200"
                    value={newAppt.doctor}
                    onChange={(e) => setNewAppt({ ...newAppt, doctor: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-slate-400 mb-1.5">Specialty</label>
                    <input
                    type="text"
                    required
                    placeholder="e.g., General"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 focus:outline-none focus:border-blue-500 text-slate-200"
                    value={newAppt.specialty}
                    onChange={(e) => setNewAppt({ ...newAppt, specialty: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                    <label className="block text-slate-400 mb-1.5">Date</label>
                    <input
                        type="date"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 focus:outline-none focus:border-blue-500 text-slate-200"
                        value={newAppt.date}
                        onChange={(e) => setNewAppt({ ...newAppt, date: e.target.value })}
                    />
                    </div>
                    <div>
                    <label className="block text-slate-400 mb-1.5">Time</label>
                    <input
                        type="time"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 focus:outline-none focus:border-blue-500 text-slate-200"
                        value={newAppt.time}
                        onChange={(e) => setNewAppt({ ...newAppt, time: e.target.value })}
                    />
                    </div>
                </div>
                <div className="flex gap-2 pt-2">
                    <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-xl transition">Confirm</button>
                    <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2 rounded-xl transition">Cancel</button>
                </div>
                </form>
            </div>
            )}
        </div>

        {/* العمود الثاني والثالث: لوحة المواعيد الجدية والقديمة */}
        <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Appointments History & Schedule
            </h3>

            {/* لستة المواعيد */}
            <div className="space-y-4">
                {appointments.length === 0 ? (
                <p className="text-center text-slate-500 py-8">No appointments scheduled.</p>
                ) : (
                appointments.map((appt) => (
                    <div
                    key={appt.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-900/80 border border-slate-800/60 rounded-xl gap-4 hover:border-slate-700 transition"
                    >
                    {/* معلومات الدكتور والوقت */}
                    <div className="flex items-start gap-3.5">
                        <div className={`p-2.5 rounded-xl ${appt.status === "Upcoming" ? "bg-blue-500/10 text-blue-400" : "bg-slate-800 text-slate-400"}`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        </div>
                        <div>
                        <h4 className="font-bold text-slate-200">{appt.doctor}</h4>
                        <p className="text-xs text-slate-400 mb-1">{appt.specialty}</p>
                        <div className="flex items-center gap-3 text-xs text-slate-300">
                            <span className="flex items-center gap-1">📆 {appt.date}</span>
                            <span className="flex items-center gap-1">🕒 {appt.time}</span>
                        </div>
                        </div>
                    </div>

                    {/* الحالة + زر الإلغاء */}
                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-0 border-slate-800 pt-3 sm:pt-0">
                        <span
                        className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                            appt.status === "Upcoming"
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        }`}
                        >
                        {appt.status}
                        </span>

                      {/* كيبان زر الإلغاء غير فالمواعيد المستقبلية (Upcoming) */}
                        {appt.status === "Upcoming" && (
                        <button
                            onClick={() => handleCancelAppointment(appt.id)}
                            className="p-2 text-slate-400 hover:text-rose-400 bg-slate-950 hover:bg-rose-500/10 border border-slate-800 hover:border-rose-500/20 rounded-xl transition"
                            title="Cancel Appointment"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                        )}
                    </div>
                    </div>
                ))
                )}
            </div>
            </div>
        </div>

        </div>
    </div>
    );
}