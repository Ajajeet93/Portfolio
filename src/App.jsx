import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CertificateArray } from "./components/CertificateArray";
import { FloatingNav } from "./components/FloatingNav";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeading } from "./components/SectionHeading";
import { SkillsGrid } from "./components/SkillsGrid";
import { TerminalContact } from "./components/TerminalContact";
import { TimelineItem } from "./components/TimelineItem";
import { useLenis } from "./hooks/useLenis";
import { navItems, portfolio } from "./data/portfolio";

export default function App() {
  useLenis();

  const [activeSection, setActiveSection] = useState("home");
  const [activeAboutFrame, setActiveAboutFrame] = useState(0);
  const [isAboutStackPaused, setIsAboutStackPaused] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (current?.target?.id) {
          setActiveSection(current.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isAboutStackPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveAboutFrame((current) => (current + 1) % portfolio.about.profiles.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [isAboutStackPaused]);

  const totalAboutFrames = portfolio.about.profiles.length;
  const leftIndex = (activeAboutFrame - 1 + totalAboutFrames) % totalAboutFrames;
  const rightIndex = (activeAboutFrame + 1) % totalAboutFrames;
  const stackSlots = {
    left: { left: -18, top: 34, scale: 0.9, opacity: 0.42, zIndex: 2, filter: "blur(2px)" },
    center: { left: 64, top: -2, scale: 1.04, opacity: 1, zIndex: 5, filter: "blur(0px)" },
    right: { left: 146, top: 34, scale: 0.9, opacity: 0.42, zIndex: 2, filter: "blur(2px)" },
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#EAEAEA]">
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-[linear-gradient(90deg,#7A0C0C,#A11212,#0A192F)]"
        style={{ scaleX: progress }}
      />

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 py-24"
        >
          <div className="hero-noise" />
          <div className="hero-spotlight" />
          <div className="hero-blue-haze" />
          <div className="mx-auto w-full max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.9] tracking-[0.06em] md:text-8xl lg:text-[7rem]">
                {portfolio.hero.name}
              </h1>
              <p className="mt-5 text-xl text-[#EAEAEA]/82 md:text-2xl">
                {portfolio.hero.title}
              </p>
              <p className="mx-auto mt-6 max-w-2xl font-display text-2xl text-[#EAEAEA] md:text-3xl">
                {portfolio.hero.tagline}
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#EAEAEA]/68">
                {portfolio.hero.subtext}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="#projects"
                  className="rounded-full border border-[#7A0C0C]/60 bg-[#7A0C0C]/14 px-6 py-3 text-sm font-medium text-[#EAEAEA] transition hover:bg-[#7A0C0C]/22"
                >
                  View Projects
                </a>
                <a
                  href={portfolio.hero.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-[#EAEAEA]/86 transition hover:border-white/20 hover:bg-white/8"
                >
                  Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-shell pb-10">
          <SectionHeading title="About" />
          <div className="about-wrap mt-8">
            <div className="about-background" aria-hidden="true">
              <div className="about-bg-orb" />
              {portfolio.about.profiles.map((profile, index) => {
                const slot =
                  index === activeAboutFrame
                    ? stackSlots.center
                    : index === leftIndex
                      ? stackSlots.left
                      : stackSlots.right;

                return (
                  <motion.a
                    key={profile.title}
                    href={profile.href}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setIsAboutStackPaused(true)}
                    onMouseLeave={() => setIsAboutStackPaused(false)}
                    onFocus={() => setIsAboutStackPaused(true)}
                    onBlur={() => setIsAboutStackPaused(false)}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    animate={{
                      left: slot.left,
                      top: slot.top,
                      scale: slot.scale,
                      opacity: slot.opacity,
                      filter: slot.filter,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 24,
                      mass: 1,
                    }}
                    className="about-stack-frame"
                    style={{ zIndex: slot.zIndex }}
                    >
                      <div className="about-stack-header">
                        <span className="about-stack-dot" />
                        <span className="about-stack-dot" />
                        <span className="about-stack-dot" />
                        <span className="about-stack-method">{profile.title}()</span>
                      </div>
                      <p className="mt-4 text-[0.68rem] uppercase tracking-[0.24em] text-[#7A0C0C]">
                        frame_{index + 1}
                      </p>
                      <p className="mt-2 text-sm font-medium text-[#EAEAEA]/82">{profile.handle}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#EAEAEA]/42">
                        {profile.note}
                      </p>
                    </motion.a>
                );
              })}
            </div>
            <div className="relative z-10 max-w-[56%] space-y-5 text-base leading-8 text-[#EAEAEA]/68">
              <p>{portfolio.about.intro}</p>
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell pt-10">
          <SectionHeading title="Experience" />
          <div className="mt-12 grid gap-6">
            {portfolio.experience.map((item, index) => (
              <TimelineItem key={`${item.title}-${item.meta}`} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeading title="Projects" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {portfolio.projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell">
          <SectionHeading title="Skills" />
          <SkillsGrid groups={portfolio.skills} />
        </section>

        <section id="certificates" className="section-shell">
          <SectionHeading title="Certificates" />
          <CertificateArray items={portfolio.highlights} />
        </section>

        <section id="education" className="section-shell">
          <SectionHeading title="Education" />
          <div className="mt-12 grid gap-6">
            {portfolio.education.map((item, index) => (
              <TimelineItem key={`${item.title}-${item.meta}`} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-36">
          <SectionHeading title="Contact" />
          <TerminalContact
            contact={portfolio.contact}
            resumeHref={portfolio.hero.resumeHref}
          />
        </section>
      </main>

      <FloatingNav items={navItems} activeSection={activeSection} />
    </div>
  );
}
