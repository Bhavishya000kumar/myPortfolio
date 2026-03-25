import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Briefcase, GraduationCap, Code2, X, FileText } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const CV_LINK = "https://drive.google.com/file/d/1C2yC2eoRiAsmi-2xrLuhp9d8dzRW9wN9/view?usp=drive_link";

const skillCategories = [
  { title: "Frontend", skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"] },
];

const ResumeSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="resume" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Resume" subtitle="My professional background and qualifications." />

          <div className="flex justify-center gap-4 mb-12">
            <button onClick={() => setModalOpen(true)} className="btn-neon flex items-center gap-2 text-base">
              <FileText size={18} /> View Resume
            </button>
            <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="btn-glass flex items-center gap-2 text-base">
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-neon-blue" size={24} />
                <h3 className="font-display text-2xl font-bold text-foreground">Experience</h3>
              </div>
              <div className="glass p-6">
                <h4 className="font-semibold text-foreground text-lg">Freelance Web Developer</h4>
                <p className="text-base text-neon-blue mb-3">Self-Employed • 2023 – Present</p>
                <ul className="space-y-2">
                  {["Built full-stack web apps for clients", "Implemented responsive, modern UI/UX", "Worked with React, Node.js, MongoDB"].map((p) => (
                    <li key={p} className="text-muted-foreground text-base flex items-start gap-2">
                      <span className="text-neon-cyan mt-0.5">▹</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-neon-cyan" size={24} />
                <h3 className="font-display text-2xl font-bold text-foreground">Skills</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {skillCategories.map((cat) => (
                  <div key={cat.title} className="glass p-6">
                    <h4 className="font-semibold text-foreground text-lg mb-3">{cat.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <span key={s} className="text-sm px-3 py-1.5 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative glass-strong p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="font-display text-3xl font-bold text-gradient mb-8">Bhavishya Kumar</h2>
              <p className="text-lg text-neon-blue mb-6">MERN Stack Developer | CS Student</p>

              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Code2 size={20} className="text-neon-cyan" /> Technical Skills
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    {skillCategories.map((cat) => (
                      <div key={cat.title}>
                        <h4 className="text-base font-semibold text-foreground mb-2">{cat.title}</h4>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.skills.map((s) => (
                            <span key={s} className="text-xs px-2 py-1 rounded-full bg-neon-blue/10 text-neon-blue">{s}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <GraduationCap size={20} className="text-neon-purple" /> Education
                  </h3>
                  <div className="space-y-3">
                    <div className="glass p-4">
                      <h4 className="font-semibold text-foreground">B.Tech in Computer Science</h4>
                      <p className="text-sm text-neon-blue">Lovely Professional University • 2021 – 2025</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    <Briefcase size={20} className="text-neon-blue" /> Projects
                  </h3>
                  <div className="space-y-3">
                    <div className="glass p-4">
                      <h4 className="font-semibold text-foreground">Just LPU Things</h4>
                      <p className="text-sm text-muted-foreground">Content-based platform for college life and student engagement.</p>
                    </div>
                    <div className="glass p-4">
                      <h4 className="font-semibold text-foreground">Ticket Booking System</h4>
                      <p className="text-sm text-muted-foreground">Web application for booking tickets with user-friendly interface.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="btn-neon flex items-center gap-2">
                  <Download size={18} /> Download Full CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ResumeSection;
