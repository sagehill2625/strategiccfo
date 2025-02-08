const Team = () => {
  const teamMembers = [
    {
      name: "CA Ramji Agiwal",
      role: "Managing Partner",
      expertise:
        "Worked in India's top listed companies, unlocking hidden opportunities and mitigating risks. Expertise in M&A, investor relations, risk management, etc. Partner for proven financial leadership.",
    },
    {
      name: "CA Nidhi Baheti",
      role: "Partner",
      expertise:
        "Big 4 CA with the expertise of more than 10 years in audit, accounting, treasury, risk management & tax strategy.",
    },
    {
      name: "CMA Sunil Bhandari",
      role: "Senior Advisor",
      expertise:
        "Seasoned with 30+ years of experience in diverse manufacturing industries. Proven expertise in cost analysis, pricing strategies, and Bill of Materials (BOM) optimization.",
    },
    {
      name: "CA Rachita Malpani",
      role: "Partner",
      expertise:
        "CA with the expertise of more than 15 years specializing in strategic business planning, system optimization, and data-driven insights for accelerated growth and informed decision-making.",
    },
    {
      name: "MBA Abhishek Singh",
      role: "Senior Consultant",
      expertise:
        "A fundraising specialist, who helps businesses to secure funds for growth (expansion, operations) through efficient strategies and expert guidance.",
    },
  ];

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy font-playfair mb-6">
            Our Team
          </h2>
          <p className="text-lg text-gray-700">
            Meet our dedicated team of professionals who bring their unique
            skills and experiences to the forefront, driving our success. Each
            member plays a crucial role in fostering innovation and delivering
            solutions that meet the highest standards of excellence. We are
            committed to collaboration and excellence in every project we
            undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[300px] w-full bg-gradient-to-b from-primary-navy/10 to-primary-navy/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary-navy/10 flex items-center justify-center">
                    <svg
                      className="w-20 h-20 text-primary-navy/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zm0 2c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center bg-white">
                <h3 className="text-xl font-bold text-primary-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-gold font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">{member.expertise}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
