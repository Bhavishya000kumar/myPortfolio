import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/bhavishyakumar", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/bhavishyakumar", label: "LinkedIn" },
  { icon: Mail, href: "mailto:bhavishya@example.com", label: "Email" },
];

const Footer = () => (
  <footer className="border-t border-border/50 mt-20">
    <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Bhavishya Kumar. All rights reserved.
      </p>
      <div className="flex gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-neon-blue transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(195_100%_50%/0.5)]"
          >
            <s.icon size={20} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
