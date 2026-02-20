import { Eye, AlertTriangle, Cpu } from "lucide-react";

const highlights = [
  {
    icon: Eye,
    title: "SOC Operations",
    desc: "Security monitoring and incident detection",
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    desc: "Log analysis and network traffic investigation",
  },
  {
    icon: Cpu,
    title: "Technical Skills",
    desc: "SIEM, Wireshark, IDS/IPS, TCP/IP",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-primary font-mono text-sm tracking-widest mb-2">
            // 01. ABOUT
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            About Me
          </h2>
          <div className="section-divider w-24 mt-3" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a{" "}
              <span className="text-primary font-medium">
                Bachelor of Engineering (BE)
              </span>{" "}
              graduate in Information Science with strong fundamentals in
              cybersecurity and networking. My passion lies in SOC operations,
              log analysis, and network traffic monitoring.
            </p>
            <p>
              With hands-on experience using{" "}
              <span className="text-foreground font-medium">
                Splunk dashboards
              </span>{" "}
              and{" "}
              <span className="text-foreground font-medium">
                Wireshark packet analysis
              </span>
              , I am focused on building a career in threat detection and
              incident response. I bring a proactive approach to identifying
              security threats and analyzing complex network patterns.
            </p>

            {/* Education card */}
            <div className="mt-6 p-4 rounded-lg cyber-border card-gradient">
              <p className="text-xs font-mono text-primary mb-1 tracking-wider">
                EDUCATION
              </p>
              <p className="text-foreground font-semibold">
                Bachelor of Engineering (BE)
              </p>
              <p className="text-muted-foreground text-sm">
                Information Science
              </p>
              <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                Comprehensive coursework covering computer networks,
                cybersecurity fundamentals, system security, and network
                protocols.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-lg cyber-border card-gradient group hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
