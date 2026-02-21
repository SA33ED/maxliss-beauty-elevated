import ScrollReveal from "./ScrollReveal";
import screenshotCommunity from "@/assets/screenshot-community.jpeg";

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
              Community
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Real results shared by{" "}
              <span className="text-gradient">real women</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our built-in community showcases authentic before & after transformations from certified experts. See the results for yourself before you book.
            </p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <span className="block font-display text-3xl font-bold text-primary">5K+</span>
                <span className="text-sm text-muted-foreground">Transformations</span>
              </div>
              <div>
                <span className="block font-display text-3xl font-bold text-primary">4.9</span>
                <span className="text-sm text-muted-foreground">Avg. Rating</span>
              </div>
              <div>
                <span className="block font-display text-3xl font-bold text-primary">98%</span>
                <span className="text-sm text-muted-foreground">Satisfaction</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Screenshot */}
          <ScrollReveal delay={200}>
            <div className="flex justify-center">
              <div className="w-[280px] phone-mockup border-[4px] border-foreground/10 float-animation">
                <img
                  src={screenshotCommunity}
                  alt="Maxliss community before and after results"
                  className="w-full rounded-[2rem]"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
