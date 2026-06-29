"use client";

import React, { useState } from "react";



export default function DoctorDashboard() {
  // 1. إحصائيات سريعة خاصة بالطبيب
  const [stats, setStats] = useState({
    totalPatients: 42,
    todayAppointments: 8,
    pendingReports: 3,
  });

  // 2. بيانات المواعيد والمرضى الخاصة بالطبيب ليومنا هذا
  const [appointments, setAppointments] = useState([
    { id: 1, patientName: "Youssef Alami", age: 29, date: "2026-06-15", time: "09:30 AM", type: "Check-up", status: "Completed", phone: "+212 611-223344" },
    { id: 2, patientName: "Fatima Zahra", age: 45, date: "2026-06-15", time: "10:15 AM", type: "Follow-up", status: "Pending", phone: "+212 655-778899" },
    { id: 3, patientName: "Amine Kamal", age: 34, date: "2026-06-15", time: "11:00 AM", type: "Consultation", status: "cancelled", phone: "+212 644-556677" },
    { id: 4, patientName: "Khadija Rouissi", age: 62, date: "2026-06-15", time: "02:00 PM", type: "Urgent", status: "confirmed", phone: "+212 633-112233" },
  ]);
  const statusOrder = {
    "Pending" : 1,
    "confirmed": 2,
    "Completed": 3,
    "cancelled": 4
  };

  // 3. المريض اللي كليك عليه الدكتور باش يشوف معلوماته التفصيلية (الافتراضي هو الأول)
  const [selectedPatient, setSelectedPatient] = useState(appointments[1]);

  // دالة لتغيير حالة الموعد (مثلاً رده انتهى Completed)
  const handleComplete = (id) => {
    if (confirm("Are you sure this appointment is Done?")){
      setAppointments(appointments.map(appt => 
        appt.id === id ? { ...appt, status: "Completed" } : appt
      ));
      
      // تحديث المريض المحدد فـ الشاشة إذا تبدلات حالتو
      if (selectedPatient.id === id) {
        setSelectedPatient({ ...selectedPatient, status: "Completed" });
      }
    }
  };
  const handleCancelled = (id) => {
    if (confirm("Are you sure you want to cancel this appointment?")){
      setAppointments(appointments.map(appt => 
        appt.id === id ? { ...appt, status: "cancelled" } : appt
      ));
      
      // تحديث المريض المحدد فـ الشاشة إذا تبدلات حالتو
      if (selectedPatient.id === id) {
        setSelectedPatient({ ...selectedPatient, status: "cancelled" });
      }
    }
  };
    const handleConfirme = (id) => {
      if (confirm("Are you sure you want to confirmed this appointment?")){
        setAppointments(appointments.map(appt => 
          appt.id === id ? { ...appt, status: "confirmed" } : appt
        ));
        
        // تحديث المريض المحدد فـ الشاشة إذا تبدلات حالتو
        if (selectedPatient.id === id) {
          setSelectedPatient({ ...selectedPatient, status: "confirmed" });
        }
      }
  };
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 text-slate-100 p-6 md:p-10">
      
      {/* الهيدر ترحيبي بالدكتور */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-blue-600">
          Welcome Back, Dr. Bensouda
        </h1>
        <p className="text-gray-700 dark:text-slate-400 text-sm mt-1">Here is your schedule and patient overview for today.</p>
      </div>

      {/* بطاقات الإحصائيات (Stats Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-200 dark:bg-slate-900/50 border border-gray-300 dark:border-slate-800 p-5 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400 font-medium">Today's Appointments</p>
            <h3 className="text-2xl font-bold text-blue-600 mt-1">{stats.todayAppointments} Patients</h3>
          </div>
          <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl">🕒</div>
        </div>
        <div className="bg-gray-200 dark:bg-slate-900/50 border border-gray-300 dark:border-slate-800 p-5 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400 font-medium">Total Patients Managed</p>
            <h3 className="text-2xl font-bold text-green-600 mt-1">{stats.totalPatients} Total</h3>
          </div>
          <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl">👥</div>
        </div>
        <div className="bg-gray-200 dark:bg-slate-900/50 border border-gray-300 dark:border-slate-800 p-5 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400 font-medium">Pending Medical Reports</p>
            <h3 className="text-2xl font-bold text-amber-400 mt-1">{stats.pendingReports} Files</h3>
          </div>
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl">📝</div>
        </div>
      </div>

      {/* الـ Grid الأساسي: لستة المواعيد على اليسار وتفاصيل المريض على اليمين */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* قسم لستة المواعيد اليومية */}
        <div className="lg:col-span-2 bg-gray-200 dark:bg-slate-900/30 border border-gray-300 dark:border-slate-800/80 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg font-bold text-gray-700 dark:text-slate-200 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
            Today's Live Queue
          </h3>
          
          <div className="space-y-3">
            {appointments
              .sort((a, b) => (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99))
              .map((appt) => (
              <div
                key={appt.id}
                onClick={() => setSelectedPatient(appt)}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl cursor-pointer transition border ${
                  selectedPatient.id === appt.id
                    ? "bg-gray-400 dark:bg-slate-900 border-gray-300 dark:border-teal-500/40 shadow-md shadow-teal-500/5"
                    : "bg-gray-300 dark:bg-slate-900/60 border-gray-300 dark:border-slate-800/60 hover:border-gray-400 dark:hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="text-sm font-semibold text-blue-600 bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/10">
                    {appt.time}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-slate-200">{appt.patientName}</h4>
                    <p className="text-xs text-gray-600 dark:text-slate-400">{appt.type} • {appt.age} years old</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 mt-3 sm:mt-0">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    appt.status === "Completed" ? "bg-slate-800 text-slate-400" :
                    appt.status === "cancelled" ? "bg-red-200 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20" :
                    "bg-yellow-500/10 dark:bg-blue-500/10 text-yellow-700 dark:text-blue-400 border border-blue-500/20"
                  }`}>
                    {appt.status}
                  </span>

                  {(appt.status !== "cancelled" && appt.status !== "Completed" && appt.status !== "Pending")  &&  (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // باش ما يتفتحش الـ detail كارت بالخطأ
                        handleComplete(appt.id);
                      }}
                      className="text-xs font-semibold bg-green-600 hover:bg-green-500 text-slate-950 px-3 py-1.5 rounded-lg transition"
                    >
                      Done
                    </button>
                  )}
                  {appt.status === "Pending" &&  (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // باش ما يتفتحش الـ detail كارت بالخطأ
                          handleCancelled(appt.id);
                        }}
                        className="text-xs font-semibold bg-red-600 hover:bg-red-500 text-slate-950 px-3 py-1.5 rounded-lg transition"
                      > 
                        cancelled
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // باش ما يتفتحش الـ detail كارت بالخطأ
                          handleConfirme(appt.id);
                        }}
                        className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-slate-950 px-3 py-1.5 rounded-lg transition"
                      >
                        Confirme
                      </button>
                    
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* قسم تفاصيل المريض المحدد (Patient Quick File) */}
        <div className="lg:col-span-1">
          <div className="bg-gray-200 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-gray-300 dark:border-slate-800 shadow-xl sticky top-6">
            <h3 className="text-md font-bold text-gray-800 dark:text-slate-400 uppercase tracking-wider mb-4">Patient Mini-File</h3>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-linear-to-tr from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold text-slate-950 mx-auto mb-3 shadow-lg">
                {selectedPatient.patientName.split(" ").map(n => n[0]).join("")}
              </div>
              <h2 className="text-xl font-bold text-slate-200">{selectedPatient.patientName}</h2>
              <p className="text-sm text-gray-600 dark:text-slate-400">Age: {selectedPatient.age} • Phone: {selectedPatient.phone}</p>
            </div>

            <div className="border-t border-gray-300 dark:border-slate-800 my-4"></div>

            <div className="space-y-4 text-sm">
              <div>
                <label className="text-xs text-gray-600 dark:text-slate-500 block mb-1">Reason for Visit</label>
                <div className="bg-gray-300 dark:bg-slate-950 p-3 rounded-xl border border-gray-300 dark:border-slate-800 font-medium text-gray-500 dark:text-slate-300">
                  {selectedPatient.type} - Patient requires routine checkup and discussion of recent laboratory results.
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 dark:text-slate-500 block mb-1">Current Appointment Status</label>
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full  ${
                    selectedPatient.status === "Completed" ? "bg-slate-500 " :
                    selectedPatient.status === "In Progress" ? "bg-amber-400 animate-pulse" : "bg-blue-400"
                  }`}></span>
                  <span className="font-semibold text-gray-700 dark:text-slate-300">{selectedPatient.status}</span>
                </div>
              </div>
            </div>

            {/* أزرار سريعة لإجراءات الطبيب */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-4 rounded-xl text-xs transition border border-slate-700/50">
                📝 Add Note
              </button>
              <button className="bg-linear-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-lg">
                💊 Prescribe
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}