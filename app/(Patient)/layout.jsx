import { Geist, Geist_Mono } from "next/font/google";
import Adnavbar from "@/components/Patientnavbar/navbar";
import Footer from "@/components/footer/footer"
import "@/app/globals.css";
import { DoctorProvider } from "@/context/DoctorContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MedCare",
  description: "Care You Can Trust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-slate-950`}
      >
        <DoctorProvider>
          <Adnavbar/>
          {children}
          <Footer/>
        </DoctorProvider>
      </body>
    </html>
  );
}
