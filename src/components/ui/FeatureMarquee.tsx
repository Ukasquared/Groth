import {
  ArrowRight,
  CheckCircle2,

  FileText,
  Flag,
  GraduationCap,
  Mic,
  Sparkles,
  Star,
  TrendingUp,
  Briefcase,
} from "lucide-react"


const FEATURES = [
  { icon: GraduationCap, label: "AI Learning Paths" },
  { icon: TrendingUp, label: "Skill Gap Analysis" },
  { icon: Briefcase, label: "Curated Job Matches" },
  { icon: FileText, label: "Resume AI" },
  { icon: Mic, label: "Mock Interviews" },
  { icon: Sparkles, label: "Career Insights" },
  { icon: CheckCircle2, label: "Progress Tracking" },
  { icon: Flag, label: "Goal Milestones" },
  { icon: Star, label: "Salary Benchmarks" },
  { icon: ArrowRight, label: "Application Tailoring" },
];


export function FeatureMarquee() {
  return (
    <section
      aria-label="Features"
      className="marquee-paused overflow-hidden border-b border-border/60 py-6"
    >
      <div className="animate-marquee flex w-max gap-3 pr-3">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 gap-3" aria-hidden={copy === 1}>
            {FEATURES.map((f) => (
              <li key={`${copy}-${f.label}`}>
                <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-surface-lowest px-5 py-2.5 text-sm font-semibold shadow-elegant transition-colors hover:border-primary/40 hover:text-primary">
                  <f.icon className="size-4 text-primary" aria-hidden="true" />
                  {f.label}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
