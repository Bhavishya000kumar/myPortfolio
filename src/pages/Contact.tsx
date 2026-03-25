import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const socials = [
  { icon: Github, href: "https://github.com/bhavishyakumar", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/bhavishyakumar", label: "LinkedIn" },
  { icon: Mail, href: "mailto:bhavishya@example.com", label: "Email" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageTransition>
      <section className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6">
          <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Drop me a message." />

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 glass-input bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  maxLength={255}
                  className="w-full px-4 py-3 glass-input bg-transparent text-foreground placeholder:text-muted-foreground outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  maxLength={1000}
                  rows={5}
                  className="w-full px-4 py-3 glass-input bg-transparent text-foreground placeholder:text-muted-foreground outline-none resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button type="submit" className="btn-neon flex items-center gap-2 w-full justify-center">
                <Send size={18} /> Send Message
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="glass p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">Connect with me</h3>
                <div className="space-y-4">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-muted-foreground hover:text-neon-blue transition-all duration-300 group"
                    >
                      <div className="p-2 glass rounded-lg group-hover:shadow-[0_0_15px_hsl(195_100%_50%/0.2)] transition-all">
                        <s.icon size={20} />
                      </div>
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
