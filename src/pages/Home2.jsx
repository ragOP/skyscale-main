import HeroWithNavbar from '../components/home2/HeroWithNavbar';
import ExperienceSection from '../components/home2/ExperienceSection';
import VideoSection from '../components/home2/VideoSection';
import FeaturesSection from '../components/home2/FeaturesSection';
import BenefitsSection from '../components/home2/BenefitsSection';
import NewsletterSection from '../components/home2/NewsletterSection';
import OurServices from '../components/home2/OurServices';
import TestimonialsSection from '../components/home2/TestimonialsSection';
import FAQSection from '../components/home2/FAQSection';

const Home2 = () => {
  return (
    <>
      <HeroWithNavbar />
      <VideoSection />
      <OurServices />
      {/* <ExperienceSection /> */}
      <TestimonialsSection />
      <FeaturesSection />
      <FAQSection />
      {/* <BenefitsSection /> */}
      {/* <NewsletterSection /> */}
    </>
  );
};

export default Home2;