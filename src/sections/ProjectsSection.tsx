import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import justlputhingsImg from "@/assets/justlputhings.png";
import ticketBookingImg from "@/assets/ticket-booking.png";

const projects = [
  {
    title: "Just LPU Things",
    description: "A platform sharing real college life experiences, student engagement, and resources for the LPU community.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    live: "https://justlputhings.com",
    image: justlputhingsImg,
  },
  {
    title: "Ticket Booking System",
    description: "A web application for booking tickets with smooth UI, real-time availability, and user-friendly experience.",
    tech: ["React", "Express", "MongoDB", "Stripe"],
    live: "https://ticketshowapp.vercel.app/",
    image: ticketBookingImg,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="Projects" subtitle="A selection of my recent work." />

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass overflow-hidden card-3d group"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2 group-hover:text-neon-blue transition-colors">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-base mb-4 leading-relaxed">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                    {t}
                  </span>
                ))}
              </div>
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-neon text-sm px-5 py-2.5 flex items-center gap-2 rounded-lg w-fit">
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
