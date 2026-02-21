import ScrollReveal from "./ScrollReveal";
import logo from "@/assets/maxliss-logo.png";
import { Apple, Play } from "lucide-react";

const AppDownloadSection = () => {
  return (
    <section id="download" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden gradient-hero rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-foreground/5" />
            <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-primary-foreground/5" />

            <div className="relative z-10">
              <img src={logo} alt="Maxliss" className="w-20 h-20 mx-auto rounded-2xl mb-8 shadow-lg" />
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Get Maxliss Today
              </h2>
              <p className="text-primary-foreground/80 text-lg max-w-md mx-auto mb-10">
                Download the app and book your first professional protein hair treatment in minutes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://apps.apple.com/eg/app/maxliss/id6742495852"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-primary-foreground px-6 py-3.5 text-primary font-semibold hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Apple size={24} />
                  <div className="text-left">
                    <span className="block text-[10px] uppercase leading-tight opacity-70">Download on the</span>
                    <span className="block text-base leading-tight">App Store</span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.evyx.maxliss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-primary-foreground px-6 py-3.5 text-primary font-semibold hover:shadow-lg hover:scale-105 transition-all"
                >
                  <Play size={24} />
                  <div className="text-left">
                    <span className="block text-[10px] uppercase leading-tight opacity-70">Get it on</span>
                    <span className="block text-base leading-tight">Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AppDownloadSection;
