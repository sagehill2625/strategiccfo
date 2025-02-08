const Services = () => {
  const services = [
    {
      title: "CFO Services",
      description:
        "Strategic leadership to navigate financial complexities and drive growth.",
      icon: (
        <svg
          className="w-12 h-12 text-primary-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Finance & Accounting",
      description:
        "Optimize your financial health with comprehensive accounting solutions.",
      icon: (
        <svg
          className="w-12 h-12 text-primary-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Compliance & Risk Management",
      description:
        "Safeguard your operations with proactive compliance strategies and risk mitigation.",
      icon: (
        <svg
          className="w-12 h-12 text-primary-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Business Advisory",
      description:
        "Empower your decision-making with expert insights and tailored business advice.",
      icon: (
        <svg
          className="w-12 h-12 text-primary-gold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy font-playfair mb-6">
            Services
          </h2>
          <p className="text-lg text-gray-700">
            Elevating Your Business to New Heights: Discover a suite of services
            tailored to foster your company&apos;s growth and stability. With a
            focus on precision, insight, and innovation, we&apos;re here to
            guide you through every financial challenge and opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary-navy mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">Explore All Services</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
