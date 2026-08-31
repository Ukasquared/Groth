import AnimatedCounter from "@/components/ui/animatedcounter";

export interface FeatureCardData {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

interface FeatureCardProps {
  card: FeatureCardData;
  index: number;
  visible: boolean;
}

const DetailCard = ({
  card,
  index,
  visible,
}: FeatureCardProps) => {
  return (
    <article
      className={`
        flex
        min-h-[300px]
        w-full
        flex-col
        rounded-2xl
        border
        border-gray-100
        bg-white
        p-5
        shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]
        transition-all
        duration-700
        ease-out
        sm:p-6
        md:min-h-[320px]
        md:p-8
        ${
          visible
            ? "translate-y-0 scale-100"
            : "translate-y-8 scale-[0.96]"
        }
      `}
      style={{
        transitionDelay: `${index * 150}ms`,
      }}
    >
      {/* Label */}
      <div className="mb-auto inline-flex w-fit items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 px-3 py-1.5">
        <span className="text-gray-500">
          {card.icon}
        </span>

        <span className="whitespace-nowrap text-xs font-medium text-gray-600">
          {card.label}
        </span>
      </div>

      {/* Number */}
      <div className="mb-5 mt-8">
        <div className="text-4xl font-medium tracking-[-0.05em] text-gray-950 sm:text-5xl md:text-6xl">
          <AnimatedCounter
            target={card.value}
            prefix={card.prefix}
            suffix={card.suffix}
            start={visible}
          />
        </div>
      </div>

      {/* Description */}
      <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
        {card.description}
      </p>
    </article>
  );
};

export default DetailCard;

