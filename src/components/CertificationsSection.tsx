import FadeIn from "./FadeIn";

const CERTS = [
  { title: "Python Developer Certification", issuer: "VXL IT Solutions", year: "2025" },
  { title: "Web Development Certification", issuer: "MS Square Technologies", year: "2024" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16">
      <FadeIn y={40}>
        <h2 className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Certifications
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6">
        {CERTS.map((cert, i) => (
          <FadeIn key={cert.title} y={30} delay={i * 0.1}>
            <div className="rounded-[32px] border-2 border-[#D7E2EA]/20 bg-[#141418] p-10 flex flex-col gap-4 hover:border-[#D7E2EA]/50 transition-colors">
              <span className="text-[#D7E2EA]/40 text-sm uppercase tracking-widest">{cert.year}</span>
              <h3 className="font-semibold text-[#D7E2EA] text-xl leading-snug">{cert.title}</h3>
              <p className="text-[#D7E2EA]/60 text-sm uppercase tracking-widest">{cert.issuer}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
