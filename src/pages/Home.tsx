import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileText,
  Flag,
  GraduationCap,
  Mic,
  Sparkles,
  Star,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type * as React from "react";
import heroInterviewImg from "@/assets/hero-interview.jpg";
import heroJobsImg from "@/assets/hero-jobs.jpg";
import heroLearnImg from "@/assets/hero-learn.jpg";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

const PAGE_TITLE = "GROTH AI — Build the Career You're Ready For";
const PAGE_DESCRIPTION =
  "GROTH is your AI career copilot: learn the right skills, discover better opportunities, build tailored applications, and ace interviews.";

const PATHWAY = [
  { icon: GraduationCap, label: "Learn" },
  { icon: TrendingUp, label: "Grow" },
  { icon: Briefcase, label: "Jobs" },
  { icon: FileText, label: "Apply" },
  { icon: Mic, label: "Interview" },
  { icon: Flag, label: "Advance" },
];

const STATS = [
  { value: "3x", label: "More interview callbacks" },
  { value: "40h", label: "Saved per job hunt" },
  { value: "92%", label: "Success rate on targeted roles" },
];

const TESTIMONIALS = [
  {
    name: "Amara Osei",
    role: "Product Manager · Lagos",
    initials: "AO",
    rating: 5,
    quote:
      "GROTH mapped my exact skill gaps for a Lead PM role and curated a 6-week path. I walked into interviews knowing precisely what to say.",
  },
  {
    name: "Daniel Richter",
    role: "Data Analyst · Berlin",
    initials: "DR",
    rating: 5,
    quote:
      "The mock interviews were uncannily close to the real thing. Three weeks of practice, one application, one offer.",
  },
  {
    name: "Priya Nair",
    role: "Frontend Engineer · Bangalore",
    initials: "PN",
    rating: 4,
    quote:
      "Resume AI rewrote my generic CV into a targeted application that actually got read. Callback rate tripled overnight.",
  },
  {
    name: "Sofia Alvarez",
    role: "Marketing Lead · Mexico City",
    initials: "SA",
    rating: 5,
    quote:
      "I stopped guessing which courses mattered. GROTH tracked market demand and told me exactly what to learn next.",
  },
];

const FAQS = [
  {
    q: "How does GROTH personalize my learning path?",
    a: "GROTH analyzes your target roles against live market data, identifies your specific skill gaps, and curates a precise sequence of resources.",
    link: { href: "#learn", label: "Explore Skill Building" },
  },
  {
    q: "What is the GROTH Pathway?",
    a: "It's a unified journey from learning to landing: Learn, Grow, discover Jobs, Apply, Interview, and Advance — each stage feeding the next.",
    link: { href: "#pathway", label: "See the full pathway" },
  },
  {
    q: "How does Resume AI improve my applications?",
    a: "It tailors your experience to each job description in seconds, matching keywords and reframing achievements for the role you're targeting.",
    link: { href: "#apply", label: "See how Resume AI works" },
  },
  {
    q: "Are the mock interviews realistic?",
    a: "Yes — our vocal AI is trained on real industry questions and simulates the exact pressure and follow-ups you'll face in the room.",
    link: { href: "#apply", label: "Try a practice round" },
  },
  {
    q: "How much does GROTH cost?",
    a: "You can start with a free career analysis today. Paid plans unlock unlimited applications, interview simulations, and advanced analytics.",
    link: { href: "#top", label: "Start growing — it's free" },
  },
];

