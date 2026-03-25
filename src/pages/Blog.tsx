import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const categories = ["All", "React", "JavaScript", "CSS", "Career"];

const posts = [
  { id: 1, title: "Getting Started with React 18", excerpt: "Explore the new features in React 18 including concurrent rendering and automatic batching.", date: "Mar 15, 2025", category: "React", readTime: "5 min" },
  { id: 2, title: "Mastering Tailwind CSS", excerpt: "Tips and tricks to write cleaner, more efficient Tailwind CSS and build beautiful UIs faster.", date: "Mar 10, 2025", category: "CSS", readTime: "4 min" },
  { id: 3, title: "JavaScript ES2024 Features", excerpt: "A look at the latest JavaScript features and how to use them in your projects today.", date: "Feb 28, 2025", category: "JavaScript", readTime: "6 min" },
  { id: 4, title: "Building a Career in Tech", excerpt: "My journey as a CS student and tips for breaking into the tech industry.", date: "Feb 20, 2025", category: "Career", readTime: "7 min" },
];

const Blog = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <PageTransition>
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionHeading title="Blog" subtitle="Thoughts, tutorials, and insights on web development." />

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === c
                    ? "bg-neon-blue/20 text-neon-blue border border-neon-blue/30"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Posts */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {filtered.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 card-3d group cursor-pointer"
              >
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20">{p.category}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} />{p.date}</span>
                  <span>{p.readTime} read</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-neon-blue transition-colors">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.excerpt}</p>
                <span className="text-neon-blue text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Blog;
