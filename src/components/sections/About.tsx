import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="/images/about-img.jpg"
              alt="Strategic Financial Planning"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-navy font-playfair">
              About Us
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a leading financial consulting firm in India, specializing
              in strategic CFO services for multinational corporations, Indian
              enterprises, and SMEs. Our expertise spans across financial
              strategy, risk management, and business advisory services.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg
                    className="w-6 h-6 text-primary-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-navy">
                    Strategic Financial Planning
                  </h3>
                  <p className="text-gray-600">
                    Comprehensive financial strategies for sustainable growth
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg
                    className="w-6 h-6 text-primary-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-navy">
                    Risk Management & Compliance
                  </h3>
                  <p className="text-gray-600">
                    Proactive risk mitigation and regulatory compliance
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg
                    className="w-6 h-6 text-primary-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-navy">
                    Business Strategy Development
                  </h3>
                  <p className="text-gray-600">
                    Data-driven insights for informed decision-making
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-primary inline-block">
                Connect With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
