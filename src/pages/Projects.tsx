import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce app with cart, payment integration, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with posts, likes, comments, and live chat.",
    tech: ["React", "Express", "Socket.io", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager",
    description: "A Kanban-style project management tool with drag-and-drop functionality.",
    tech: ["React", "TypeScript", "Tailwind", "Firebase"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio — built with React, Tailwind, and Framer Motion.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    description: "Full-stack blog with markdown editor, categories, and user authentication.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with location search and 5-day forecast.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    github: "#",
    live: "#",
  },
];

const Projects = () => (
  <PageTransition>
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <SectionHeading title="Projects" subtitle="A selection of my recent work and side projects." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 card-3d group"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-neon-blue transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={p.github} className="btn-glass text-sm px-4 py-2 flex items-center gap-1.5 rounded-lg">
                  <Github size={14} /> Code
                </a>
                <a href={p.live} className="btn-glass text-sm px-4 py-2 flex items-center gap-1.5 rounded-lg">
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default Projects;
