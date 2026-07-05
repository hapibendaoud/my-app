import Link from "next/link";
import Image from "next/image";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";

export default function Home() {
    const ITEMS = [
        {
          id: 1,
          title: 'Why Choose Us',
          description: 'Trusted healthcare delivered by experienced professionals, combining medical expertise with personalized and modern care.',
        },
        {
          id: 2,
          title: 'Secure Care',
          description: 'Your medical data is handled with the highest level of confidentiality and protected through secure systems that comply with strict privacy standards, ensuring your personal and health information remains safe at all times.',
        },
        {
          id: 3,
          title: 'Follow-Up',
          description: 'We ensure continuous follow-up after your visit, providing clear medical guidance, personalized recommendations, and ongoing support to help you manage your health with confidence.',
        },
    ]

    const Patients = [
      {
        id: 1,
        name: "Said Bendaoud",
        city: "Agadir",
        comment:"I had a great experience at MedCare Clinic. The staff was very professional, friendly, and attentive. Highly recommended!",
        rate:"⭐⭐⭐⭐⭐"
      },
      {
        id: 2,
        name: "Hicham Bimosa",
        city: "Casa",
        comment:"MedCare Clinic offers excellent service with a clean environment and well-organized appointments. Thank you for the outstanding care.",
        rate:"⭐⭐⭐⭐⭐"
      },
      {
        id: 3,
        name: "Mohmmad Elyakoubi",
        city: "Rabat",
        comment:"I truly appreciate the professionalism and kindness of the medical team at MedCare. They made me feel comfortable and well taken care of.",
        rate:"⭐⭐⭐⭐⭐"
      },
      {
        id: 4,
        name: "Soufian Benzidan",
        city: "Taroudant",
        comment:"Very satisfied with the service at MedCare Clinic. The doctors are skilled, and the reception team is welcoming and helpful.",
        rate:"⭐⭐⭐⭐⭐"
      },
      {
        id: 5,
        name: "Soufian Benzidan",
        city: "Taroudant",
        comment:"Very satisfied with the service at MedCare Clinic. The doctors are skilled, and the reception team is welcoming and helpful.",
        rate:"⭐⭐⭐⭐⭐"
      },
    ]
  return (
    <>
      {/* The main Title and Information */}
      <div className="w-full min-h-screen md:h-144 bg-home grid grid-cols-1 md:grid-cols-2 px-4 sm:px-10 md:px-0 pt-24 md:pt-0 gap-8 overflow-hidden">
        <div className="w-full h-full flex flex-col items-center md:items-start text-center md:text-left justify-center md:pt-40 md:pl-20">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-gray-700 font-bold pb-5 md:pb-7">Welcome to <span className="text-blue-600">Med</span><span className="text-green-600">Care</span></h1>
            <p className="text-2xl sm:text-3xl md:text-4xl text-gray-700 pb-8 md:pb-10">Your Health, Our Priority</p>
            <Link href={"/login"} className="cursor-pointer text-xl md:text-2xl text-white bg-green-600 border-green-600 border px-8 md:px-11 py-2 md:py-2 rounded-md hover:bg-green-700 transition">
                Get Started
            </Link>
          </div>
        </div>

        <div className="relative w-full h-64 sm:h-80 md:h-full flex items-end justify-center md:justify-end z-10">
          <Image  
            src="/DoctorPhoto.png" 
            alt="Doctor" 
            width={480} 
            height={450}  
            className="w-auto h-full sm:max-h-85  md:max-h-full object-contain md:absolute md:bottom-0 md:right-4 drop-shadow-[-10px_0_20px_rgba(0,0,0,0.45)] z-0"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>


      {/* The second section and links */}
      <div className="relative w-full py-8 md:py-0 md:h-18 border-b border-gray-400 px-4 sm:px-8 md:px-0 bg-white dark:bg-slate-900 md:bg-transparent">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-30 md:px-25 md:absolute md:bottom-8 md:left-0">
          <Link href="#" className="autoShow flex flex-row items-center justify-center py-4 md:py-0 md:h-15 bg-white dark:bg-slate-800 rounded-xl border border-gray-400 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900 hover:border-blue-800 transition">
            <Image src="/Opening.png" alt="Icone" width={20} height={20} style={{ width: 'auto', height: 'auto' }} />
            <span className="pl-4 text-xl md:text-2xl text-gray-700 dark:text-white">Opening Hours</span>
          </Link>

          <Link href="/services" className="autoShow flex flex-row items-center justify-center py-4 md:py-0 md:h-15 bg-white dark:bg-slate-800 rounded-xl border border-gray-400 cursor-pointer hover:bg-green-200 dark:hover:bg-green-900 hover:border-green-800 transition">
            <Image src="/Services.png" alt="Icone" width={20} height={20} style={{ width: 'auto', height: 'auto' }} />
            <span className="pl-4 text-xl md:text-2xl text-gray-700 dark:text-white">Our Services</span>
          </Link>

          <Link href="#" className="autoShow flex flex-row items-center justify-center py-4 md:py-0 md:h-15 bg-white dark:bg-slate-800 rounded-xl border border-gray-400 z-10 cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900 hover:border-blue-800 transition sm:col-span-2 md:col-span-1">
            <Image src="/about.png" alt="Icone" width={20} height={20} style={{ width: 'auto', height: 'auto' }} />
            <span className="pl-4 text-xl md:text-2xl text-gray-700 dark:text-white">Visit Our Location</span>
          </Link>
        </div>
      </div>


      {/* Clinique Power */}
      <div className="flex flex-col w-full h-fitt pb-20 px-18 border-b border-slate-400">
        <h1 className="autoShow w-full h-50 flex justify-center items-center text-5xl font-bold text-gray-700 dark:text-blue-600 underline decoration-slate-400">A Better Care <span className="text-green-600">Experience</span></h1>
        <div className="w-full h-fit grid  md:grid-cols-3 gap-15 ">
          <AnimatedBackground
            className='rounded-lg bg-gray-200 dark:bg-slate-800'
            transition={{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }}
            enableHover
          >
        {ITEMS.map((item, index) => (
          <div key={index} data-id={`card-${index}`} className="h-65 border-t border-b border-slate-400 px-2.5 py-10">
            <h2 className="autoShow pb-5 text-xl text-gray-700 dark:text-white">{item.title}</h2>
            <p className="autoShow text-gray-500 dark:text-zinc-400">{item.description}
            </p>
          </div>
          ))}
          </AnimatedBackground>
        </div>
      </div>


      {/* Doctor information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 sm:px-8 md:px-16 items-center">
        <div className="flex flex-col md:pt-20 md:pl-17 order-2 md:order-1">
          <h2 className="autoShow text-3xl sm:text-4xl md:text-5xl border-t border-gray-300 py-4 leading-tight">
            <span className="text-blue-600 font-bold">Dr. Amin El Hashimi –</span>
            <span className="text-green-600 font-bold"> Chief Surgeon</span>
          </h2>
          <div className="autoShow flex flex-col text-lg sm:text-xl md:text-2xl space-y-4">
            <span className="w-full text-gray-500 dark:text-zinc-400 border-t border-gray-300 pt-6 md:pt-15 indent-4 sm:indent-8 tracking-wide leading-relaxed">
              <b>Dr. Amin El Hashimi</b> is an experienced, multi-specialty surgeon. Thanks to advanced training across multiple 
              surgical disciplines, he is highly skilled in managing a wide range of complex medical cases with top-tier 
              precision.
            </span>
            <span className="text-gray-500 dark:text-zinc-400 pt-2 indent-4 sm:indent-8 tracking-wide leading-relaxed">
              <b>Dr. Amin</b> prioritizes patient safety and health through accurate diagnosis and continuous follow-up. By combining 
              ethical standards with the latest surgical techniques, he consistently ensures optimal treatment outcomes.
            </span>
          </div>
        </div>
        <div className="autoShow w-full h-64 sm:h-80 md:h-200 p-0 md:p-18 order-1 md:order-2">
          <Image className="w-full h-full rounded-3xl md:rounded-4xl object-cover shadow-md" src="/photo-4.jpg" alt="Doctor" width={400} height={400} />
        </div>
      </div>


      {/* clinic information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 sm:px-8 md:px-16 border-t border-b border-gray-300 items-center">
        <div className="autoShow w-full h-64 sm:h-80 md:h-fit p-0 md:py-18 md:pl-15">
          <Image className="w-full h-full rounded-3xl md:rounded-4xl object-cover shadow-md" src="/ClinicFace.png" alt="Clinic" width={400} height={400} />
        </div>
        <div className="flex flex-col md:pt-20 md:px-17">
          <h2 className="autoShow text-3xl sm:text-4xl md:text-5xl border-t border-gray-300 py-4">
            <span className="text-blue-600 font-bold">Med</span><span className="text-green-600 font-bold">Care</span>
          </h2>
          <p className="autoShow flex flex-col text-lg sm:text-xl md:text-2xl pt-4 border-t border-gray-300 leading-relaxed">
            <span className="w-full text-gray-500 dark:text-zinc-400 indent-4 sm:indent-8">
              <span className="text-blue-600 font-bold">Med</span><span className="text-green-600 font-bold">Care </span>  
              is a multi-specialty medical clinic that combines modern equipment with medical expertise to deliver integrated, 
              safe, and high-quality healthcare. The clinic operates under the supervision of a highly qualified physician 
              utilizing a precise, evidence-based approach, and is supported by a dedicated nursing team of four certified 
              professionals. Together, they ensure the best medical services for individuals and families in a comfortable 
              and strictly hygienic environment.
            </span>
          </p>
        </div>
      </div>


      {/* Patients Feedbacks Section */}
      <div className="w-full py-12 flex flex-col bg-white dark:bg-slate-950">
        <div className="w-full py-6 px-4 sm:px-8 md:px-17 flex items-center justify-between border-b border-gray-100 dark:border-slate-900 mb-8">
          <h2 className="autoShow text-2xl sm:text-3xl md:text-5xl text-blue-600 font-bold">
            What Our <span className="text-green-600 font-bold">Patients</span> Say
          </h2>
          <Image src="/comment.png" alt="Icone" width={40} height={40} className="autoShow" style={{ width: 'auto', height: 'auto' }} />
        </div>
        
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-8 md:px-17">
          {Patients.map((Patient, index) => (
            <div key={index} className="autoShow w-full flex flex-col justify-between p-5 rounded-xl bg-gray-300 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 transition duration-200 cursor-pointer shadow-xs border border-gray-400/10">
              <div className="flex items-center space-x-4 mb-4">
                <Image  
                  src="/Patient.jpeg"  
                  alt="Patient"  
                  width={50}  
                  height={50}  
                  className="rounded-full object-cover w-12 h-12"
                  style={{ width: 'auto', height: 'auto' }}
                />
                <div>
                    <p className="text-base font-bold text-gray-800 dark:text-white leading-tight">{Patient.name}</p>
                    <span className="text-xs text-gray-800 dark:text-zinc-400">from {Patient.city}</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 dark:text-zinc-400 italic mb-4 leading-relaxed">"{Patient.comment}"</p> 
                <span className="text-base tracking-wider block">{Patient.rate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Footer */}
      <footer className="border-t border-gray-300">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 md:px-17 py-10 items-center">
            <div className="text-center md:text-left space-y-4">
                <h1 className="autoShow text-3xl sm:text-4xl font-bold text-blue-600">
                  Be a Part of our <span className="text-green-600">Family</span>
                </h1>
                <Link href={"/login"} className="autoShow inline-block cursor-pointer text-lg text-white bg-green-600 border-green-600 border px-11 py-2 rounded-md hover:bg-green-700 transition">
                  Get Started
                </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10">
                <Link href={"https://www.facebook.com/said.ait.bendaoud.2025"} target="_blank" className="autoShow flex items-center gap-3 hover:opacity-85 transition">
                    <Image src="/facebook.png" alt="facebook" width={30} height={30} style={{ width: 'auto', height: 'auto' }} />
                    <p className="text-blue-700 font-bold text-lg">Faceb<span className="text-green-700">ook</span></p>
                </Link>
                <Link href={"https://www.instagram.com/hapi_bendaoud"} target="_blank" className="autoShow flex items-center gap-3 hover:opacity-85 transition">
                    <Image src="/instagram.png" alt="instagram" width={30} height={30} style={{ width: 'auto', height: 'auto' }} />
                    <p className="text-blue-700 font-bold text-lg">Instag<span className="text-green-700">ram</span></p>
                </Link>
                <Link href={"https://wa.me/212658259695"} target="_blank" className="autoShow flex items-center gap-3 hover:opacity-85 transition">
                    <Image src="/whatsapp.png" alt="whatsapp" width={30} height={30} style={{ width: 'auto', height: 'auto' }} />
                    <p className="text-blue-700 font-bold text-lg">Whats<span className="text-green-700">app</span></p>
                </Link>
            </div>
        </div>
      </footer>
    </>
  );
}