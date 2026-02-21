import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import SafetySection from "@/components/SafetySection";
import CommunitySection from "@/components/CommunitySection";
import ForExpertsSection from "@/components/ForExpertsSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import Footer from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <SafetySection />
      <CommunitySection />
      <ForExpertsSection />
      <AppDownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
