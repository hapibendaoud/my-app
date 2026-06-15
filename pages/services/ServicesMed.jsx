

const services = [
  {
    title: "General Consultation",
    description: "Medical checkups and diagnosis for all patients.",
    icon: "🩺"
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency medical assistance and support.",
    icon: "🚑"
  },
  {
    title: "Pediatrics",
    description: "Specialized care for infants, children and adolescents.",
    icon: "👶"
  },
  {
    title: "Surgery",
    description: "Advanced surgical procedures with modern equipment.",
    icon: "🏥"
  },
  {
    title: "Laboratory Tests",
    description: "Fast and accurate medical testing services.",
    icon: "🧪"
  },
  {
    title: "Maternity Care",
    description: "Complete care for mothers before and after birth.",
    icon: "🤰"
  }
];

function ServiceCard({ service }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gray-200 dark:bg-zinc-800 cursor-pointer">

      <div className="text-6xl mb-4">{service.icon}</div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
        {service.title}
      </h3>

      <p className="text-gray-500 mt-2">
        {service.description}
      </p>

    </div>
  );
}







export default function ServicesMed() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col px-15 py-10 gap-10">

      {/* Hero */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          Our <span className="text-green-600 ">Services</span>
        </h1>
        <p className="text-gray-500 mt-4 text-xl">
          High quality medical care tailored for every patient
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-3 gap-8 mt-10">

        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}

      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h1 className="text-5xl font-bold text-blue-600">
          Need <span className="text-green-600 ">Medical</span>
          Assistance?
        </h1>
        <p className="text-gray-500 mt-3">
          Book your appointment with MedCare today
        </p>

        <button className="mt-5 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700">
          Get Started
        </button>
      </div>

    </div>
    </>
  );
}
