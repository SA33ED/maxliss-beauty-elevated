import heroBg from "@/assets/hero-bg.jpg";
import screenshotHero from "@/assets/screenshot-hero.jpeg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
      </div>

      <div className="container relative mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block rounded-full border border-primary-foreground/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80 mb-6">
              Professional Hair Protein Treatment
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground mb-6">
              Professional protein care,{" "}
              <span className="italic">tailored to you</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg mb-8 leading-relaxed">
              Book certified protein hair experts to your home or find the perfect salon — all through one elegant app. Track your expert in real time and enjoy salon-quality results.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#download"
                className="rounded-full bg-primary-foreground px-8 py-3.5 font-semibold text-primary hover:shadow-lg hover:scale-105 transition-all"
              >
                Download the App
              </a>
              <a
                href="#for-experts"
                className="rounded-full border-2 border-primary-foreground/40 px-8 py-3.5 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all"
              >
                Become an Expert
              </a>
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-[280px] sm:w-[320px] float-animation">
                <div className="phone-mockup rounded-[2.5rem] border-[6px] border-foreground/20 shadow-2xl">
                  <img
                    src={screenshotHero}
                    alt="Maxliss App - Before and after hair transformation"
                    className="w-full rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
