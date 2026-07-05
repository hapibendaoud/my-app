"use client";
import Image from "next/image";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/motion-primitives/morphing-dialog';
import Marquee from "@/components/animata/container/marquee";
import ScrollingTestimonials from "@/components/animata/container/scrolling-testimonials";

const departments = [
  {
    name: "General & Advanced Surgery",
    description: "This department features state-of-the-art operating theatres equipped with advanced surgical lighting and premium sterilization systems. Our highly synchronized surgical teams perform complex and minor procedures with ultimate precision in a 100% sterile and safe environment.",
    image: "/photo-1.jpg",
    prop: "md:row-span-2"
  },
  {
    name: "Plastic & Reconstructive Surgery",
    description: "We offer advanced surgical solutions in aesthetics and reconstruction, utilizing globally certified, premium medical materials (such as safe silicone implants). Our specialized surgeons combine medical excellence with artistic precision to ensure natural-looking results.",
    image: "/photo-2.jpg",
    prop: ""
  },
  {
    name: "Obstetrics & Neonatal Care",
    description: "Your first moments with your newborn are surrounded by the highest level of care. This department provides a warm, fully equipped environment to welcome newborns, with immediate pediatric monitoring and specialized nursing care from the very first seconds of birth.",
    image: "/photo-3.jpg",
    prop: "md:row-span-2"
  },
  {
    name: "Clinical Consultations & Therapy",
    description: "This department features state-of-the-art operating theatres equipped with advanced surgical lighting and premium sterilization systems. Our highly synchronized surgical teams perform complex and minor procedures with ultimate precision in a 100% sterile and safe environment.",
    image: "/photo-4.jpg",
    prop: "md:row-span-2"
  }
];

function ClinicDepartments({department}) {
  return (
    <div className={department.prop}>
        <MorphingDialog
          transition={{
            type: 'spring',
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: '12px',
            }}
            className='flex flex-col overflow-hidden bg-gray-200 border border-gray-300 dark:border-slate-50/10 dark:bg-slate-800 w-full'
          >
            <MorphingDialogImage
              src={department.image}
              alt={department.name}
              className='h-48 sm:h-64 w-full object-cover'
            />
            <div className='flex grow flex-row items-end justify-between px-3 py-3'>
              <MorphingDialogTitle className='text-gray-700 dark:text-zinc-50 font-bold text-sm sm:text-base'>
                {department.name}
              </MorphingDialogTitle>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent
              style={{
                borderRadius: '24px',
              }}
              className='pointer-events-auto relative flex h-full max-h-[80vh] w-[90vw] max-w-md flex-col overflow-y-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border border-slate-950/10 bg-white dark:border-slate-50/10 dark:bg-slate-900 shadow-2xl'
            >
              <MorphingDialogImage
                src={department.image}
                alt={department.name}
                className='h-48 sm:h-64 w-full object-cover'
              />
              <div className='p-5 sm:p-6'>
                <MorphingDialogTitle className='text-xl sm:text-2xl font-bold text-zinc-950 dark:text-zinc-50'>
                  {department.name}
                </MorphingDialogTitle>
                <MorphingDialogDescription
                  disableLayoutAnimation
                  variants={{
                    initial: { opacity: 0, scale: 0.8, y: 100 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.8, y: 100 },
                  }}
                >
                  <p className='mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                    {department.description}
                  </p>
                </MorphingDialogDescription>
              </div>
              <MorphingDialogClose className='text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 absolute top-4 right-4 bg-white/80 dark:bg-slate-800/80 p-2 rounded-full backdrop-blur-xs' />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </MorphingDialog>
    </div>
  );
}

const teamData = [
  {
    name: "Amine",
    age: 27,
    image: "/nurs-1.jpg",
    description: "An ER nurse at MedCare developed the 'UrgeCheck' app to log patients' vitals via voice commands, saving time and lives."
  },
  {
    name: "Youssef",
    age: 31,
    image: "/nurs-2.jpg",
    description: "Specialized in emergency triage and digital health coordination, ensuring flawless workflows during peak hours."
  },
  {
    name: "Sara",
    age: 27,
    image: "/nurs-3.jpg",
    description: "Expert ICU assistant focusing on patient monitoring systems and post-surgical immediate care."
  },
  {
    name: "Mohamed",
    age: 29,
    image: "/nurs-4.jpg",
    description: "Pediatric care specialist certified in compassionate family handling and clinical checkups."
  }
];

