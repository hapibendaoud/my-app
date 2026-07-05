    "use client";

    import React, { useState } from "react";

    export default function Settings() {
    // 1. لستة الممرضين الحالية
    const [nurses, setNurses] = useState([
        {
        id: 1,
        name: "Amine",
        age: 27,
        email: "amine@medcare.com",
        phone: "+212 611-223344",
        image: "/nurs-1.jpg",
        description: "An ER nurse at MedCare developed the 'UrgeCheck' app to log patients' vitals via voice commands, saving time and lives."
        },
        {
        id: 2,
        name: "Youssef",
        age: 31,
        email: "youssef@medcare.com",
        phone: "+212 677-889900",
        image: "/nurs-2.jpg",
        description: "Specialized in emergency triage and digital health coordination, ensuring flawless workflows during peak hours."
        },
        {
        id: 3,
        name: "Sara",
        age: 27,
        email: "sara@medcare.com",
        phone: "+212 633-445566",
        image: "/nurs-3.jpg",
        description: "Expert ICU assistant focusing on patient monitoring systems and post-surgical immediate care."
        },
        {
        id: 4,
        name: "Mohamed",
        age: 29,
        email: "mohamed@medcare.com",
        phone: "+212 655-667788",
        image: "/nurs-4.jpg",
        description: "Pediatric care specialist certified in compassionate family handling and clinical checkups."
        }
    ]);

    // 2. الـ State الخاصة بالفورم
    const [newNurse, setNewNurse] = useState({
        name: "",
        age: "",
        email: "",
        phone: "",
        description: "",
        image: null
    });

    // 3. States للتحكم في التعديل والحذف
    const [editingId, setEditingId] = useState(null); 
    const [deleteId, setDeleteId] = useState(null);   

    const handleInputChange = (e) => {
        setNewNurse({ ...newNurse, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
        setNewNurse({ ...newNurse, image: URL.createObjectURL(e.target.files[0]) });
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!newNurse.name || !newNurse.age || !newNurse.email || !newNurse.phone || !newNurse.description) {
        alert("Please fill in all fields!");
        return;
        }

        if (editingId) {
        setNurses(nurses.map(nurse => 
            nurse.id === editingId 
            ? { ...nurse, ...newNurse, age: parseInt(newNurse.age) } 
            : nurse
        ));
        setEditingId(null);
        alert("Nurse updated successfully!");
        } else {
        const nurseToAdd = {
            id: Date.now(),
            name: newNurse.name,
            age: parseInt(newNurse.age),
            email: newNurse.email,
            phone: newNurse.phone,
            description: newNurse.description,
            image: newNurse.image || null
        };
        setNurses([...nurses, nurseToAdd]);
        alert("Nurse added successfully!");
        }

        setNewNurse({ name: "", age: "", email: "", phone: "", description: "", image: null });
    };

    const handleEditClick = (nurse) => {
        setEditingId(nurse.id);
        setNewNurse({
        name: nurse.name,
        age: nurse.age,
        email: nurse.email,
        phone: nurse.phone,
        description: nurse.description,
        image: nurse.image
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleConfirmDelete = () => {
        setNurses(nurses.filter(nurse => nurse.id !== deleteId));
        setDeleteId(null);
        if (editingId === deleteId) {
        setEditingId(null);
        setNewNurse({ name: "", age: "", email: "", phone: "", description: "", image: null });
        }
    };

    // دالة تسجيل الخروج
    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (confirm("Do you want to log out?")) {
            // 1. مسح التوكن من الـ Cookies نهائياً
            Cookies.remove('token'); 

            // 3. صيفط المستخدم لصفحة الـ login
            router.push('/login');
            
            // 4. (إختياري) كتدير ريفريش خفيف باش كاع الـ Components يعاودو الراندر بلا بيانات المستخدم
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 md:p-10 flex flex-col items-center gap-8 relative pb-16">
        
        {/* الكارت الكبيرة: إضافة أو تعديل ممرض */}
        <div className="max-w-4xl w-full bg-white dark:bg-slate-900/40 border border-gray-300 dark:border-slate-800/80 rounded-2xl shadow-xl overflow-hidden">
            
            <div className="h-24 bg-linear-to-r from-teal-600 to-blue-600 flex items-center px-6 md:px-10 justify-between">
            <div>
                <h1 className="text-xl md:text-2xl font-bold text-white">
                {editingId ? "✏️ Edit Nurse Member" : "➕ Add New Nurse"}
                </h1>
                <p className="text-xs text-teal-200">
                {editingId ? "Modify fields below to update teamData." : "Fill in the professional details to populate your team component data."}
                </p>
            </div>
            
            {editingId && (
                <button
                type="button"
                onClick={() => {
                    setEditingId(null);
                    setNewNurse({ name: "", age: "", email: "", phone: "", description: "", image: null });
                }}
                className="bg-white/10 hover:bg-white/20 text-white text-xs px-3 py-1.5 rounded-lg font-medium transition"
                >
                Cancel Edit
                </button>
            )}
            </div>

            <form onSubmit={handleFormSubmit} className="p-6 md:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                
                {/* رفع الصورة الشخصية بالفورم */}
                <div className="md:col-span-1 flex flex-col items-center justify-center p-4 border-2 border-dashed border-gray-300 dark:border-slate-800 rounded-xl bg-gray-50 dark:bg-slate-950/40 min-h-55">
                {newNurse.image ? (
                    <img 
                    src={newNurse.image} 
                    alt="Nurse Preview" 
                    className="w-28 h-28 rounded-full object-cover border-2 border-teal-500 shadow-lg mb-3" 
                    />
                ) : (
                    <div className="w-16 h-16 bg-teal-500/10 text-teal-500 rounded-full flex items-center justify-center text-2xl mb-3">
                    👤
                    </div>
                )}
                <label className="cursor-pointer bg-slate-800 hover:bg-slate-700 text-teal-400 font-semibold py-1.5 px-3 rounded-lg text-xs transition border border-slate-700">
                    Upload Photo
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
                </div>

                {/* الحقول النصية */}
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                    <label className="block text-gray-600 dark:text-slate-400 mb-1.5 font-medium">Name</label>
                    <input
                    type="text"
                    name="name"
                    value={newNurse.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Amine"
                    className="w-full bg-gray-50 dark:bg-slate-950/60 border border-gray-300 dark:border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 text-gray-900 dark:text-slate-200 transition"
                    />
                </div>
                <div>
                    <label className="block text-gray-600 dark:text-slate-400 mb-1.5 font-medium">Age</label>
                    <input
                    type="number"
                    name="age"
                    value={newNurse.age}
                    onChange={handleInputChange}
                    placeholder="e.g., 27"
                    className="w-full bg-gray-50 dark:bg-slate-950/60 border border-gray-300 dark:border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 text-gray-900 dark:text-slate-200 transition"
                    />
                </div>
                <div>
                    <label className="block text-gray-600 dark:text-slate-400 mb-1.5 font-medium">Email Address</label>
                    <input
                    type="email"
                    name="email"
                    value={newNurse.email}
                    onChange={handleInputChange}
                    placeholder="amine@medcare.com"
                    className="w-full bg-gray-50 dark:bg-slate-950/60 border border-gray-300 dark:border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 text-gray-900 dark:text-slate-200 transition"
                    />
                </div>
                <div>
                    <label className="block text-gray-600 dark:text-slate-400 mb-1.5 font-medium">Phone Number</label>
                    <input
                    type="text"
                    name="phone"
                    value={newNurse.phone}
                    onChange={handleInputChange}
                    placeholder="+212 611-223344"
                    className="w-full bg-gray-50 dark:bg-slate-950/60 border border-gray-300 dark:border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 text-gray-900 dark:text-slate-200 transition"
                    />
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-gray-600 dark:text-slate-400 mb-1.5 font-medium">Description</label>
                    <textarea
                    name="description"
                    value={newNurse.description}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Write nurse responsibilities or achievements..."
                    className="w-full bg-gray-50 dark:bg-slate-950/60 border border-gray-300 dark:border-slate-800 rounded-xl p-3 focus:outline-none focus:border-teal-500 text-gray-900 dark:text-slate-200 transition resize-none"
                    ></textarea>
                </div>
                </div>
            </div>

            <div className="flex justify-end border-t border-gray-200 dark:border-slate-800/60 pt-4">
                <button
                type="submit"
                className={`font-bold py-2.5 px-6 rounded-xl text-sm transition shadow-lg ${
                    editingId 
                    ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/10" 
                    : "bg-linear-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white dark:text-slate-950 shadow-teal-500/10"
                }`}
                >
                {editingId ? "💾 Update Member" : "➕ Add Member"}
                </button>
            </div>
            </form>
        </div>

        {/* الكارت الثانية: عرض الجدول */}
        <div className="max-w-4xl w-full bg-white dark:bg-slate-900/40 border border-gray-300 dark:border-slate-800/80 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-200 dark:border-slate-800/60">
            <h3 className="text-lg font-bold text-gray-900 dark:text-slate-200">Registered Staff Records</h3>
            <p className="text-xs text-gray-500 dark:text-slate-400">Reviewing all fields. You can now modify details or drop records.</p>
            </div>

            <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
                <thead>
                <tr className="bg-gray-100 dark:bg-slate-950/60 text-gray-600 dark:text-slate-400 border-b border-gray-200 dark:border-slate-800">
                    <th className="p-4 pl-6 font-semibold">Nurse Info</th>
                    <th className="p-4 font-semibold">Age</th>
                    <th className="p-4 font-semibold">Contact Info</th>
                    <th className="p-4 font-semibold">Description</th>
                    <th className="p-4 pr-6 text-center font-semibold">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-slate-800/40">
                {nurses.map((nurse) => (
                    <tr key={nurse.id} className="hover:bg-gray-50/50 dark:hover:bg-slate-900/30 transition items-start">
                    <td className="p-4 pl-6 flex items-center gap-3 min-w-45">
                        {nurse.image ? (
                        <img 
                            src={nurse.image} 
                            alt={nurse.name} 
                            className="w-10 h-10 rounded-full object-cover border border-gray-300 dark:border-slate-700 shadow-sm shrink-0"
                        />
                        ) : (
                        <div className="w-10 h-10 bg-linear-to-tr from-teal-500 to-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white dark:text-slate-950 shadow-md shrink-0">
                            {nurse.name[0]}
                        </div>
                        )}
                        <div>
                        <span className="font-bold text-gray-900 dark:text-slate-200 block">{nurse.name}</span>
                        <span className="text-[10px] text-teal-600 dark:text-teal-400 font-medium">Clinic Staff</span>
                        </div>
                    </td>
                    <td className="p-4 text-gray-600 dark:text-slate-300 font-medium">{nurse.age} yrs</td>
                    <td className="p-4 min-w-40">
                        <div className="text-xs text-gray-600 dark:text-slate-300 font-mono">{nurse.email}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{nurse.phone}</div>
                    </td>
                    <td className="p-4 text-gray-500 dark:text-slate-400 text-xs max-w-xs leading-relaxed">
                        {nurse.description}
                    </td>
                    <td className="p-4 pr-6 text-center">
                        <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={() => handleEditClick(nurse)}
                            className="p-2 bg-gray-100 dark:bg-slate-800 text-teal-500 hover:text-teal-400 rounded-lg text-xs transition border border-gray-200 dark:border-slate-700"
                            title="Edit Nurse"
                        >
                            ✏️
                        </button>
                        <button
                            onClick={() => setDeleteId(nurse.id)}
                            className="p-2 bg-gray-100 dark:bg-slate-800 text-rose-500 hover:text-rose-400 rounded-lg text-xs transition border border-gray-200 dark:border-slate-700"
                            title="Delete Nurse"
                        >
                            🗑️
                        </button>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        </div>

        {/* زر تسجيل الخروج المستقل في الأسفل تماماً */}
        <div className="max-w-4xl w-full flex justify-end px-2">
            <button
            type="button"
            onClick={handleLogout}
            className="bg-transparent hover:bg-rose-600 text-rose-600 hover:text-white border border-rose-500/40 font-bold text-xs py-2 px-5 rounded-xl transition shadow-xs"
            >
            Logout
            </button>
        </div>

        {/* الـ Modal المخصص لتأكيد الحذف */}
        {deleteId && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
                <div className="flex items-center gap-3 text-rose-500">
                <span className="text-2xl">⚠️</span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-slate-200">Confirm Deletion</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                Are you sure you want to delete this nurse from the clinic staff registry? This action cannot be undone.
                </p>
                <div className="flex justify-end gap-3 pt-2 text-sm font-semibold">
                <button
                    type="button"
                    onClick={() => setDeleteId(null)}
                    className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    onClick={handleConfirmDelete}
                    className="px-4 py-2 rounded-xl bg-rose-600 text-white hover:bg-rose-500 shadow-lg shadow-rose-600/10 transition"
                >
                    Yes, Delete
                </button>
                </div>
            </div>
            </div>
        )}

        </div>
    );
    }