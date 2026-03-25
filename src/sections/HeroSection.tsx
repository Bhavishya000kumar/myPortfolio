import { motion } from "framer-motion";
import { ArrowRight, Download, FileText } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import devBackground from "@/assets/dev-background.png";

const stats = [
  { label: "Technologies", value: "15+" },
  { label: "Projects", value: "2+" },
  { label: "Years Learning", value: "3+" },
];

const CV_LINK = "https://drive.google.com/file/d/1C2yC2eoRiAsmi-2xrLuhp9d8dzRW9wN9/view?usp=drive_link";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
    {/* Background image with blur + overlay */}
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <img src={devBackground} alt="" className="w-full h-full object-cover opacity-15 blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
    </div>

    {/* Animated grid */}
    <div className="absolute inset-0 z-[2] pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(hsl(var(--neon-blue) / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-blue) / 0.05) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--neon-purple) / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--neon-purple) / 0.08) 1px, transparent 1px)`,
          backgroundSize: '120px 120px',
        }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="container mx-auto px-6 relative z-[5]">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block glass px-4 py-2 mb-6">
            <span className="text-base text-neon-blue font-medium">👋 Welcome to my portfolio</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Bhavishya Kumar</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium text-neon-purple">
            MERN Stack Developer | CS Student
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
            I am a passionate MERN Stack Developer and Computer Science student focused on building modern, scalable, and user-friendly web applications. I enjoy creating clean UI designs with smooth user experiences and solving real-world problems through technology.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-neon flex items-center gap-2 text-base"
            >
              View Projects <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-glass flex items-center gap-2 text-base"
            >
              <FileText size={18} /> View Resume
            </button>
            <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="btn-glass flex items-center gap-2 text-base">
              <Download size={18} /> Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center xl:justify-end"
        >
          <div className="relative z-10">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20 animate-gradient flex items-center justify-center glow-blue p-1">
              <img
                src={profilePhoto}
                alt="Bhavishya Kumar"
                className="w-full h-full rounded-full object-cover border-2 border-glass-border/20 shadow-xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass px-4 py-2 animate-float backdrop-blur-md">
              <span className="text-sm text-neon-cyan font-semibold">MERN Stack</span>
            </div>
            <div className="absolute -top-4 -left-4 glass px-4 py-2 animate-float backdrop-blur-md" style={{ animationDelay: "3s" }}>
              <span className="text-sm text-neon-purple font-semibold">React.js</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-3 gap-6 mt-20 max-w-2xl mx-auto"
      >
        {stats.map((s) => (
          <div key={s.label} className="glass text-center p-6 card-3d">
            <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
