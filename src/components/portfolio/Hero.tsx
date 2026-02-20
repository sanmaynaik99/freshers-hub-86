import { Terminal, Download, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />

      {/* Animated glow orb */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/5 w-48 h-48 rounded-full bg-primary/3 blur-3xl" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>Cybersecurity Enthusiast</span>
            <span className="animate-blink text-primary ml-1">_</span>
          </div>

          {/* Name */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-primary cyber-text-glow leading-none mb-4">
            Sanmay
            <br />
            Naik
          </h1>

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground/90 mb-3">
            Cybersecurity Analyst{" "}
            <span className="text-primary">|</span> SOC Enthusiast
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
            Focused on security monitoring, threat detection, and incident
            analysis
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 primary-gradient text-primary-foreground cyber-glow hover:cyber-glow-strong hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200 border border-primary/40 text-primary bg-primary/5 hover:bg-primary/15 hover:border-primary"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
