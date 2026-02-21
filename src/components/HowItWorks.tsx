import ScrollReveal from "./ScrollReveal";
import screenshotHairType from "@/assets/screenshot-hair-type.jpeg";
import screenshotBooking from "@/assets/screenshot-booking.jpeg";
import screenshotTracking from "@/assets/screenshot-tracking.jpeg";
import { Search, CalendarCheck, MapPin, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Service",
    description: "Answer a few questions about your hair type and get matched with the perfect protein treatment.",
  },
  {
    icon: CalendarCheck,
    title: "Book Expert or Salon",
    description: "Pick a certified expert to visit your home or book an appointment at a partnered salon near you.",
  },
  {
    icon: MapPin,
    title: "Track in Real Time",
    description: "Follow your expert's journey on the map and know exactly when she'll arrive at your door.",
  },
  {
    icon: Sparkles,
    title: "Enjoy the Results",
    description: "Sit back and enjoy a professional protein treatment with visible, lasting results.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 section-pink">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
              How It Works
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Beautiful hair in four simple steps
            </h2>
            <p className="text-muted-foreground text-lg">
              From booking to transformation — everything happens seamlessly through the Maxliss app.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 100}>
              <div className="relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <step.icon size={24} />
                </div>
                <span className="absolute top-4 right-4 text-5xl font-display font-bold text-primary/10">
                  {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Screenshots showcase */}
        <ScrollReveal>
          <div className="flex justify-center gap-6 flex-wrap">
            {[screenshotHairType, screenshotBooking, screenshotTracking].map((src, i) => (
              <div
                key={i}
                className="w-[200px] sm:w-[220px] phone-mockup border-[4px] border-foreground/10"
                style={{ transform: `rotate(${(i - 1) * 3}deg)` }}
              >
                <img src={src} alt="Maxliss App Screenshot" className="w-full rounded-[2rem]" />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HowItWorks;
