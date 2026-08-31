import { useEffect, useRef, useState } from "react";
import FeatureCard, { type 
  FeatureCardData,
} from "@/components/ui/detailcard";

const DetailCards = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const featureCards: FeatureCardData[] = [
    {
      label: "Time loss",
      value: 80,
      prefix: ">",
      suffix: "%",
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      description: (
        <>
          <strong className="font-medium text-gray-900">
            80%+ of teams
          </strong>{" "}
          use multiple tools for docs, tasks, and communication — slowing the
          work overall.
        </>
      ),
    },

    {
      label: "Manual effort",
      value: 30,
      suffix: "%",
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      description: (
        <>
          Teams spend{" "}
          <strong className="font-medium text-gray-900">
            around 30% of their time
          </strong>{" "}
          on repetitive updates, handoffs, and moving work between tools.
        </>
      ),
    },

    {
      label: "Tool overload",
      value: 12,
      suffix: "+",
      icon: (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      ),
      description: (
        <>
          The average mid-sized team juggles{" "}
          <strong className="font-medium text-gray-900">
            over 12 tools
          </strong>{" "}
          for tasks, docs, and communication.
        </>
      ),
    },
  ];

  /*
   * Reveal the section when it enters the viewport.
   * This happens only once.
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="workflows-section"
      className="w-full overflow-hidden bg-[#faf8ff] px-4 py-20 sm:px-6 md:px-12 md:py-28"
    >
      {/* =========================
          SECTION HEADER
          ========================= */}

      <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
        <h2
          className={`
            mb-5
            text-3xl
            font-semibold
            tracking-tight
            text-gray-950
            transition-all
            duration-700
            sm:text-4xl
            md:text-5xl
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
        >
          A unified ecosystem designed to accelerate your professional journey.
        </h2>

        <p
          className={`
            text-base
            leading-relaxed
            text-gray-600
            transition-all
            duration-700
            sm:text-lg
            md:text-xl
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
          style={{
            transitionDelay: "100ms",
          }}
        >
          Most teams aren't struggling because they lack talent — they're
          struggling because they do not understand the value of a unified approach, that easily takes you from where you are to where you want to be.
        </p>
      </div>

      {/* =========================
          CARDS
          ========================= */}

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-3 items-start gap-3 sm:gap-4 md:gap-6 lg:gap-10">
          {/* CARD 1 */}
          <div
            className="relative z-10"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(30px)",
              transition:
                "opacity 700ms ease-out, transform 700ms ease-out",
              transitionDelay: "200ms",
            }}
          >
            <FeatureCard
              card={featureCards[0]}
              index={0}
              visible={visible}
            />
          </div>

          {/* CARD 2 - SLIGHTLY LOWER */}
          <div
            className="relative z-20 translate-y-6 sm:translate-y-8 md:translate-y-10"
            style={{
              opacity: visible ? 1 : 0,
              transition:
                "opacity 700ms ease-out, transform 700ms ease-out",
              transitionDelay: "350ms",
            }}
          >
            <FeatureCard
              card={featureCards[1]}
              index={1}
              visible={visible}
            />
          </div>

          {/* CARD 3 */}
          <div
            className="relative z-10"
            style={{
              opacity: visible ? 0.55 : 0,
              transform: visible
                ? "translateY(0)"
                : "translateY(30px)",
              transition:
                "opacity 700ms ease-out, transform 700ms ease-out",
              transitionDelay: "500ms",
            }}
          >
            <FeatureCard
              card={featureCards[2]}
              index={2}
              visible={visible}
            />
          </div>
        </div>

        {/* STATIC FADE AT THE BOTTOM */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            z-30
            h-32
            w-full
            bg-gradient-to-t
            from-[#faf8ff]
            via-[#faf8ff]/80
            to-transparent
          "
        />
      </div>
    </section>
  );
};

export default DetailCards;
