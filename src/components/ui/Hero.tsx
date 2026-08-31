import Reveal from "./Reveal";

const Hero = () => {
  return (
    <section className="flex flex-col items-center text-center mt-4 md:mt-8 mb-8 max-w-3xl mx-auto">

      {/* Badge */}
      <Reveal delay={0.15}>
        <div className="inline-flex items-center text-xs font-medium text-blue-200 bg-blue-900/30 px-3 py-1 rounded-full mb-6 border border-blue-800/50">
         Your AI Career Copilot
        </div>
      </Reveal>

      {/* Heading */}
      <Reveal delay={1.35}>
        <h1 className="text-4xl md:text-6xl font-normal tracking-tight mb-6 leading-[1.1]">
         Build the career 
          <br className="hidden md:block" />
          you're ready for.
        </h1>
      </Reveal>

      {/* Description */}
      <Reveal delay={0.75}>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
         Learn the right skills, discover better opportunities, build tailored applications, and prepare for interviews with your AI career copilot.
        </p>
      </Reveal>

      {/* CTA Buttons */}
      <Reveal delay={0.95}>
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 w-full sm:w-auto">

          <a
            href="#start"
  className="w-full sm:w-auto bg-brand-orange text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-brand-orange transition-colors duration-300 flex items-center justify-center gap-2"
          >
            Start growing

            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </a>

          <a
            href="#features"
            className="w-full sm:w-auto glass-btn text-white px-6 py-3 rounded-full font-medium flex items-center justify-center"
          >
            Explore features
          </a>

        </div>
      </Reveal>

      {/* Social Proof */}
      <Reveal delay={0.75}>
        <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">

          {/* Google Icon */}
          <svg
            className="w-4 h-4 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />

            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />

            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />

            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>

          {/* Stars */}
          <div className="flex text-white">
            {Array.from({ length: 5 }).map((_, index) => (
              <svg
                key={index}
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          <span className="border-l border-gray-600 pl-2 ml-1">
            Innovative AI solution 2025 by{" "}
            <span className="font-bold text-white">
              Groth.
            </span>
          </span>

        </div>
      </Reveal>
    </section>
  );
};

export default Hero;