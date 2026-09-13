import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveMetricsGrid from "@/components/LiveMetricsGrid";
import VibeCodingSection from "@/components/VibeCodingSection";
import ServicesSection from "@/components/ServicesSection";
import InteractiveProjectsSection from "@/components/InteractiveProjectsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechStackMatrix from "@/components/TechStackMatrix";
import CertificationsEducation from "@/components/CertificationsEducation";
import WhatsAppContactSection from "@/components/WhatsAppContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import CinematicSpotlight from "@/components/CinematicSpotlight";
import Interactive3DBackground from "@/components/Interactive3DBackground";
import ZeroGravityKineticDock from "@/components/ZeroGravityKineticDock";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090b] text-slate-100 selection:bg-[#d4ff00] selection:text-black relative overflow-hidden">
      {/* 3D Interactive WebGL/Canvas Particle & Vector Matrix */}
      <Interactive3DBackground />

      {/* Cinematic Ambient Mouse Spotlight */}
      <CinematicSpotlight />

      {/* Floating Capsule Navigation */}
      <Navbar />

      {/* Hero Presentation */}
      <HeroSection />

      {/* Live Impact Metrics Telemetry */}
      <LiveMetricsGrid />

      {/* Vibe Coding & AI Tools Deep Dive */}
      <VibeCodingSection />

      {/* Core Solutions & Enterprise Capabilities */}
      <ServicesSection />

      {/* Technical Case Studies & Interactive RCA Sandbox */}
      <InteractiveProjectsSection />

      {/* Professional Experience Timeline */}
      <ExperienceTimeline />

      {/* Skills & Tech Stack Matrix */}
      <TechStackMatrix />

      {/* Certifications, Education & Languages */}
      <CertificationsEducation />

      {/* WhatsApp Dispatch & Contact Hub */}
      <WhatsAppContactSection />

      {/* Cinematic Telemetry Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action Widget */}
      <FloatingWhatsAppButton />

      {/* Zero-Gravity Mobile Radial Kinetic Dock */}
      <ZeroGravityKineticDock />
    </main>
  );
}

