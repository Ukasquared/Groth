
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  start: boolean;
  duration?: number;
}

const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  start,
  duration = 1500,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;

    const frameRate = 30;
    const totalFrames = duration / frameRate;
    const increment = target / totalFrames;

    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(current));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [start, target, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
