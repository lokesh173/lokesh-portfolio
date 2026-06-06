import FadeIn from "./FadeIn";

const EXPERIENCE = [
  {
    number: "01",
    title: "Python Developer Intern",
    company: "VXL IT Solutions (Remote)",
    period: "May 2025 - Jun 2025",
    points: [
      "Engineered 5+ modular Python backend services following SOLID principles, tracked via Git, reducing code duplication by ~30%.",
      "Designed and integrated RESTful APIs using Flask to power dynamic CRUD features, validated via Postman across 10+ endpoints.",
      "Optimized SQL queries on a 10,000+ record dataset using indexing and query refactoring, improving data retrieval by ~25%.",
    ],
  },
  {
    number: "02",
    title: "Web Development Intern",
    company: "MS Square Technologies (Remote)",
    period: "Jun 2024 - Aug 2024",
    points: [
      "Built 8+ responsive UI components using HTML, CSS, Bootstrap, and JavaScript ensuring cross-browser compatibility.",
      "Implemented Flask-based backend routes handling form submissions and session management; fixed 15+ server-side issues.",
      "Collaborated in an agile team of 4 on end-to-end deployment including testing, staging verification, and Linux environment setup.",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="text-center font-black uppercase text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Experience
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {EXPERIENCE.map((exp, i) => (
          <FadeIn key={exp.number} delay={i * 0.1} y={30}>
            <div
              className="flex flex-row items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: "1px solid rgba(12, 12, 12, 0.15)",
                ...(i === EXPERIENCE.length - 1
                  ? { borderBottom: "1px solid rgba(12, 12, 12, 0.15)" }
                  : {}),
              }}
            >
              <div
                className="shrink-0 font-black text-[#0C0C0C] leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {exp.number}
              </div>
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 pt-2 sm:pt-3 md:pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] leading-tight"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {exp.title}
                  </h3>
                  <span className="text-[#0C0C0C]/50 text-sm uppercase tracking-widest shrink-0">{exp.period}</span>
                </div>
                <p className="text-[#0C0C0C]/60 font-medium text-sm uppercase tracking-widest">{exp.company}</p>
                <ul className="flex flex-col gap-2 mt-1">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="text-[#0C0C0C]/40 mt-1 shrink-0 text-xs">--</span>
                      <span className="text-[#0C0C0C]/70 leading-relaxed" style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)" }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
