import HeroWithNavbar from '../components/home/HeroWithNavbar';
import ExperienceSection from '../components/home/ExperienceSection';
import VideoSection from '../components/home/VideoSection';
import FeaturesSection from '../components/home/FeaturesSection';
import BenefitsSection from '../components/home/BenefitsSection';
import NewsletterSection from '../components/home/NewsletterSection';
import OurServices from '../components/home/OurServices';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FAQSection from '../components/home/FAQSection';

const Home = () => {
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

export default Home;
