const GlowOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="orb w-96 h-96 bg-neon-blue/20 -top-48 -left-48 animate-pulse-glow" />
    <div className="orb w-[500px] h-[500px] bg-neon-purple/15 top-1/3 -right-64 animate-pulse-glow" style={{ animationDelay: "2s" }} />
    <div className="orb w-72 h-72 bg-neon-cyan/10 bottom-20 left-1/4 animate-pulse-glow" style={{ animationDelay: "4s" }} />
  </div>
);

export default GlowOrbs;
