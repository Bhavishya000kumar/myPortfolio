import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const skills = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Express.js", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "Git & GitHub", level: 85 },
];

const education = [
  { degree: "B.Tech in Computer Science", institution: "University", year: "2021 – 2025", description: "Focusing on full-stack development and software engineering." },
];

const achievements = [
  "Built 20+ full-stack projects",
  "Open source contributor",
  "Hackathon participant",
  "Strong problem-solving skills in DSA",
];

const SkillBar = ({ name, level, index }: { name: string; level: number; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-sm text-muted-foreground">{level}%</span>
    </div>
    <div className="progress-bar">
      <motion.div
        className="progress-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
      />
    </div>
  </motion.div>
);

const About = () => (
  <PageTransition>
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" subtitle="A passionate developer who loves building things for the web." />

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 mb-16 max-w-3xl mx-auto"
        >
          <p className="text-muted-foreground leading-relaxed text-lg">
            I'm Bhavishya Kumar, a Computer Science student and MERN Stack Developer passionate about creating modern, responsive, and user-friendly web applications. I enjoy turning complex problems into simple, beautiful, and intuitive solutions. I'm always eager to learn new technologies and improve my craft.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} index={i} />
            ))}
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-neon-blue" size={24} />
              <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
            </div>
            {education.map((e) => (
              <div key={e.degree}>
                <h4 className="font-semibold text-foreground">{e.degree}</h4>
                <p className="text-sm text-neon-blue">{e.institution} • {e.year}</p>
                <p className="text-muted-foreground text-sm mt-1">{e.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-neon-purple" size={24} />
              <h3 className="font-display text-xl font-bold text-foreground">Achievements</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-neon-cyan mt-1">▹</span> {a}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  </PageTransition>
);

export default About;
