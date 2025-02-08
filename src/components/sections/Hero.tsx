"use client";

import Image from "next/image";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Mumbai Financial District"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/95 via-primary-navy/85 to-primary-navy/75" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl text-text-light animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-playfair leading-tight drop-shadow-lg">
            Better Solutions For Your Business
          </h1>
          <p className="text-xl md:text-2xl mb-10 font-light leading-relaxed drop-shadow-md">
            Transform your business with our CFO services, where strategic
            financial guidance meets innovation to fuel your journey to success.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="#contact"
              className="btn-primary shadow-lg hover:shadow-xl bg-primary-gold text-primary-navy font-bold"
            >
              Get in Touch
            </a>
            <a
              href="#about"
              className="btn-secondary bg-transparent text-white border-2 border-white/80 hover:bg-white/20 hover:border-white hover:text-white shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
      >
        <div className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </button>
    </section>
  );
};

export default Hero;
