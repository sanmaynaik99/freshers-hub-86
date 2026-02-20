import { useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation this would send an email
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-widest mb-2">
            // 05. CONTACT
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="section-divider w-24 mt-3" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-3">
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, collaborations,
              or cybersecurity projects. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:sanmaynaik99@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg cyber-border card-gradient group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">
                    EMAIL
                  </p>
                  <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">
                    sanmaynaik99@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sanmaynaik/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg cyber-border card-gradient group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">
                    LINKEDIN
                  </p>
                  <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">
                    LinkedIn Profile
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/sanmaynaik99"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-lg cyber-border card-gradient group hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-mono">
                    GITHUB
                  </p>
                  <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors">
                    GitHub Profile
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-primary tracking-wider mb-1.5">
                NAME
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder-muted-foreground text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-primary tracking-wider mb-1.5">
                EMAIL
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder-muted-foreground text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-primary tracking-wider mb-1.5">
                MESSAGE
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-md bg-card border border-border text-foreground placeholder-muted-foreground text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm primary-gradient text-primary-foreground cyber-glow hover:cyber-glow-strong hover:scale-105 transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              {sent ? "Message Sent!" : "Send Message"}
            </button>
            {sent && (
              <p className="text-primary text-sm font-mono text-center animate-float-up">
                ✓ Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