export default function About() {
  return (
    <>
      <div className="w-full h-fit flex flex-col gap-6 sm:gap-10 py-10 px-4 sm:px-8 md:px-16 dark:bg-slate-950">
        <h2 className="text-blue-600 font-bold text-3xl sm:text-4xl md:text-5xl text-center md:text-left">
          About Our <span className="text-green-600">Clinic</span>
        </h2>
        
        <div className="w-full h-fit flex items-center justify-center">
          <Image 
            src="/ClinicFace.png" 
            alt="About Us" 
            width={900} 
            height={500} 
            className="w-full max-w-4xl h-auto rounded-2xl shadow-md" 
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        <div className="flex flex-col md:px-6">
          <h2 className="autoShow text-2xl sm:text-3xl border-t border-gray-300 dark:border-slate-800 py-4">
            <span className="text-blue-600 font-bold">Med</span><span className="text-green-600 font-bold">Care</span>
          </h2>
          <p className="autoShow flex flex-col text-sm sm:text-base pt-4 border-t border-gray-300 dark:border-slate-800 leading-relaxed">
            <span className="w-full h-fit text-gray-600 dark:text-slate-300 indent-4 sm:indent-8">
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

        <div className="flex flex-col md:px-6">
          <h2 className="autoShow text-2xl sm:text-3xl border-t border-slate-300 dark:border-slate-800 py-4 text-blue-600 font-bold">
            <span>Med</span><span className="text-green-600">Care</span> Story
          </h2>
          <p className="autoShow flex flex-col text-sm sm:text-base pt-4 border-t border-slate-300 dark:border-slate-800 leading-relaxed">
            <span className="w-full h-fit text-gray-600 dark:text-slate-300 indent-4 sm:indent-8">
              Established in 2018, 
              <span className="text-blue-600 font-bold"> Med</span><span className="text-green-600 font-bold">Care </span> 
              Clinic opened its doors in the vibrant heart of Agadir, specifically in the historic neighborhood of Talborjt. 
              Our vision was born from a genuine desire to bring high-quality healthcare closer to the local community 
              while integrating the latest digital technologies to streamline the patient’s medical journey.
              <br/><br/>
              Why Talborjt? Because we believe that healthcare should be at the very core of the community—accessible, inclusive, 
              and reliable. Since our inauguration, we have successfully built a bridge of trust with our 
              patients. Our commitment lies in balancing medical excellence with the highest standards of digital data privacy, which 
              remains a top priority on our platform.
              <br/><br/>
              Today, MedCare is more than just a clinic in a historic district; it is a model of the 'Smart Clinic'—where 
              medical expertise meets seamless digital innovation.
            </span>
          </p>
        </div>
      </div>

      <h2 className="autoShow border-t border-b border-slate-300 dark:border-slate-800 py-4 text-blue-600 font-bold text-3xl sm:text-4xl md:text-5xl px-4 sm:px-8 md:px-16">
        <span>Clinic</span><span className="text-green-600"> Departments</span>
      </h2>

      {/* تحويل الـ Grid ليتناسب مع حجم الشاشات بالكامل */}
      <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 py-8 px-4 sm:px-8 md:px-16">
        <ClinicDepartments department={departments[0]} />
        <ClinicDepartments department={departments[1]} />
        <ClinicDepartments department={departments[2]} />
        <ClinicDepartments department={departments[3]} />
        
        <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-center border border-dashed border-gray-300 dark:border-slate-800 rounded-2xl p-6 text-center bg-gray-50/50 dark:bg-slate-900/20">
          <h2 className="autoShow text-xl sm:text-2xl text-blue-600 font-bold mb-2">
            <span>To Explore </span><span className="text-green-600">More</span> Information
          </h2>
          <p className="w-full h-fit text-gray-500 dark:text-slate-400 text-sm">Click on any department card</p>
        </div> 
      </div>

      <div className="px-4 sm:px-8 md:px-16 mt-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 dark:text-slate-200 font-bold pb-6">
          <span className="text-blue-600">Our</span><span className="text-green-600"> Team</span>
        </h1>
      </div>

      <div className="w-full overflow-hidden pb-10">
        <ScrollingTestimonials data={teamData} />
      </div>
    </>
  );
}