import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const technicalSkills = [
  {
    title: "Frontend",
    color: "neon-blue",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    color: "neon-purple",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Tools",
    color: "neon-cyan",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "Figma", level: 70 },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with." />

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {technicalSkills.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.15 }}
            className="glass p-6 card-3d"
          >
            <h3 className={`font-display text-xl font-bold text-${cat.color} mb-6`}>{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((s, si) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: ci * 0.15 + si * 0.08 }}
                >
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-foreground">{s.name}</span>
                    <span className="text-sm text-muted-foreground">{s.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <motion.div
                      className="progress-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: ci * 0.15 + si * 0.08, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
