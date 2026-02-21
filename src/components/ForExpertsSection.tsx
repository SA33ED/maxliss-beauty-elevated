import ScrollReveal from "./ScrollReveal";
import { DollarSign, BookOpen, Clock, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Flexible Income",
    description: "Set your own schedule and earn on your terms. Our transparent revenue-sharing model ensures fair compensation.",
  },
  {
    icon: BookOpen,
    title: "Training & Support",
    description: "Get access to professional training programs and ongoing support from certified Maxliss trainers.",
  },
  {
    icon: Clock,
    title: "Easy Scheduling",
    description: "Manage bookings, sessions, and payments from one intuitive app — designed for beauty professionals.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Reach more clients, build your reputation with verified reviews, and expand your beauty career.",
  },
];

const ForExpertsSection = () => {
  return (
    <section id="for-experts" className="py-24 lg:py-32 section-pink">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
              For Experts & Salons
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Join the Maxliss network
            </h2>
            <p className="text-muted-foreground text-lg">
              Whether you're an independent expert or a salon, Maxliss gives you the tools to grow and succeed.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <div className="flex gap-5 bg-card rounded-2xl p-8 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <b.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <a
              href="#download"
              className="inline-block rounded-full bg-primary px-10 py-4 font-semibold text-primary-foreground hover:opacity-90 hover:scale-105 transition-all shadow-lg"
            >
              Apply to Become an Expert
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ForExpertsSection;
