import ScrollReveal from "./ScrollReveal";
import { ShieldCheck, MapPin, Users, CreditCard, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Experts",
    description: "Every expert is trained and certified by Maxliss to ensure top-quality protein treatments.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your expert's location live on the map for complete transparency and safety.",
  },
  {
    icon: Users,
    title: "Community Results",
    description: "Browse real before & after photos shared by our community of satisfied clients.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Pay securely through the app with transparent pricing — no hidden fees, ever.",
  },
  {
    icon: Headphones,
    title: "Live Support",
    description: "Get instant help from our support team during or after your session, anytime.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description: "Every session is monitored and rated to maintain the highest quality standards.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
              Features
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything you need for{" "}
              <span className="text-gradient">perfect hair</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Maxliss combines convenience, safety, and quality into one seamless experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 80}>
              <div className="group rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
