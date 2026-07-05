"use client";

import React, { useState } from "react";
import { useDoctor } from "@/context/DoctorContext";

export default function DoctorProfile() {
  // 1. حالة التعديل
  const [isEditing, setIsEditing] = useState(false);

const { profile, setProfile, tempProfile, setTempProfile, loading } = useDoctor();
if (loading) return <p className="p-5 text-center">Loading...</p>;
  // 2. بيانات الدكتور الحالية
  // const [profile, setProfile] = useState({
  //   // fullName: "",
  //   // phone: "",
  //   // specialty: "Cardiologist - General Medicine",
  //   // licenseNumber: "MD-2026-9941",
  //   // experience: "12 Years",
  //   // clinicAddress: "Anfa Boulevard, Twin Center, Floor 5, Casablanca",
  //   // bio: "Specialized in non-invasive cardiology, heart failure management, and advanced cardiovascular imaging. Passionate about preventative heart care.",
  //   // consultationFee: "300 DH",
  // });

  // React.useEffect(() => {

  // const getDoctorProfile = async () => {
  //   try {
  //     const response = await fetch(`/api/patients/doctors/${doctorId}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch doctor profile");
  //     }

  //     const data = await response.json();
  //     setProfile(data);
  //     setTempProfile(data);
      
  //     } catch (error) {
  //       console.error("Error fetching doctor profile:", error);
  //     }
  //   };
  //   getDoctorProfile();
  // }, []);
    // console.log("Fetched doctor profile:", profile);


  // 3. حالة مؤقتة للتعديلات
  // const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleChange = (e) => {
    setTempProfile({ ...tempProfile, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...tempProfile });
    setIsEditing(false);
    alert("Doctor profile updated successfully!");
  };

  const handleCancel = () => {
    setTempProfile({ ...profile.doctor });
    setIsEditing(false);
  };
  console.log("Doctor profile data:", profile);
  return (
    <div className="min-h-screen bg-gray-200 dark:bg-slate-950 text-slate-100 p-4 md:p-10 flex justify-center items-start">
      <div className="max-w-4xl w-full bg-gray-200 dark:bg-slate-900/40 border border-gray-300 dark:border-slate-800/80 rounded-2xl shadow-xl overflow-hidden">
        
        {/* هيدر البروفايل باللون الطبي الفيروزي */}
        <div className="h-32 bg-linear-to-r from-teal-600 to-blue-600 relative">
          <div className="absolute -bottom-12 left-6 md:left-10 flex items-end space-x-4 space-x-reverse">
            <div className="w-24 h-24 bg-gray-300 dark:bg-slate-900 border-4 border-gray-500 dark:border-slate-950 rounded-2xl flex items-center justify-center text-3xl font-bold text-blue-600 dark:text-teal-400 shadow-xl">
              Dr
            </div>
            <div className="mb-2">
              <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">Dr. {profile?.fullName}</h1>
              <p className="text-xs text-blue-600 dark:text-teal-300 font-medium">{profile?.specialization || ""}</p>
            </div>
          </div>
        </div>

        {/* فورم البيانات الشخصية والمهنية */}
        <form onSubmit={handleSave} className="p-6 md:p-10 pt-16 space-y-8">
          
          {/* التحكم فالحالة */}
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-slate-200">Professional Medical Profile</h3>
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 dark:bg-slate-800 hover:bg-slate-700 text-white dark:text-teal-400 font-semibold py-2 px-4 rounded-xl text-sm transition border border-gray-300 dark:border-slate-700"
              >
                ✏️ Edit Details
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-linear-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-slate-950 font-bold py-2 px-4 rounded-xl text-sm transition shadow-lg"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-300 py-2 px-4 rounded-xl text-sm transition"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>

          {/* القسم الأول: المعلومات الطبية والمهنية */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-blue-600 dark:text-teal-400 uppercase tracking-wider">Credentials & Practice</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-gray-600 dark:text-slate-400 mb-1.5">Medical Specialty</label>
                <input
                  type="text"
                  name="specialty"
                  disabled={!isEditing}
                  value={tempProfile.specialization || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-300 dark:bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-gray-600 dark:text-slate-200 transition"
                />
              </div>
              <div>
                <label className="block text-gray-600 dark:text-slate-400 mb-1.5">Medical License Number</label>
                <input
                  type="text"
                  name="licenseNumber"
                  disabled={true} // رخصة الطبيب غالباً كتبقى مقفولة ومكتبدلش لدواعي أمنية
                  value={tempProfile.licenseNumber || ""}
                  className="w-full bg-gray-300 dark:bg-slate-950/40 border border-slate-800/40 rounded-xl p-3 text-slate-500 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block text-gray-600 dark:text-slate-400 mb-1.5">Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  disabled={!isEditing}
                  value={tempProfile.experience || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-300 dark:bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-slate-200 transition"
                />
              </div>
              <div>
                <label className="block text-gray-600 dark:text-slate-400 mb-1.5">Consultation Fee (ثمن الفحص)</label>
                <input
                  type="text"
                  name="consultationFee"
                  disabled={!isEditing}
                  value={tempProfile?.consultationFee || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-300 dark:bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-amber-400 font-bold transition"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-600 dark:text-slate-400 mb-1.5">Clinic Address</label>
                <input
                  type="text"
                  name="clinicAddress"
                  disabled={!isEditing}
                  value={tempProfile?.clinicAddress || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-300 dark:bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-slate-200 transition"
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/60 my-6"></div>

          {/* القسم الثاني: الاتصال والنبذة الشخصية */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Contact & Biography</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-gray-600 dark:text-slate-400 mb-1.5">Contact Email</label>
                <input
                  type="email"
                  name="email"
                  disabled={!isEditing}
                  value={tempProfile?.email || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-300 dark:bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-blue-500 disabled:opacity-60 text-slate-200 transition"
                />
              </div>
              <div>
                <label className="block text-gray-600 dark:text-slate-400 mb-1.5">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  disabled={!isEditing}
                  value={tempProfile?.phoneNumber || ""}
                  onChange={handleChange}
                  className="w-full bg-gray-300 dark:bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-blue-500 disabled:opacity-60 text-slate-200 transition"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-gray-600 dark:text-slate-400 mb-1.5">Biography (النبذة الشخصية لي كتقرا فالموقع)</label>
                <textarea
                  name="bio"
                  disabled={!isEditing}
                  value={tempProfile?.bio || ""}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-gray-300 dark:bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-blue-500 disabled:opacity-60 text-slate-300 transition resize-none leading-relaxed"
                ></textarea>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}