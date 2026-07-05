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
    <div className="p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-gray-50 dark:bg-slate-800 cursor-pointer w-full">
      <div className="text-5xl sm:text-6xl mb-4">{service.icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
        {service.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm sm:text-base">
        {service.description}
      </p>
    </div>
  );
}

export default function ServicesMed() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col px-4 sm:px-8 md:px-16 py-10 gap-10 dark:bg-slate-950 mt-12">

        {/* Hero */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
            Our <span className="text-green-600">Services</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-base sm:text-lg md:text-xl">
            High quality medical care tailored for every patient
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-20 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 leading-tight">
            Need <span className="text-green-600">Medical</span> Assistance?
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm sm:text-base">
            Book your appointment with MedCare today
          </p>

          <button className="mt-6 bg-green-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-green-700 transition duration-200 transform active:scale-98 shadow-md">
            Get Started
          </button>
        </div>

      </div>
    </>
  );
}