"use client";

import React, { useState } from "react";

export default function PatientProfile() {
  // 1. حالة التعديل (واش اليوزر كيشوف ولا كيعدل)
  const [isEditing, setIsEditing] = useState(false);

  // 2. بيانات المريض الحالية
  const [profile, setProfile] = useState({
    firstName: "Said",
    lastName: "Ait Bendaoud",
    email: "said.aitbendaoud@email.com",
    phone: "+212 612-345678",
    birthDate: "1992-05-14",
    gender: "Male",
    bloodType: "O+",
    allergies: "Penicillin, Peanuts",
    emergencyContact: "Fatima Alami (Wife) - +212 611-998877",
  });

  // 3. حالة مؤقتة لتخزين التعديلات قبل الحفظ
  const [tempProfile, setTempProfile] = useState({ ...profile });

  // دالة التعامل مع تغيير المدخلات (Inputs)
  const handleChange = (e) => {
    setTempProfile({ ...tempProfile, [e.target.name]: e.target.value });
  };

  // دالة حفظ التعديلات
  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...tempProfile });
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  // دالة إلغاء التعديل ورجوع البيانات كما كانت
  const handleCancel = () => {
    setTempProfile({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 md:p-10 flex justify-center items-start">
      <div className="max-w-4xl w-full bg-slate-900/40 border border-slate-800/80 rounded-2xl shadow-xl overflow-hidden">
        
        {/* هيدر البروفايل (الخلفية العلوية والرمز) */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-teal-500 relative">
          <div className="absolute -bottom-12 left-6 md:left-10 flex items-end space-x-4 space-x-reverse">
            <div className="w-24 h-24 bg-slate-900 border-4 border-slate-950 rounded-2xl flex items-center justify-center text-3xl font-bold text-teal-400 shadow-xl">
              {profile.firstName[0]}{profile.lastName[0]}
            </div>
            <div className="mb-2">
              <h1 className="text-xl md:text-2xl font-bold text-white">{profile.firstName} {profile.lastName}</h1>
              <p className="text-xs text-slate-200/80">Patient Account #MED-9482</p>
            </div>
          </div>
        </div>

        {/* محتوى الاستمارة / البيانات */}
        <form onSubmit={handleSave} className="p-6 md:p-10 pt-16 space-y-8">
          
          {/* الأزرار العلوية للتحكم */}
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <h3 className="text-lg font-bold text-slate-200">Personal & Medical Records</h3>
            {!isEditing ? (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-slate-800 hover:bg-slate-700 text-teal-400 font-semibold py-2 px-4 rounded-xl text-sm transition border border-slate-700"
              >
                ✏️ Edit Profile
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-slate-950 font-bold py-2 px-4 rounded-xl text-sm transition shadow-lg"
                >
                  Save
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

          {/* القسم الأول: المعلومات الشخصية */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-teal-400 uppercase tracking-wider">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <label className="block text-slate-400 mb-1.5">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  disabled={!isEditing}
                  value={tempProfile.firstName}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-slate-200 transition"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1.5">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  disabled={!isEditing}
                  value={tempProfile.lastName}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-slate-200 transition"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  disabled={!isEditing}
                  value={tempProfile.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-slate-200 transition"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1.5">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  disabled={!isEditing}
                  value={tempProfile.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-slate-200 transition"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1.5">Birth Date</label>
                <input
                  type="date"
                  name="birthDate"
                  disabled={!isEditing}
                  value={tempProfile.birthDate}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-slate-200 transition"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1.5">Gender</label>
                <select
                  name="gender"
                  disabled={!isEditing}
                  value={tempProfile.gender}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-slate-200 transition appearance-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/60 my-6"></div>

          {/* القسم الثاني: المعلومات الطبية الحساسة */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-rose-400 uppercase tracking-wider">Medical Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="md:col-span-1">
                <label className="block text-slate-400 mb-1.5">Blood Type</label>
                <input
                  type="text"
                  name="bloodType"
                  disabled={!isEditing}
                  value={tempProfile.bloodType}
                  onChange={handleChange}
                  placeholder="e.g., A+, O-"
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-rose-500 disabled:opacity-60 text-rose-400 font-bold transition text-center"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-slate-400 mb-1.5">Known Allergies</label>
                <input
                    type="text"
                    name="allergies"
                    disabled={!isEditing}
                    value={tempProfile.allergies}
                    onChange={handleChange}
                    placeholder="None"
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-rose-500 disabled:opacity-60 text-slate-200 transition"
                />
                </div>
                <div className="md:col-span-3">
                <label className="block text-slate-400 mb-1.5">Emergency Contact</label>
                <input
                    type="text"
                    name="emergencyContact"
                    disabled={!isEditing}
                    value={tempProfile.emergencyContact}
                    onChange={handleChange}
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 disabled:opacity-60 text-slate-200 transition"
                />
                </div>
            </div>
            </div>

        </form>
        </div>
    </div>
    );
}