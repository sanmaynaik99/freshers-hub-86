import { Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono text-muted-foreground">
            Sanmay Naik © {new Date().getFullYear()}
          </span>
        </div>
        <p className="text-xs font-mono text-muted-foreground/60">
          SOC Analyst | Cybersecurity Enthusiast
        </p>
      </div>
    </footer>
  );
}
