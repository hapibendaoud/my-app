import Link from "next/link";
import Image from "next/image";
import {AnimatedBackground} from "@/"



export default function Home() {
  return (
    <>
          {/* The main Title and Information */}
      <div className="w-full h-144 bg-login grid grid-cols-2">

        <div className="w-full h-full flex flex-col items-center pt-40">
          <div className="">
            <h1 className="text-6xl text-gray-700 font-bold pb-7">Welcome to <span className="text-blue-600">Med</span><span className="text-green-600">Care</span></h1>
            <p className="text-4xl text-gray-700 pb-10">Your Health, Our Priority</p>
            <Link href={"/BookAppointment"} className="cursor-pointer text-2xl text-white bg-green-600 border-green-600 border px-11 py-2 rounded-md hover:bg-green-700">
                Get Started
            </Link>
          </div>
        </div>

        <div className="relative z-10">
          <Image src="/DoctorPhoto.png" alt="Doctor" width={480} height={450} className="absolute bottom-0 right-4 drop-shadow-[-10px_0_20px_rgba(0,0,0,0.45)] z-0"></Image>
        </div>
      </div>
        {/* *****************  End  ******************** */}


             {/* The second suction and links */}
      <div className="relative w-full h-18 border-b border-gray-400 ">
        <div className="w-full h-15 grid grid-cols-3 gap-30 px-25 absolute bottom-8">
          <Link href="/Opening" className="autoShow flex flex-row items-center justify-center bg-white rounded-xl border border-gray-400 cursor-pointer">
            <Image src="/Opening.png" alt="Icone" width={20} height={20} className=""></Image>
            <span className="pl-4 text-2xl text-gray-700">Opening Hours</span>
          </Link>

          <Link href="/Services" className="autoShow flex flex-row items-center justify-center bg-white rounded-xl border border-gray-400 cursor-pointer">
            <Image src="/Services.png" alt="Icone" width={20} height={20} className=""></Image>
            <span className="pl-4 text-2xl text-gray-700">Our Services</span>
          </Link>

          <Link href="/Location" className="autoShow flex flex-row items-center justify-center bg-white rounded-xl border border-gray-400 z-10 cursor-pointer">
            <Image src="/about.png" alt="Icone" width={20} height={20} className=""></Image>
            <span className="pl-4 text-2xl text-gray-700">Visit Our Location</span>
          </Link>
        </div>
      </div>
      {/* *****************   end   ******************* */}

          {/* Clinique Power */}
      <div className="flex flex-col w-full h-fitt pb-20 px-18 border-b border-gray-400">
        <h1 className="autoShow w-full h-50 flex justify-center items-center text-4xl text-gray-700 underline decoration-gray-400">A Better Care Experience</h1>
        
        <div className="w-full h-fit grid grid-cols-3 gap-15">
          <AnimatedBackground
        className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
          <div className="h-65 border-t border-b border-gray-400 px-2.5 py-10">
            <h2 className="autoShow pb-5 text-xl text-gray-700">Why Choose Us</h2>
            <p className="autoShow text-gray-500">Trusted healthcare delivered by experienced professionals, 
              combining medical expertise with personalized and modern care.
            </p>
          </div>
          <div className=" h-65 border-t border-b border-gray-400 px-2.5 py-10">
            <h2 className="autoShow pb-5 text-xl text-gray-700">Secure Care</h2>
            <p className="autoShow text-gray-500">Your medical data is handled with the highest level of confidentiality 
              and protected through secure systems that comply with strict privacy standards, ensuring your personal 
              and health information remains safe at all times.
            </p>
          </div>
          <div className="h-65   border-t border-b border-gray-400 px-2.5 py-10 ">
            <h2 className="autoShow pb-5 text-xl text-gray-700">Follow-Up</h2>
            <p className="autoShow text-gray-500">We ensure continuous follow-up after your visit,
                providing clear medical guidance, personalized recommendations, 
                and ongoing support to help you manage your health with confidence.
            </p>
          </div>
          </AnimatedBackground>
        </div>
      </div>
      {/* ***************  End ***************** */}

      {/* ********** Doctor information  ******************/}
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col pt-20 pl-17 ">
          <h2 className="autoShow text-3xl py-18 border-t border-gray-300 text-gray-700">Dr. Amin El Hashimi – Chief Surgeon</h2>
          <p className="autoShow flex flex-col text-1xl">
            <span className="w-full h-fit pb-5 text-gray-500 border-t border-gray-300 pt-15 indent-8 tracking-wide">
              Dr. Amin El Hashimi is a multidisciplinary surgeon with extensive and distinguished 
              experience in the surgical field. He graduated from medical school and further advanced his career through 
              specialized training programs in multiple surgical disciplines, equipping him to manage a wide range of complex 
              medical cases with the highest level of skill and precision.
            </span>
            <span className="text-gray-500 pt-2 indent-8 tracking-wide">
              Dr. Amin is committed to accurate diagnosis and continuous follow-up, placing patient health and safety at 
              the core of his practice. He also utilizes the latest surgical techniques and methods to ensure optimal treatment 
              outcomes, while adhering to the highest professional and ethical standards.
            </span>
          </p>
        </div>
        <div className="autoShow flex w-full h-200 p-18">
          <Image className="w-full rounded-4xl" src="/DoctorRespo.jpg" alt="Doctor" width={400} height={400}></Image>
        </div>
      </div>
      {/* ***************  End ************** */}

      
      {/* ********** clinic information  ******************/}
      <div className="grid grid-cols-2 gap-2 border-t border-b border-gray-300">
        <div className="autoShow flex w-full h-fit py-18 pl-15">
          <Image className="w-full rounded-4xl" src="/ClinicFace.png" alt="Clinic" width={400} height={400}></Image>
        </div>
        <div className="flex flex-col pt-20 px-17 ">
          <h2 className="autoShow text-3xl border-t border-gray-300 py-4"><span className="text-blue-600 font-bold">Med</span><span className="text-green-600 font-bold">Care</span></h2>
          <p className="autoShow flex flex-col text-1xl pt-4 border-t border-gray-300">
            <span className="w-full h-fit text-gray-500  indent-8">
              <span className="text-blue-600 font-bold">Med</span><span className="text-green-600 font-bold">Care </span> 
              is a multi-specialty medical clinic designed in accordance with modern healthcare standards 
              and equipped with advanced medical technology to ensure accurate diagnosis and effective treatment 
              in a safe and comfortable environment, supervised by a highly qualified and experienced physician who 
              follows an evidence-based, patient-centered approach emphasizing ethical practice and precise medical 
              follow-up, and supported by a dedicated nursing team of four certified professionals (two male and two 
              female nurses) known for their competence, professionalism, and compassionate care, allowing the clinic 
              to deliver integrated, high-quality healthcare services while maintaining strict standards of hygiene, 
              safety, and clinical excellence for individuals and families.
            </span>
          </p>
        </div>
        
      </div>
      {/* ***************  End ************** */}


      <div className="w-full h-100 flex flex-col">
        <div className="w-full h-fit py-10 px-17 flex flex-wrap items-center justify-between text-5xl text-gray-700 font-bold ">
          <h2 className="text-blue-600 font-bold">What Our <span className="text-green-600 font-bold">Patients</span> Says</h2>
          <Image src="/comment.png" alt="Icone" width={40} height={40} className=""></Image>
        </div>
        
        <div className="w-full h-fit grid grid-cols-3 gap-7">
          <div className="">
            <Image src="/Patient.jpeg" alt="Patient" width={50} height={50}></Image>
            <div>
              <p>Said Bendaoud</p>
              <span>Agadir</span>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full h-200 bg-amber-200">

      </footer>
    </>
  );
}
