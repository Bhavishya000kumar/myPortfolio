import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Users, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const softSkills = [
  { name: "Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Teamwork", icon: Users },
  { name: "Time Management", icon: Clock },
];

const SoftSkillsSection = () => (
  <section id="soft-skills" className="py-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="Soft Skills" subtitle="Beyond the code — skills that make the difference." />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {softSkills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 text-center card-3d group"
          >
            <div className="mx-auto w-14 h-14 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-4 group-hover:shadow-[0_0_20px_hsl(195_100%_50%/0.3)] transition-all duration-300">
              <skill.icon className="text-neon-blue" size={28} />
            </div>
            <span className="text-lg font-semibold text-foreground">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SoftSkillsSection;
