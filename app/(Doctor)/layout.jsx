import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/doctorNavBar/navbar";
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
  const doctorId = "6a46952acc0321a5ef61ea7e";




  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-slate-950`}
      >
        <DoctorProvider>
          <Navbar />
          {children}
          <Footer/>
        </DoctorProvider>
      </body>
    </html>
  );
}
