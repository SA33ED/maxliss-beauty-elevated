import ScrollReveal from "./ScrollReveal";
import screenshotTracking from "@/assets/screenshot-tracking.jpeg";
import screenshotSession from "@/assets/screenshot-session.jpeg";
import { ShieldCheck, Eye, GraduationCap, Star } from "lucide-react";

const safetyPoints = [
  {
    icon: Eye,
    title: "Live Expert Tracking",
    description: "Track your expert in real-time from the moment she leaves until she arrives at your door.",
  },
  {
    icon: GraduationCap,
    title: "Professional Training",
    description: "Every expert completes our rigorous training program supervised by certified trainers.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "Sessions are monitored through our in-app system to ensure consistent quality delivery.",
  },
  {
    icon: Star,
    title: "Verified Reviews",
    description: "Every review comes from a real, completed session — building genuine trust.",
  },
];

const SafetySection = () => {
  return (
    <section id="safety" className="py-24 lg:py-32 section-pink">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Screenshots */}
          <ScrollReveal>
            <div className="flex justify-center gap-4">
              <div className="w-[200px] phone-mockup border-[4px] border-foreground/10 float-animation">
                <img src={screenshotTracking} alt="Real-time expert tracking" className="w-full rounded-[2rem]" />
              </div>
              <div className="w-[200px] phone-mockup border-[4px] border-foreground/10 float-animation-delayed mt-12">
                <img src={screenshotSession} alt="Session control" className="w-full rounded-[2rem]" />
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
                Safety & Trust
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Your safety is our{" "}
                <span className="text-gradient">top priority</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                We built Maxliss with safety at its core — from expert verification to real-time tracking and in-session controls.
              </p>
            </ScrollReveal>

            <div className="space-y-6">
              {safetyPoints.map((point, i) => (
                <ScrollReveal key={point.title} delay={i * 100}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <point.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{point.title}</h4>
                      <p className="text-muted-foreground text-sm">{point.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
