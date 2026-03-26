import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Lenis from "lenis";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowOrbs from "@/components/GlowOrbs";
import ScrollProgress from "@/components/ScrollProgress";
import { SpaceMolecules3D } from "@/components/SpaceMolecules3D";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import SkillsSection from "@/sections/SkillsSection";
import SoftSkillsSection from "@/sections/SoftSkillsSection";
import ProjectsSection from "@/sections/ProjectsSection";
import CertificatesSection from "@/sections/CertificatesSection";
import ResumeSection from "@/sections/ResumeSection";
import EducationSection from "@/sections/EducationSection";
import LocationSection from "@/sections/LocationSection";
import ContactSection from "@/sections/ContactSection";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
      <div className="relative min-h-screen">
        <div className="fixed inset-0 z-0 pointer-events-none opacity-70">
          <SpaceMolecules3D />
        </div>
        <ScrollProgress />
        <GlowOrbs />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <SoftSkillsSection />
          <ProjectsSection />
          <CertificatesSection />
          <ResumeSection />
          <EducationSection />
          <LocationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
