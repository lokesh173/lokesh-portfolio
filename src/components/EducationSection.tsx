import FadeIn from "./FadeIn";

const EducationSection = () => {
  return (
    <section id="education" className="relative w-full bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-24 sm:pt-28 md:pt-32 pb-16">
      <FadeIn y={40}>
        <h2 className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          Education
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl flex flex-col gap-6">
        <FadeIn y={30} delay={0.1}>
          <div className="rounded-[32px] border-2 border-[#D7E2EA]/20 bg-[#141418] p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <h3 className="font-semibold text-[#D7E2EA] text-xl sm:text-2xl">B.Tech - Computer Science Engineering</h3>
              <span className="text-[#D7E2EA]/50 text-sm uppercase tracking-widest shrink-0">2022 - 2026</span>
            </div>
            <p className="text-[#D7E2EA]/60 mb-4">Vikas Group of Institutions, Vijayawada</p>
            <span className="inline-block rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/[0.05] px-4 py-1.5 text-sm text-[#D7E2EA]/80">CGPA: 7.4 / 10</span>
          </div>
        </FadeIn>
        <FadeIn y={30} delay={0.2}>
          <div className="rounded-[32px] border-2 border-[#D7E2EA]/20 bg-[#141418] p-8 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
              <h3 className="font-semibold text-[#D7E2EA] text-xl sm:text-2xl">Intermediate (MPC)</h3>
              <span className="text-[#D7E2EA]/50 text-sm uppercase tracking-widest shrink-0">2022</span>
            </div>
            <p className="text-[#D7E2EA]/60 mb-4">Sri Chaitanya Junior College, Vijayawada</p>
            <span className="inline-block rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/[0.05] px-4 py-1.5 text-sm text-[#D7E2EA]/80">Percentage: 85.6%</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default EducationSection;
