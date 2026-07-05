    "use client";

    import React, { useState, useEffect } from "react";
    import { useDoctor } from "@/context/DoctorContext";
    import Cookies from "js-cookie";

    export default function MedicalDashboard() {
    // 1. بيانات المريض (profile) + حالة التحميل (loading)
    const { profile, loading } = useDoctor();

    // 2. قائمة المواعيد (الجديدة والقديمة)
    const [appointments, setAppointments] = useState([]);
    const statusOrder = {
        "Pending" : 1,
        "Confirmed": 2,
        "Completed": 3,
        "Cancelled": 4
    };

    useEffect(() => { 
        async function getAppointments() {
        try {
            const response = await fetch("/api/patients/appointments", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get("token")}`, 
            },
            });

            const data = await response.json();

            if (response.ok) {
            setAppointments(data);
            } else {
            console.error("Server error:", data.message);
            }

        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
        }
        getAppointments();
    }, []);

    // 3. حالة الفورم ديال حجز موعد جديد
    const [showForm, setShowForm] = useState(false);
    const [newAppt, setNewAppt] = useState({ visitType: "", reason: "", appointmentDate: "", appointmentTime: "" });

    // 5. دالة إضافة (حجز) موعد جديد
    const handleBookAppointment = async (e) => {
        e.preventDefault();

        const addedAppt = {
        patientId: profile?._id,
        fullName: profile?.fullName,
        appointmentDate: newAppt.appointmentDate,
        appointmentTime: newAppt.appointmentTime,
        visitType: newAppt.visitType,
        reason: newAppt.reason,
        status: "Pending",
        };

        if (addedAppt.visitType !== "" && addedAppt.appointmentDate !== "" && addedAppt.appointmentTime !== "") {
        try {
            const response = await fetch("/api/patients/appointment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get("token")}`,
            },
            body: JSON.stringify(addedAppt),
            });

            if (response.ok) {
            const savedApptFromDb = await response.json(); 
            setAppointments([savedApptFromDb, ...appointments]);
            setShowForm(false);
            setNewAppt({ visitType: "", reason: "", appointmentDate: "", appointmentTime: "" });
            } else {
            const errorData = await response.json();
            alert(errorData.message || "Failed to book appointment");
            setShowForm(false);
            setNewAppt({ visitType: "", reason: "", appointmentDate: "", appointmentTime: "" });
            }

        } catch (error) {
            console.error("Error booking appointment:", error);
        }
        } else {
        console.error("Please fill in all required fields.");
        }
    };

    const handleCancelled = async (id) => {
        if (confirm("Are you sure you want to cancel this appointment?")){
        setAppointments(appointments.map(appt => 
            appt._id === id ? { ...appt, status: "Cancelled" } : appt
        ));
        
        try {
            await fetch(`/api/patients/appointments/${id}/status-update`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${Cookies.get("token")}`,
            },
            body: JSON.stringify({ status: "Cancelled" }),
            });
        } catch (error) {
            console.error("Error cancelling appointment:", error);
        }
        }
    };

    const lastAppointment = appointments && appointments.length > 0 ? appointments[appointments.length - 1] : null;
    const lastVisit = lastAppointment?.appointmentDate ? lastAppointment.appointmentDate.split('T')[0] : "No visits yet";

    return (
        <div className="min-h-screen dark:bg-slate-950 text-slate-100 p-4 sm:p-6 md:p-10">
            
        {/* Header section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-700">
                Patient Dashboard
            </h1>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">Welcome back, manage your health and appointments.</p>
            </div>
            
            <button
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 text-white font-semibold py-2.5 px-5 rounded-xl shadow-lg transition duration-200"
            >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Book New Appointment
            </button>
        </div>

        {/* Grid Layout الرئيسي */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* العمود الأول: معلومات المريض */}
            <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-linear-to-tr from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-xl font-bold text-slate-950 shadow-inner shrink-0">
                    {profile?.fullName ? profile.fullName.split(" ").map(n => n[0]).join("") : "P"}
                </div>
                <div className="min-w-0">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-200 truncate">{profile?.fullName}</h2>
                    <p className="text-xs sm:text-sm text-teal-400 font-medium truncate">ID: {profile?._id || "N/A"}</p>
                </div>
                </div>

                <div className="border-t border-slate-800/80 my-4"></div>

                <div className="space-y-4 text-sm">
                <div className="flex justify-between gap-2"><span className="text-slate-400">Age:</span><span className="font-semibold">{profile?.age || "N/A"} years</span></div>
                <div className="flex justify-between gap-2"><span className="text-slate-400">Blood Type:</span><span className="font-semibold text-rose-400">{profile?.bloodType || "N/A"}</span></div>
                <div className="flex justify-between gap-2"><span className="text-slate-400">Phone:</span><span className="font-semibold text-right break-all">{profile?.phone || "N/A"}</span></div>
                <div className="flex justify-between gap-2"><span className="text-slate-400">Email:</span><span className="font-semibold text-slate-300 text-right break-all max-w-[70%]">{profile?.email || "N/A"}</span></div>
                <div className="flex justify-between gap-2"><span className="text-slate-400">Last Checkup:</span><span className="font-semibold text-slate-300">{lastVisit}</span></div>
                </div>
            </div>
            </div>

            {/* العمود الثاني والثالث: لوحة المواعيد الجدية والقديمة */}
            <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 sm:p-6 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold text-slate-200 mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Appointments History & Schedule
                </h3>

                {/* لستة المواعيد */}
                <div className="space-y-4">
                {appointments.length === 0 ? (
                    <p className="text-center text-slate-500 py-8 text-sm">No appointments scheduled.</p>
                ) : (
                    appointments
                    .sort((a, b) => (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99))
                    .map((appt) => (
                    <div
                        key={appt._id || appt.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-900/80 border border-slate-800/60 rounded-xl gap-4 hover:border-slate-700 transition"
                    >
                        <div className="flex items-start gap-3.5">
                        <div className={`p-2.5 rounded-xl shrink-0 ${appt.status === "Cancelled" ? "bg-red-500/10 text-red-400" : "bg-slate-800 text-slate-400"}`}>
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className="overflow-hidden min-w-0">
                            <h4 className="font-bold text-slate-200 text-sm sm:text-base truncate">{appt.visitType}</h4>
                            <p className="text-xs text-slate-400 mb-2 wrap-break-word">{appt.reason}</p>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300">
                            <span className="flex items-center gap-1">📆 {appt.appointmentDate ? appt.appointmentDate.split('T')[0] : 'N/A'}</span>
                            <span className="flex items-center gap-1">🕒 {appt.appointmentTime}</span>
                            </div>
                        </div>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto border-t sm:border-0 border-slate-800/60 pt-3 sm:pt-0">
                        <span
                            className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                            appt.status === "Cancelled" ? "bg-red-500/10 text-red-400 border border-red-500/20" :
                            appt.status === "Pending" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20" :
                            appt.status === "Confirmed" ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" :
                            "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            }`}
                        >
                            {appt.status}
                        </span>

                        {appt.status === "Pending" && (
                            <button
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCancelled(appt._id);
                            }}
                            className="text-xs font-semibold bg-red-600 hover:bg-red-500 text-white px-3 py-1.5 rounded-lg transition"
                            > 
                            Cancel
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

        {/* مودال منبثق حقيقي لحجز موعد جديد - Responsive ممتاز لجميع الشاشات */}
        {showForm && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
                <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Schedule Appointment
                </h3>
                <form onSubmit={handleBookAppointment} className="space-y-4 text-sm">
                <div>
                    <label className="block text-slate-400 mb-1.5">Specialty</label>
                    <select
                    required
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 focus:outline-none focus:border-blue-500 text-slate-200"
                    value={newAppt.visitType}
                    onChange={(e) => setNewAppt({ ...newAppt, visitType: e.target.value })} 
                    >
                    <option value="">Select type of appointment</option>
                    <option value="Check-up">Check-up</option>
                    <option value="Follow-up">Follow-up</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Urgent">Urgent</option>
                    </select>
                </div>
                <div>
                    <label className="block text-slate-400 mb-1.5">Reason for Visit</label>
                    <textarea
                    required
                    placeholder="e.g., Routine Checkup"
                    rows={3}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 focus:outline-none focus:border-blue-500 text-slate-200 resize-none"
                    value={newAppt.reason}
                    onChange={(e) => setNewAppt({ ...newAppt, reason: e.target.value })}
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                    <label className="block text-slate-400 mb-1.5">Date</label>
                    <input
                        type="date"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 focus:outline-none focus:border-blue-500 text-slate-200"
                        value={newAppt.appointmentDate}
                        onChange={(e) => setNewAppt({ ...newAppt, appointmentDate: e.target.value })}
                    />
                    </div>
                    <div>
                    <label className="block text-slate-400 mb-1.5">Time</label>
                    <input
                        type="time"
                        required
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 focus:outline-none focus:border-blue-500 text-slate-200"
                        value={newAppt.appointmentTime}
                        onChange={(e) => setNewAppt({ ...newAppt, appointmentTime: e.target.value })}
                    />
                    </div>
                </div>
                <div className="flex gap-3 pt-2">
                    <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-xl transition">Confirm</button>
                    <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2.5 rounded-xl transition">Cancel</button>
                </div>
                </form>
            </div>
            </div>
        )}
        </div>
    );
    }