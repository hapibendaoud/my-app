import Image from "next/image";



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
      <div className="w-full h-fit grid grid-cols-2 gap-10 py-10 px-15">
        <div>
          <Image src="/photo-1.jpg" alt="photo 1" width={480} height={450} className="w-auto h-auto rounded-lg "/>
        </div>
        <div>
          <Image  src="/photo-2.jpg" alt="Clinic Image 1" width={480} height={450} className="w-auto h-auto rounded-lg "/>
          <Image  src="/photo-2.5.jpg" alt="Clinic Image 1" width={480} height={450} className="w-auto h-auto rounded-lg "/>

        </div>
        <div>
          <Image  src="/photo-3.jpg" alt="Clinic Image 1" width={480} height={200} className="w-auto h-auto rounded-lg "/>
        </div>
        <div>
          <Image src="/ClinicImage1.png" alt="Clinic Image 1" width={480} height={450} className="w-auto h-auto rounded-lg "/>
        </div>
      </div>
    </>
  );
}
