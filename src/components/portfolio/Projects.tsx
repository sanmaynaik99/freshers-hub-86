import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Silent Data Exfiltration Detection",
    desc: "Monitored network traffic to identify covert data exfiltration techniques including DNS tunneling and abnormal outbound connections. Used Wireshark for packet inspection and SIEM for log correlation.",
    outcome: "Practical understanding of real-world data exfiltration attacks",
    tags: ["Wireshark", "SIEM", "DNS Analysis", "Packet Inspection"],
  },
  {
    title: "Network Traffic Analysis Using Wireshark",
    desc: "Captured and analyzed live network packets, applied protocol filters for DNS, TCP, UDP, and HTTP traffic. Identified suspicious communication patterns through detailed packet-level investigation.",
    outcome: "Improved packet-level investigation skills",
    tags: ["Wireshark", "TCP/IP", "Protocol Analysis", "Traffic Monitoring"],
  },
  {
    title: "SIEM Log Monitoring & Alert Analysis",
    desc: "Analyzed security logs using Splunk, created dashboards and monitored security alerts. Investigated suspicious login attempts and anomalous events to identify potential security incidents.",
    outcome: "Hands-on SOC monitoring experience",
    tags: ["Splunk", "Log Analysis", "Dashboard Creation", "Alert Management"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-widest mb-2">
            // 03. PROJECTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Projects
          </h2>
          <div className="section-divider w-24 mt-3" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="flex flex-col p-6 rounded-lg cyber-border card-gradient group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Index */}
              <p className="text-primary/40 font-mono text-xs mb-3">
                0{i + 1}.
              </p>

              {/* Title */}
              <h3 className="text-foreground font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                {project.desc}
              </p>

              {/* Outcome */}
              <div className="mb-4 p-3 rounded bg-primary/5 border border-primary/15">
                <p className="text-xs font-mono text-primary/70 mb-0.5">
                  OUTCOME
                </p>
                <p className="text-xs text-foreground/80">{project.outcome}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-cyber text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
