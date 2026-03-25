import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, FolderGit2, Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const stats = [
  { icon: Code2, label: "Technologies", value: "15+" },
  { icon: FolderGit2, label: "Projects", value: "20+" },
  { icon: Sparkles, label: "Years Learning", value: "3+" },
];

const Index = () => (
  <PageTransition>
    <section className="min-h-screen flex items-center pt-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block glass px-4 py-2 mb-6">
              <span className="text-sm text-neon-blue font-medium">👋 Welcome to my portfolio</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-gradient">Bhavishya Kumar</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg">
              MERN Stack Developer & Computer Science Student crafting modern, performant web experiences.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/projects" className="btn-neon flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </Link>
              <Link to="/resume" className="btn-glass flex items-center gap-2">
                Download CV
              </Link>
              <Link to="/contact" className="btn-glass flex items-center gap-2">
                Contact Me
              </Link>
            </div>
          </motion.div>

          {/* Right - Profile visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-neon-blue/20 via-neon-purple/20 to-neon-cyan/20 animate-gradient flex items-center justify-center glow-blue">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full glass-strong flex items-center justify-center">
                  <span className="font-display text-6xl md:text-8xl font-bold text-gradient">BK</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass px-4 py-2 animate-float">
                <span className="text-sm text-neon-cyan">MERN Stack</span>
              </div>
              <div className="absolute -top-4 -left-4 glass px-4 py-2 animate-float" style={{ animationDelay: "3s" }}>
                <span className="text-sm text-neon-purple">React.js</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-6 mt-20 max-w-2xl mx-auto"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass text-center p-6 card-3d">
              <s.icon className="mx-auto mb-2 text-neon-blue" size={24} />
              <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  </PageTransition>
);

export default Index;
