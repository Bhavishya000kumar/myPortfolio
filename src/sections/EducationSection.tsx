import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Lovely Professional University (LPU)",
    period: "2021 – 2025",
    details: "Focusing on full-stack development and software engineering.",
  },
  {
    degree: "Intermediate (12th)",
    institution: "Higher Secondary Education",
    period: "Completed",
    details: "Science stream with focus on Mathematics and Computer Science.",
  },
  {
    degree: "High School (10th)",
    institution: "Secondary Education",
    period: "Completed",
    details: "Strong foundation in academics.",
  },
];

const EducationSection = () => (
  <section id="education" className="py-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="Education" subtitle="My academic journey." />

      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan opacity-30" />

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple border-2 border-background shadow-[0_0_15px_hsl(195_100%_50%/0.4)]" />

              <div className="glass p-6 card-3d">
                <div className="flex items-start gap-3 mb-2">
                  <GraduationCap className="text-neon-blue mt-1 shrink-0" size={22} />
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{edu.degree}</h3>
                    <p className="text-base text-neon-blue">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                    <p className="text-base text-muted-foreground mt-2">{edu.details}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
