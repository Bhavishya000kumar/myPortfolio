import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center mb-16"
  >
    <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
