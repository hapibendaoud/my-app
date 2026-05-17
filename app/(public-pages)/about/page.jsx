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


export default function About() {
  return (
    <>
      <div className="w-full h-fit flex flex-col  gap-10 py-10 px-15">
        <h2 className="text-blue-600 font-bold text-5xl">About Our <span className="text-green-600 font-bold">Clinic</span></h2>
        <div className="w-full h-fit flex itmes-center justify-center">
          <Image src="/ClinicFace.png" alt="About Us" width={480} height={450} className="w-8/9 h-130 "/>
        </div>
        <div className="flex flex-col px-17 ">
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
        <div className="flex flex-col px-17 ">
          <h2 className="autoShow text-3xl border-t border-gray-300 py-4 text-blue-600 font-bold"><span className=" ">Med</span><span className="text-green-600 ">Care</span> Story</h2>
          <p className="autoShow flex flex-col text-1xl pt-4 border-t border-gray-300">
            <span className="w-full h-fit text-gray-500  indent-8">
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
      <h2 className="autoShow border-t border-b border-gray-300 py-4 text-blue-600 font-bold text-5xl px-15"><span className=" ">Clinic</span><span className="text-green-600 "> Departments</span></h2>
      <div className="w-full h-fit grid grid-cols-2 gap-10 py-10 px-15">
        <div className="row-span-2">
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
                className='flex flex-col overflow-hidden  bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
              >
                <MorphingDialogImage
                  src='/photo-1.jpg'
                  alt='photo 1'
                  className='h-fit w-full object-cover'
                />
                <div className='flex grow flex-row items-end justify-between px-3 py-2'>
                  <div>
                    <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                      General & Advanced Surgery Department
                    </MorphingDialogTitle>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent
                  style={{
                    borderRadius: '24px',
                  }}
                  className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                >
                  <MorphingDialogImage
                    src='/photo-1.jpg'
                    alt='photo 1'
                    className='h-115 w-auto'
                  />
                  <div className='p-6'>
                    <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                      General & Advanced Surgery Department
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
                        This department features state-of-the-art operating theatres equipped with advanced surgical lighting and premium 
                        sterilization systems. Our highly synchronized surgical teams perform complex and minor procedures with ultimate 
                        precision in a 100% sterile and safe environment.
                      </p>
                    </MorphingDialogDescription>
                  </div>
                  <MorphingDialogClose className='text-zinc-50' />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
        </div>

        <div>
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
                className='flex flex-col overflow-hidden   bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
              >
                <MorphingDialogImage
                  src='/photo-2.jpg'
                  alt='photo 2'
                  className='h-fit w-full object-cover'
                />
                <div className='flex grow flex-row items-end justify-between px-3 py-2'>
                  <div>
                    <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                      Plastic & Reconstructive Surgery Department
                    </MorphingDialogTitle>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent
                  style={{
                    borderRadius: '24px',
                  }}
                  className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                >
                  <MorphingDialogImage
                    src='/photo-2.jpg'
                    alt='photo 2'
                    className='h-auto w-fit'
                  />
                  <div className='p-6'>
                    <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                      Plastic & Reconstructive Surgery Department
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
                        We offer advanced surgical solutions in aesthetics and reconstruction, utilizing globally certified, premium medical 
                        materials (such as safe silicone implants). Our specialized surgeons combine medical excellence with artistic precision 
                        to ensure natural-looking results.
                      </p>
                    </MorphingDialogDescription>
                  </div>
                  <MorphingDialogClose className='text-zinc-50' />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
        </div>
        <div className="row-span-2">
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
                className='flex flex-col overflow-hidden   bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
              >
                <MorphingDialogImage
                  src='/photo-3.jpg'
                  alt='photo 3'
                  className='h-fit w-full object-cover'
                />
                <div className='flex grow flex-row items-end justify-between px-3 py-2'>
                  <div>
                    <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                      Obstetrics & Neonatal Care Department
                    </MorphingDialogTitle>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent
                  style={{
                    borderRadius: '24px',
                  }}
                  className='pointer-events-auto relative flex h-fit w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                >
                  <MorphingDialogImage
                    src='/photo-3.jpg'
                    alt='photo 3'
                    className='h-117 w-auto'
                  />
                  <div className='p-6'>
                    <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                      Obstetrics & Neonatal Care Department
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
                        Your first moments with your newborn are surrounded by the highest level of care. This department provides a warm, fully 
                        equipped environment to welcome newborns, with immediate pediatric monitoring and specialized nursing care from the very 
                        first seconds of birth.
                      </p>
                    </MorphingDialogDescription>
                  </div>
                  <MorphingDialogClose className='text-zinc-50' />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
        </div>
        <div className="row-span-2">
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
                className='flex flex-col overflow-hidden  bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
              >
                <MorphingDialogImage
                  src='/photo-4.jpg'
                  alt='photo 4'
                  className='h-fit w-full object-cover'
                />
                <div className='flex grow flex-row items-end justify-between px-3 py-2'>
                  <div>
                    <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                      Clinical Consultations & Therapy Department
                    </MorphingDialogTitle>
                  </div>
                </div>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent
                  style={{
                    borderRadius: '24px',
                  }}
                  className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
                >
                  <MorphingDialogImage
                    src='/photo-4.jpg'
                    alt='photo 4'
                    className='h-115 w-auto'
                  />
                  <div className='p-6'>
                    <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                      Clinical Consultations & Therapy Department
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
                        This department features state-of-the-art operating theatres equipped with advanced surgical lighting and premium 
                        sterilization systems. Our highly synchronized surgical teams perform complex and minor procedures with ultimate 
                        precision in a 100% sterile and safe environment.
                      </p>
                    </MorphingDialogDescription>
                  </div>
                  <MorphingDialogClose className='text-zinc-50' />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
        </div>
        <div className="row-span-2">
          <h2 className="autoShow border-t border-b border-gray-300 py-4 text-blue-600 font-bold text-4xl px-15"><span className=" ">To Explore </span><span className="text-green-600 "> More</span> Information</h2>
          <p className="w-full h-fit text-gray-500  indent-8">Click on the Picture</p>
        </div>
      </div>
      <div classsName="">
        <h1 className="text-6xl text-gray-700 font-bold pb-7">Welcome to <span className="text-blue-600">Med</span><span className="text-green-600">Care</span></h1>
      </div>
    </>
  );
}
