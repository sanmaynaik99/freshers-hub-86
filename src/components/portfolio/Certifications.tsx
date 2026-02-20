import { Award, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    desc: "Comprehensive training covering SOC operations, SIEM technologies, incident response procedures, and security fundamentals. Gained practical knowledge in threat detection, log analysis, and security monitoring best practices.",
    tags: ["SOC Operations", "SIEM", "Incident Response", "Security Fundamentals"],
    color: "from-primary/20 to-primary/5",
  },
];

const careerObjective = `Seeking an entry-level SOC Analyst role to contribute to threat detection, security monitoring, and incident response while continuously enhancing my cybersecurity skills. I aim to leverage my technical knowledge and hands-on experience to protect organizational assets and respond effectively to security incidents.`;

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-widest mb-2">
            // 04. CERTIFICATIONS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Certifications
          </h2>
          <div className="section-divider w-24 mt-3" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Cert card */}
          <div>
            {certs.map((cert) => (
              <div
                key={cert.title}
                className="p-6 rounded-lg cyber-border card-gradient hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-mono text-primary/70 mb-1">
                      {cert.issuer.toUpperCase()}
                    </p>
                    <h3 className="text-foreground font-bold text-base mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {cert.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.tags.map((tag) => (
                        <span key={tag} className="tag-cyber">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career objective */}
          <div className="p-6 rounded-lg cyber-border card-gradient">
            <p className="text-xs font-mono text-primary tracking-wider mb-4">
              CAREER OBJECTIVE
            </p>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/40 rounded" />
              <p className="pl-4 text-muted-foreground text-sm leading-relaxed">
                {careerObjective}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
