import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const certificates = [
  {
    title: "Introduction To Internet Of Things",
    description: "NPTEL Online Certification (Funded by the MoE, Govt. of India) - IIT Kharagpur. Score: 60%",
    issuer: "NPTEL / Swayam",
    date: "Jan-Apr 2025",
    image: "/01.png", 
  },
  {
    title: "ChatGPT-4 Prompt Engineering",
    description: "ChatGPT, Generative AI & LLM Course Completion.",
    issuer: "Infosys Springboard",
    date: "August 15, 2025",
    image: "/02.png", 
  },
  {
    title: "Computational Theory",
    description: "Language Principle & Finite Automata Theory Course Completion.",
    issuer: "Infosys Springboard",
    date: "August 11, 2025",
    image: "/03.png", 
  },
];

const CertificatesSection = () => (
  <section id="certificates" className="py-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="Certificates" subtitle="My achievements and continuous learning." />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass overflow-hidden card-3d group flex flex-col h-full"
          >
            <div className="relative h-48 overflow-hidden bg-white">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80" />
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-neon-blue transition-colors">
                  {c.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                {c.description}
              </p>
              
              <div className="flex flex-col gap-2 mt-auto pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Award size={16} className="text-neon-blue" />
                  <span className="font-medium">{c.issuer}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Issued: {c.date}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
