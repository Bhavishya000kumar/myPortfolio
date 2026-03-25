import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionHeading from "@/components/SectionHeading";

const counters = [
  { label: "Projects Built", target: 2 },
  { label: "Technologies", target: 15 },
  { label: "Years Learning", target: 3 },
];

const AnimatedCounter = ({ target, label }: { target: number; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <div ref={ref} className="glass text-center p-6">
      <div className="font-display text-3xl font-bold text-gradient">{count}+</div>
      <div className="text-base text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <SectionHeading title="About Me" subtitle="A passionate developer who loves building things for the web." />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 mb-16 max-w-3xl mx-auto"
      >
        <p className="text-muted-foreground leading-relaxed text-lg">
          I'm Bhavishya Kumar, a Computer Science student at Lovely Professional University and a MERN Stack Developer passionate about creating modern, responsive, and user-friendly web applications. I enjoy turning complex problems into simple, beautiful, and intuitive solutions. I'm always eager to learn new technologies and improve my craft.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg mt-4">
          My focus areas include full-stack web development, clean UI/UX design, and building scalable applications that solve real-world problems. I believe in writing clean code and continuously improving through hands-on projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
        {counters.map((c) => (
          <AnimatedCounter key={c.label} {...c} />
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
