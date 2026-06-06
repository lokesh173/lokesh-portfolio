import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

interface ProjectData {
  number: string;
  category: string;
  name: string;
  description: string;
  tech: string[];
  highlights: string[];
  col1Image1: string;
  col1Image2: string;
}

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    category: 'Backend · Full-Stack · REST API',
    name: 'Student Information System',
    description:
      'A production-grade full-stack web application built to manage 500+ student records with normalized relational database design. Engineered 10+ RESTful API endpoints with full CRUD support, input validation, and real-time search — reducing manual lookup time by ~40%.',
    tech: ['Python', 'Flask', 'MySQL', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Postman'],
    highlights: [
      '10+ RESTful API endpoints (GET, POST, PUT, DELETE) with structured request/response schemas',
      'Normalized MySQL schema with 3 tables and foreign key constraints for data integrity',
      'Role-based access control with admin authentication and session management',
      'Real-time student search and filtered views with responsive HTML/CSS/JS frontend',
      'Input validation and error handling reducing invalid data entries at schema level',
      'Modular Flask architecture with blueprint-based routing for clean separation of concerns',
    ],
    col1Image1: '/sis1.png',
    col1Image2: '/sis2.png',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  total: number;
}

const ProjectCard = ({ project, index, total }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={cardRef} className="sticky w-full" style={{ top: `${96 + index * 28}px` }}>
      <motion.article
        style={{ scale }}
        className="origin-top mx-auto w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-10"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-4 sm:gap-6 mb-8">
          <div className="flex flex-row items-start gap-3 sm:gap-6 md:gap-10 min-w-0 w-full">
            <div className="shrink-0 font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 10vw, 140px)' }}>
              {project.number}
            </div>
            <div className="flex flex-col gap-1 sm:gap-3 pt-1 sm:pt-3 md:pt-4 min-w-0 flex-1">
              <span className="font-light uppercase tracking-widest text-[#D7E2EA]/60"
                style={{ fontSize: 'clamp(0.65rem, 1.2vw, 1rem)' }}>
                {project.category}
              </span>
              <h3 className="font-medium uppercase text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}>
                {project.name}
              </h3>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-[#D7E2EA]/70 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
          {project.description}
        </p>

        {/* Image Grid - 2 images side by side */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-8"
          style={{ height: 'clamp(220px, 32vw, 420px)' }}>
          <div className="overflow-hidden rounded-[24px] sm:rounded-[32px]">
            <img src={project.col1Image1} alt={`${project.name} preview 1`}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy" draggable={false} />
          </div>
          <div className="overflow-hidden rounded-[24px] sm:rounded-[32px]">
            <img src={project.col1Image2} alt={`${project.name} preview 2`}
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy" draggable={false} />
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 mb-4">
            Key Highlights
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.highlights.map((h) => (
              <div key={h}
                className="flex items-start gap-3 rounded-2xl border border-[#D7E2EA]/10 bg-[#D7E2EA]/[0.03] px-4 py-3 hover:border-[#D7E2EA]/30 transition-colors">
                <span className="text-white/60 mt-0.5 shrink-0 text-xs">▸</span>
                <span className="text-[#D7E2EA]/75 text-sm leading-relaxed">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/40 mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t}
                className="rounded-full border border-[#D7E2EA]/20 bg-[#D7E2EA]/[0.05] px-4 py-1.5 text-sm text-[#D7E2EA]/80 hover:border-[#D7E2EA]/50 hover:text-[#D7E2EA] transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 w-full rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] bg-[#0C0C0C] px-4 sm:px-6 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-24">
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase tracking-tight leading-none mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Projects
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-7xl">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;