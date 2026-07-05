// context/DoctorContext.jsx
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const DoctorContext = createContext();

// 💡 تأكد من وجود كلمة export هنا الفوق
export function DoctorProvider({ children }) {
    const [profile, setProfile] = useState(null);
    const [tempProfile, setTempProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProfileInfo = async () => {
        try {
            const response = await fetch(`/api/patients/doctorOrPatient`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${Cookies.get("token")}`, // Assuming you are using cookies for authentication
                    "role": Cookies.get("role"), // Assuming you are storing the role in cookies
                },
            });
            if (!response.ok) {
                
                throw new Error("Failed to fetch")
            };
            const data = await response.json();
            setProfile(data);
            setTempProfile(data);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
        };
        getProfileInfo();
    }, []);

    return (
        <DoctorContext.Provider value={{ profile, setProfile, tempProfile, setTempProfile, loading }}>
        {children}
        </DoctorContext.Provider>
    );
}

// 💡 وتأكد من وجود كلمة export هنا أيضاً
export const useDoctor = () => useContext(DoctorContext);