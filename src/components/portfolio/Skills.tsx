const skillCategories = [
  {
    category: "SIEM & Log Analysis",
    skills: [{ name: "Splunk", level: 75 }],
  },
  {
    category: "Network Traffic Analysis",
    skills: [{ name: "Wireshark", level: 80 }],
  },
  {
    category: "Incident Detection & Response",
    skills: [{ name: "SOC L1", level: 70 }],
  },
  {
    category: "Network Protocols",
    skills: [{ name: "TCP/IP, DNS, SMTP, HTTP/HTTPS", level: 85 }],
  },
  {
    category: "IDS/IPS",
    skills: [{ name: "Security Monitoring", level: 65 }],
  },
  {
    category: "Threat Intelligence",
    skills: [{ name: "Basic Analysis", level: 60 }],
  },
];

const techTags = [
  "Splunk", "Wireshark", "TCP/IP", "DNS", "SMTP", "HTTP/HTTPS",
  "SOC L1", "IDS/IPS", "SIEM", "Log Analysis", "Packet Inspection",
  "Incident Response", "Threat Detection", "Network Monitoring", "Linux"
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-widest mb-2">
            // 02. SKILLS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
          <div className="section-divider w-24 mt-3" />
        </div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-lg cyber-border card-gradient group hover:border-primary/40 transition-all duration-300"
            >
              <p className="text-xs font-mono text-primary tracking-wider mb-3">
                {cat.category.toUpperCase()}
              </p>
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground text-sm font-medium">
                      {skill.name}
                    </span>
                    <span className="text-primary font-mono text-xs">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full skill-bar-fill rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <div className="p-6 rounded-lg cyber-border card-gradient">
          <p className="text-xs font-mono text-primary tracking-wider mb-4">
            TECHNOLOGIES & TOOLS
          </p>
          <div className="flex flex-wrap gap-2">
            {techTags.map((tag) => (
              <span key={tag} className="tag-cyber hover:bg-primary/20 transition-colors cursor-default">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
