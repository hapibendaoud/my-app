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
    prop: "row-span-2"
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
    prop: "row-span-2"
  },
  {
    name: "Clinical Consultations & Therapy",
    description: "This department features state-of-the-art operating theatres equipped with advanced surgical lighting and premium sterilization systems. Our highly synchronized surgical teams perform complex and minor procedures with ultimate precision in a 100% sterile and safe environment.",
    image: "/photo-4.jpg",
    prop: "row-span-2"
  }
];

function ClinicDepartments({department}) {
  return (
    <>
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
                className='flex flex-col overflow-hidden  bg-gray-200 border border-gray-300 dark:border-slate-50/10 dark:bg-slate-800'
              >
                <MorphingDialogImage
                  src={department.image}
                  alt={department.name}
                  className='h-fit w-full object-cover'
                />
                <div className='flex grow flex-row items-end justify-between px-3 py-2'>
                  <div>
                    <MorphingDialogTitle className='text-gray-600 dark:text-zinc-50'>
                      {department.name}
                    </MorphingDialogTitle>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent
                  style={{
                    borderRadius: '24px',
                  }}
                  className='pointer-events-auto relative flex h-150 w-120 flex-col overflow-y-auto [scrollbar-width: none] [-ms-overflow-style: none] [&::-webkit-scrollbar]:hidden border border-slate-950/10 bg-white dark:border-slate-50/10 dark:bg-slate-900 '
                >
                  <MorphingDialogImage
                    src={department.image}
                    alt={department.name}
                    className='h-auto w-auto'
                  />
                  <div className='p-6'>
                    <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
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
                      <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                        {department.description}
                      </p>
                    </MorphingDialogDescription>
                  </div>
                  <MorphingDialogClose className='text-zinc-50' />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
        </div>
    </>
  );
}

// 1. مصفوفة بيانات أعضاء الفريق لسهولة التعديل والإضافة لاحقاً
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
      <div className="w-full h-fit flex flex-col  gap-10 py-10 px-15 dark:bg-slate-950">
        <h2 className="text-blue-600 font-bold text-5xl">About Our <span className="text-green-600 font-bold">Clinic</span></h2>
        <div className="w-full h-fit flex itmes-center justify-center">
          <Image src="/ClinicFace.png" alt="About Us" width={480} height={450} className="w-8/9 h-130 " priority/>
        </div>
        <div className="flex flex-col px-17 ">
          <h2 className="autoShow text-3xl border-t border-gray-300 py-4"><span className="text-blue-600 font-bold">Med</span><span className="text-green-600 font-bold">Care</span></h2>
          <p className="autoShow flex flex-col text-1xl pt-4 border-t border-gray-300">
            <span className="w-full h-fit text-gray-500 dark:text-white indent-8">
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
        <div className="flex flex-col px-17 ">
          <h2 className="autoShow text-3xl border-t border-slate-300 py-4 text-blue-600 font-bold"><span className=" ">Med</span><span className="text-green-600 ">Care</span> Story</h2>
          <p className="autoShow flex flex-col text-1xl pt-4 border-t border-slate-300">
            <span className="w-full h-fit text-gray-500 dark:text-white indent-8">
              Established in 2018, 
              <span className="text-blue-600 font-bold"> Med</span><span className="text-green-600 font-bold">Care </span> 
              Clinic opened its doors in the vibrant heart of Agadir, specifically in the historic neighborhood of Talborjt. 
              Our vision was born from a genuine desire to bring high-quality healthcare closer to the local community 
              while integrating the latest digital technologies to streamline the patient’s medical journey.

              Why Talborjt? Because we believe that healthcare should be at the very core of the community—accessible, inclusive, 
              and reliable. Since our inauguration on [Insert Street Name], we have successfully built a bridge of trust with our 
              patients. Our commitment lies in balancing medical excellence with the highest standards of digital data privacy, which 
              remains a top priority on our platform.

              Today, MedCare is more than just a clinic in a historic district; it is a model of the 'Smart Clinic'—where 
              medical expertise 
              meets seamless digital innovation.
            </span>
          </p>
        </div>
        
      </div>
      <h2 className="autoShow border-t border-b border-slate-300 py-4 text-blue-600 font-bold text-5xl px-15"><span className=" ">Clinic</span><span className="text-green-600 "> Departments</span></h2>
      <div className="w-full h-fit grid grid-cols-2 gap-10 py-10 px-15">
        <ClinicDepartments department={departments[0]} />
        <ClinicDepartments department={departments[1]} />
        <ClinicDepartments department={departments[2]} />
        <ClinicDepartments department={departments[3]} />
        <div className="row-span-2">
          <h2 className="autoShow border-t border-b border-slate-300 py-4 text-blue-600 font-bold text-4xl px-15"><span className=" ">To Explore </span><span className="text-green-600 "> More</span> Information</h2>
          <p className="w-full h-fit text-gray-500  indent-8">Click on the Picture</p>
        </div> 
      </div>

      <div className="px-15">
        <h1 className="text-6xl text-gray-700 font-bold pb-7"><span className="text-blue-600">Our</span><span className="text-green-600"> Teame</span></h1>
      </div>

        <ScrollingTestimonials data={teamData} />

        
    </>
  );
}
