import Reveal from "./Reveal";
import WomanImg from "@/assets/WomanImg.jpg";

const WorkflowCard = () => {
  return (
    <Reveal delay={0.6} className="lg:col-span-2">
      <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-start p-10">
        <img
          alt="Professional using app"
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={WomanImg}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />

        <div className="relative z-20 max-w-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
            Unlock clear, shared workflows.
          </h2>

          <p className="text-gray-200">
            Bring teams, tools, and updates into one connected workspace.
          </p>
        </div>
      </div>
    </Reveal>
  );
};

const TestimonialCard = () => {
  return (
    <Reveal delay={0.35}>
      <div className="rounded-3xl p-8 flex flex-col justify-between bg-gradient-to-br from-[#4b6d8c] to-[#36516a] relative overflow-hidden min-h-[400px]">
        <div className="text-[#f97316] text-6xl leading-none font-serif opacity-80 absolute top-8 left-8">
          “
        </div>

        <div className="relative z-10 mt-12">
          <p className="text-3xl md:text-2xl font-medium leading-tight mb-10">
            GROTH replaced three tools and finally gave our teams a shared understanding of what's
            happening.
          </p>

          <div>
            <p className="font-bold text-white">Emma Clark</p>

            <p className="text-sm text-gray-300">Head of Operations, Klea</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const FeatureCards = () => {
  return (
    <section id="features" className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
      <WorkflowCard />
      <TestimonialCard />
    </section>
  );
};

export default FeatureCards;