function Index() {
  useReveal();

  // Set document head metadata on mount (replaces TanStack Router's `head`).
  useEffect(() => {
    document.title = PAGE_TITLE;

    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", PAGE_DESCRIPTION);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeatureMarquee />
        <PathwaySection />
        <LearnSection />
        <ApplySection />
        <TestimonialsSection />
        <StatsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Ambient background washes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
        <div className="absolute right-[-120px] top-40 h-[360px] w-[360px] rounded-full bg-secondary-container/15 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface-lowest px-4 py-1.5 text-xs font-semibold tracking-wide text-primary shadow-elegant">
            <Sparkles className="size-3.5" aria-hidden="true" />
            Your AI Career Copilot
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Build the career <span className="gradient-text">you're ready for.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant">
            Learn the right skills, discover better opportunities, build tailored applications,
            and prepare for interviews with your AI career copilot.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button variant="brand" size="lg" className="gap-2 rounded-xl">
              Start Growing
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl">
              Explore GROTH
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Join <span className="font-semibold text-foreground">50,000+ professionals</span>{" "}
            advancing today.
          </p>
        </div>

        <div className="reveal" style={{ "--reveal-delay": "150ms" } as React.CSSProperties}>
          <HeroShowcase />
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Hero showcase ------------------------------- */

const SHOWCASE = [
  {
    src: heroLearnImg,
    icon: GraduationCap,
    title: "Learn the right skills",
    caption: "AI-curated learning paths close your exact skill gaps.",
  },
  {
    src: heroJobsImg,
    icon: Briefcase,
    title: "Discover better opportunities",
    caption: "Live market matching surfaces roles you're ready to win.",
  },
  {
    src: heroInterviewImg,
    icon: Mic,
    title: "Ace every interview",
    caption: "Vocal AI mock interviews rehearse the real pressure.",
  },
];

function HeroShowcase() {
  const [index, setIndex] = useState(0);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reduceMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onChange);

    const timer = window.setInterval(() => {
      if (!reduceMotionRef.current && !document.hidden) {
        setIndex((i) => (i + 1) % SHOWCASE.length);
      }
    }, 4500);

    return () => {
      mq.removeEventListener("change", onChange);
      window.clearInterval(timer);
    };
  }, []);

  const active = SHOWCASE[index];

  return (
    <div className="relative mx-auto max-w-md animate-float-soft">
      {/* Ambient glows */}
      <div aria-hidden="true" className="pointer-events-none absolute -inset-8">
        <div className="absolute -top-6 left-1/4 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-6 right-1/4 h-40 w-40 rounded-full bg-secondary-container/20 blur-3xl" />
      </div>

      <div className="glass-panel relative overflow-hidden rounded-3xl">
        <div className="relative aspect-square">
          {SHOWCASE.map((slide, i) => (
            <img
              key={slide.title}
              src={slide.src}
              alt={slide.title}
              width={1024}
              height={1024}
              loading={i === 0 ? "eager" : "lazy"}
              aria-hidden={i !== index}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background/90 to-transparent"
          />
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-1.5 font-display text-sm font-bold">
              <active.icon className="size-4 text-primary" aria-hidden="true" />
              {active.title}
            </p>
            <p className="mt-1 text-xs leading-snug text-on-surface-variant">{active.caption}</p>
          </div>
          <div className="flex shrink-0 gap-1.5" role="tablist" aria-label="Showcase slides">
            {SHOWCASE.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show ${slide.title}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                  i === index ? "w-5 bg-primary" : "w-1.5 bg-foreground/25 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Feature marquee ----------------------------- */

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

function FeatureMarquee() {
  return (
    <section aria-label="Features" className="marquee-paused overflow-hidden border-b border-border/60 py-6">
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

/* --------------------------------- Pathway --------------------------------- */

function PathwaySection() {
  return (
    <section id="pathway" className="border-y border-border/60 bg-surface-low py-20">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            The GROTH Pathway
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A unified ecosystem designed to accelerate your professional journey.
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {PATHWAY.map((step, i) => (
            <li
              key={step.label}
              className="reveal group relative flex flex-col items-center gap-3 rounded-2xl border border-border/60 bg-surface-lowest p-6 text-center shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-[image:var(--gradient-brand)] group-hover:text-primary-foreground">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-sm font-bold">{step.label}</span>
              <span className="absolute right-3 top-3 text-[10px] font-bold text-muted-foreground/60">
                0{i + 1}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------- Learn ---------------------------------- */

function LearnSection() {
  return (
    <section id="learn" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="reveal order-2 lg:order-1">
          <div className="glass-panel rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-bold">Suggested Path</p>
                <p className="text-xs text-muted-foreground">Python for Data</p>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {["Data wrangling with pandas", "SQL for analysts", "Storytelling with dashboards"].map(
                (item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-border/60 bg-surface-lowest px-4 py-3"
                  >
                    <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                    <CheckCircle2
                      className={`ml-auto size-4 ${i === 0 ? "text-primary" : "text-border"}`}
                      aria-hidden="true"
                    />
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>

        <div className="reveal order-1 lg:order-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Skill Building
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Learn what matters
          </h2>
          <p className="mt-4 max-w-lg text-lg leading-relaxed text-on-surface-variant">
            Don't waste time on generic courses. GROTH analyzes your target roles and curates a
            precise learning path to bridge your specific skill gaps.
          </p>
          <ul className="mt-8 space-y-4">
            {["Market-driven skill tracking", "AI-curated resource lists"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Apply ---------------------------------- */

function ApplySection() {
  return (
    <section id="apply" className="border-y border-border/60 bg-surface-low py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Application Mastery
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Apply &amp; interview with confidence
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-on-surface-variant">
            Transform your generic resume into a highly targeted application. Once you land the
            interview, our AI simulates the exact pressure and questions you'll face.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article
            className="reveal group rounded-2xl border border-border/60 bg-surface-lowest p-8 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-[image:var(--gradient-brand)] group-hover:text-primary-foreground">
              <FileText className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">Resume AI</h3>
            <p className="mt-2 leading-relaxed text-on-surface-variant">
              Tailors your experience to exact job descriptions in seconds.
            </p>
            <a
              href="#apply"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-secondary-container"
            >
              See how Resume AI works
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </article>

          <article
            className="reveal group rounded-2xl border border-border/60 bg-surface-lowest p-8 shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-secondary-container/15 text-secondary-container transition-colors group-hover:bg-[image:var(--gradient-brand)] group-hover:text-primary-foreground">
              <Mic className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold">Mock Interviews</h3>
            <p className="mt-2 leading-relaxed text-on-surface-variant">
              Practice with a vocal AI trained on real industry questions.
            </p>
            <a
              href="#apply"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-secondary-container"
            >
              Try a practice round
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------- */

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating
              ? "fill-secondary-container text-secondary-container"
              : "text-border"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotionRef = useRef(false);

  const goTo = useCallback((i: number) => {
    setIndex(((i % TESTIMONIALS.length) + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-advance every 6s — skipped entirely for reduced-motion users
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mq.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reduceMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onChange);

    const timer = window.setInterval(() => {
      if (!reduceMotionRef.current && !document.hidden) {
        setIndex((i) => (i + 1) % TESTIMONIALS.length);
      }
    }, 6000);

    return () => {
      mq.removeEventListener("change", onChange);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Loved Worldwide
          </p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Careers transformed, from Lagos to Berlin
          </h2>
        </div>

        <div
          className="reveal relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          data-paused={paused || undefined}
        >
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.name}
                  className="w-full shrink-0 px-1"
                  aria-hidden={TESTIMONIALS[index] !== t}
                >
                  <blockquote className="glass-panel rounded-3xl p-8 sm:p-10">
                    <StarRating rating={t.rating} />
                    <p className="mt-5 text-lg leading-relaxed text-on-surface-variant sm:text-xl">
                      “{t.quote}”
                    </p>
                    <figcaption className="mt-7 flex items-center gap-4">
                      <span
                        className="flex size-12 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-primary-foreground"
                        aria-hidden="true"
                      >
                        {t.initials}
                      </span>
                      <span>
                        <span className="block font-display text-sm font-bold">{t.name}</span>
                        <span className="block text-sm text-muted-foreground">{t.role}</span>
                      </span>
                    </figcaption>
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous testimonial"
              className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-surface-lowest text-muted-foreground shadow-elegant transition-colors hover:text-primary"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial from ${t.name}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next testimonial"
              className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-surface-lowest text-muted-foreground shadow-elegant transition-colors hover:text-primary"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------- FAQ ----------------------------------- */

function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border/60 bg-surface-low py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="reveal mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border/60 bg-surface-lowest shadow-elegant"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-bold transition-colors hover:text-primary"
                  >
                    {item.q}
                    <ChevronDown
                      className={`size-5 shrink-0 text-primary transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="leading-relaxed text-on-surface-variant">{item.a}</p>
                      <a
                        href={item.link.href}
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-secondary-container"
                      >
                        {item.link.label}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Stats ---------------------------------- */

function StatsSection() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <dl className="grid gap-10 text-center sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal"
              style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}
            >
              <dt className="order-2 mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </dt>
              <dd className="order-1 flex flex-col font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
                <span className="gradient-text">{stat.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ----------------------------------- CTA ----------------------------------- */

function CtaSection() {
  return (
    <section className="px-4 pb-24 sm:px-6 lg:px-8">
      <div className="reveal ai-border-gradient relative mx-auto max-w-[1280px] overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--secondary-container)_35%,transparent),transparent_55%)]"
        />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Your next role is closer than you think.
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/85">
            Start with a free career analysis and let GROTH chart your fastest path forward.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              className="rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Start Growing — it's free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Footer ---------------------------------- */

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface-low">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-3.5" aria-hidden="true" />
          </span>
          <span className="font-display text-base font-extrabold tracking-tight">GROTH</span>
        </a>

        <nav aria-label="Footer" className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#top" className="transition-colors hover:text-primary">
            Privacy Policy
          </a>
          <a href="#top" className="transition-colors hover:text-primary">
            Terms of Service
          </a>
          <a href="#top" className="transition-colors hover:text-primary">
            Contact
          </a>
        </nav>

        <p className="text-sm text-muted-foreground">© 2026 GROTH. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Index;
