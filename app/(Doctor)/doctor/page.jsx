"use client";

import React, { useState, useEffect, Profiler } from "react";
import { useDoctor } from "@/context/DoctorContext";
import Cookies from "js-cookie";  

export default function DoctorDashboard() {

  const URL = "https://my-app-backend-qm7ic75no-hapibendaouds-projects.vercel.app/";

  // 1. إحصائيات سريعة خاصة بالطبيب
  const [stats, setStats] = useState({
    totalPatients: 0,
    todayAppointments: 0,
    pendingReports: 0,
  });

  // 2. بيانات المواعيد والمرضى الخاصة بالطبيب ليومنا هذا
  const [appointments, setAppointments] = useState([]);
  const { profile, loading } = useDoctor();


  // 3. المريض اللي كليك عليه الدكتور باش يشوف معلوماته التفصيلية
  const [selectedPatient, setSelectedPatient] = useState(null);
  // حالة للتحكم في ظهور تفاصيل المريض كـ Drawer في الشاشات الصغيرة
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // دالة مساعدة لتحديث الإحصائيات بناءً على قائمة المواعيد الحالية
  const updateStatsStructure = (apptsList) => {
    setStats({
      totalPatients: apptsList.length,
      todayAppointments: apptsList.filter(appt => appt.status === "Pending" || appt.status === "Confirmed").length,
      pendingReports: apptsList.filter(appt => appt.status === "Pending").length,
    });
  };

  useEffect(() => { 
    async function getAppointments() {
      try {
        const response = await fetch(`${URL}/api/patients/appointments`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("token")}`, 
          },
        });

        const data = await response.json();

        if (response.ok) {
          setAppointments(data);
          updateStatsStructure(data);
          
          if (data.length > 0) {
            setSelectedPatient(data[0]);
          }
        } else {
          console.error("Server error:", data.message);
        }

      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    }
    getAppointments();
  }, []);

  const statusOrder = {
    "Pending" : 1,
    "Confirmed": 2,
    "Completed": 3,
    "Cancelled": 4
  };

  const handlePatientSelect = (appt) => {
    setSelectedPatient(appt);
    setIsDrawerOpen(true); // فتح تفاصيل المريض تلقائياً في الهواتف
  };

  // دالة لتغيير حالة الموعد (Completed)
  const handleComplete = async (id) => {
    if (confirm("Are you sure this appointment is Done?")) {
      const previousAppointments = [...appointments];
      const previousSelectedPatient = selectedPatient ? { ...selectedPatient } : null;

      const updatedAppts = appointments.map(appt => 
        appt._id === id ? { ...appt, status: "Completed" } : appt
      );
      
      setAppointments(updatedAppts);
      updateStatsStructure(updatedAppts);

      if (selectedPatient && selectedPatient._id === id) {
        setSelectedPatient({ ...selectedPatient, status: "Completed" });
      }

      try {
        const response = await fetch(`${URL}/api/patients/appointments/${id}/status-update`, {
          method: "PATCH", 
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify({ status: "Completed" }),
        });

        if (!response.ok) {
          throw new Error("Failed to update status on server");
        }

      } catch (error) {
        console.error("Error updating status:", error);
        alert("Appointment status update failed. Reverting changes.");
        
        setAppointments(previousAppointments);
        setSelectedPatient(previousSelectedPatient);
        updateStatsStructure(previousAppointments);
      }
    }
  };

  const handleCancelled = async (id) => {
    if (confirm("Are you sure you want to cancel this appointment?")){
      const updatedAppts = appointments.map(appt => 
        appt._id === id ? { ...appt, status: "Cancelled" } : appt
      );

      setAppointments(updatedAppts);
      updateStatsStructure(updatedAppts);

      if (selectedPatient && selectedPatient._id === id) {
        setSelectedPatient({ ...selectedPatient, status: "Cancelled" });
      }

      try {
        await fetch(`${URL}/api/patients/appointments/${id}/status-update`, {
          method: "PATCH", 
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify({ status: "Cancelled" }),
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleConfirme = async (id) => {
    if (confirm("Are you sure you want to confirmed this appointment?")){
      const updatedAppts = appointments.map(appt => 
        appt._id === id ? { ...appt, status: "Confirmed" } : appt
      );

      setAppointments(updatedAppts);
      updateStatsStructure(updatedAppts);
      
      if (selectedPatient && selectedPatient._id === id) {
        setSelectedPatient({ ...selectedPatient, status: "Confirmed" });
      }
      try {
        await fetch(`/api/patients/appointments/${id}/status-update`, {
          method: "PATCH", 
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify({ status: "Confirmed" }),
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  // جزء رندر تفاصيل المريض لعزل الكود وتفادي التكرار
  const renderPatientMiniFile = () => (
    <>
      <div className="flex justify-between items-center mb-4 lg:mb-6">
        <h3 className="text-xs sm:text-sm font-bold text-gray-800 dark:text-slate-400 uppercase tracking-wider">Patient Mini-File</h3>
        <button 
          onClick={() => setIsDrawerOpen(false)} 
          className="lg:hidden text-gray-500 hover:text-slate-300 text-sm font-semibold p-1"
        >
          ✕ Close
        </button>
      </div>
      {!selectedPatient ? (
        <p className="text-sm text-gray-600 dark:text-slate-400">Select a patient from the queue to view details.</p>
      ) : (
        <>
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-linear-to-tr from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold text-slate-950 mx-auto mb-3 shadow-lg shrink-0">
              {selectedPatient?.fullName ? selectedPatient.fullName.split(" ").map(n => n[0]).join("") : "P"}
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-200 truncate">{selectedPatient?.fullName}</h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 mt-1">
              Age: {selectedPatient?.age} • Phone: <span className="break-all">{selectedPatient?.phone}</span>
            </p>
          </div>

          <div className="border-t border-gray-300 dark:border-slate-800 my-4"></div>

          <div className="space-y-4 text-sm">
            <div>
              <label className="text-xs text-gray-600 dark:text-slate-500 block mb-1">Reason for Visit</label>
              {/* تم استبدال wrap-break-words بـ break-words مع إضافة overflow-hidden */}
              <div className="bg-gray-300 dark:bg-slate-950 p-3 rounded-xl border border-gray-300 dark:border-slate-800 font-medium text-gray-700 dark:text-slate-300 wrap-break-word overflow-hidden">
                <span className="text-blue-500 font-bold">{selectedPatient?.visitType}</span> - {selectedPatient?.reason || "No specified reason"}
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-600 dark:text-slate-500 block mb-1">Current Appointment Status</label>
              <div className="flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${
                  selectedPatient?.status === "Completed" ? "bg-slate-500" :
                  selectedPatient?.status === "Confirmed" ? "bg-green-500" : "bg-blue-400"
                }`}></span>
                <span className="font-semibold text-gray-700 dark:text-slate-300">{selectedPatient?.status}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 px-4 rounded-xl text-xs transition border border-slate-700/50">
              📝 Add Note
            </button>
            <button className="bg-linear-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-slate-950 font-bold py-2.5 px-4 rounded-xl text-xs transition shadow-lg">
              💊 Prescribe
            </button>
          </div>
        </>
      )}
    </>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 text-slate-100 p-4 sm:p-6 md:p-10">
      
      {/* الهيدر ترحيبي بالدكتور */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-blue-600">
          Welcome Back, Dr. {profile?.fullName}
        </h1>
        <p className="text-gray-700 dark:text-slate-400 text-xs sm:text-sm mt-1">Here is your schedule and patient overview for today.</p>
      </div>

      {/* بطاقات الإحصائيات (Stats Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div className="bg-gray-200 dark:bg-slate-900/50 border border-gray-300 dark:border-slate-800 p-4 sm:p-5 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Today's Appointments</p>
            <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mt-1">{stats.todayAppointments} Patients</h3>
          </div>
          <div className="p-2.5 bg-teal-500/10 text-teal-400 rounded-xl text-lg">🕒</div>
        </div>
        <div className="bg-gray-200 dark:bg-slate-900/50 border border-gray-300 dark:border-slate-800 p-4 sm:p-5 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Total Patients Managed</p>
            <h3 className="text-xl sm:text-2xl font-bold text-green-600 mt-1">{stats.totalPatients} Total</h3>
          </div>
          <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-xl text-lg">👥</div>
        </div>
        <div className="bg-gray-200 dark:bg-slate-900/50 border border-gray-300 dark:border-slate-800 p-4 sm:p-5 rounded-2xl flex items-center justify-between">
          <div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Pending Medical Reports</p>
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mt-1">{stats.pendingReports} Files</h3>
          </div>
          <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl text-lg">📝</div>
        </div>
      </div>

      {/* الـ Grid الأساسي */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* قسم لستة المواعيد اليومية */}
        <div className="lg:col-span-2 bg-gray-200 dark:bg-slate-900/30 border border-gray-300 dark:border-slate-800/80 rounded-2xl p-4 sm:p-6 shadow-xl">
          <h3 className="text-base sm:text-lg font-bold text-gray-700 dark:text-slate-200 mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
            Today's Live Queue
          </h3>
          
          <div className="space-y-3">
            {appointments
              .sort((a, b) => (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99))
              .map((appt) => (
              <div
                key={appt._id}
                onClick={() => handlePatientSelect(appt)}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl cursor-pointer transition border gap-4 ${
                  selectedPatient?._id === appt._id
                    ? "bg-gray-400 dark:bg-slate-900 border-gray-300 dark:border-teal-500/40 shadow-md"
                    : "bg-gray-300 dark:bg-slate-900/60 border-gray-300 dark:border-slate-800/60 hover:border-gray-400 dark:hover:border-slate-700"
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="text-xs sm:text-sm font-semibold text-blue-600 bg-blue-500/10 px-2.5 py-1.5 rounded-lg border border-blue-500/10 shrink-0">
                    {appt.appointmentTime}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-gray-900 dark:text-slate-200 text-sm sm:text-base truncate">{appt.fullName}</h4>
                    <p className="text-xs text-gray-600 dark:text-slate-400 truncate">{appt.visitType} • {appt.age} years old</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-2.5 border-t sm:border-0 border-gray-400/30 dark:border-slate-800/60 pt-3 sm:pt-0 w-full sm:w-auto">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    appt.status === "Completed" ? "bg-slate-800 text-slate-400" :
                    appt.status === "Cancelled" ? "bg-red-200 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20" :
                    "bg-yellow-500/10 dark:bg-blue-500/10 text-yellow-700 dark:text-blue-400 border border-blue-500/20"
                  }`}>
                    {appt.status}
                  </span>

                  {(appt.status !== "Cancelled" && appt.status !== "Completed" && appt.status !== "Pending") && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleComplete(appt._id);
                      }}
                      className="text-xs font-semibold bg-green-600 hover:bg-green-500 text-slate-950 px-3 py-1.5 rounded-lg transition"
                    >
                      Done
                    </button>
                  )}
                  {appt.status === "Pending" && (
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); 
                          handleCancelled(appt._id);
                        }}
                        className="text-xs font-semibold bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 rounded-lg transition"
                      > 
                        Cancel
                      </button>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); 
                          handleConfirme(appt._id);
                        }}
                        className="text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg transition"
                      >
                        Confirm
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* قسم تفاصيل المريض المحدد - يظهر كجانب ثابت في الشاشات الكبيرة فقط */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="bg-gray-200 dark:bg-slate-900/60 backdrop-blur-md rounded-2xl p-6 border border-gray-300 dark:border-slate-800 shadow-xl sticky top-6">
            {renderPatientMiniFile()}
          </div>
        </div>

      </div>

      {/* Drawer سفلي للشاشات الصغيرة والمتوسطة (الهواتف والأجهزة اللوحية) */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-end justify-center bg-black/60 backdrop-blur-xs transition-opacity">
          <div className="bg-gray-200 dark:bg-slate-900 border-t border-gray-300 dark:border-slate-800 rounded-t-3xl p-5 w-full max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-200">
            {renderPatientMiniFile()}
          </div>
        </div>
      )}

    </div>
  );
}