import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Code2, FolderGit2 } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const experience = [
  { role: "Freelance Web Developer", company: "Self-Employed", period: "2023 – Present", points: ["Built full-stack web apps for clients", "Implemented responsive, modern UI/UX", "Worked with React, Node.js, MongoDB"] },
];

const educationData = [
  { degree: "B.Tech in Computer Science", school: "University", period: "2021 – 2025" },
];

const skillCategories = [
  { title: "Frontend", skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript"] },
  { title: "Backend", skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Figma"] },
];

const Resume = () => (
  <PageTransition>
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Resume" subtitle="My professional background and qualifications." />

        <div className="flex justify-center mb-12">
          <button className="btn-neon flex items-center gap-2">
            <Download size={18} /> Download CV
          </button>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Experience */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-neon-blue" size={24} />
              <h3 className="font-display text-2xl font-bold text-foreground">Experience</h3>
            </div>
            {experience.map((e) => (
              <div key={e.role} className="glass p-6 mb-4">
                <h4 className="font-semibold text-foreground text-lg">{e.role}</h4>
                <p className="text-sm text-neon-blue mb-3">{e.company} • {e.period}</p>
                <ul className="space-y-1">
                  {e.points.map((p) => (
                    <li key={p} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-neon-cyan mt-0.5">▹</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-neon-purple" size={24} />
              <h3 className="font-display text-2xl font-bold text-foreground">Education</h3>
            </div>
            {educationData.map((e) => (
              <div key={e.degree} className="glass p-6">
                <h4 className="font-semibold text-foreground">{e.degree}</h4>
                <p className="text-sm text-neon-blue">{e.school} • {e.period}</p>
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-neon-cyan" size={24} />
              <h3 className="font-display text-2xl font-bold text-foreground">Skills</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {skillCategories.map((cat) => (
                <div key={cat.title} className="glass p-6">
                  <h4 className="font-semibold text-foreground mb-3">{cat.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Resume;
