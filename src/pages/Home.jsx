import Hero from "../components/home/Hero";
import Navbar from "../components/home/Navbar";
import OurServices from "../components/home/OurProducts";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FAQSection from "../components/home/FAQSection";
import AboutUs from "../components/home/AboutUs";
import Footer from "../components/common/Footer";

const Home = () => {
    return (
        <div className="flex flex-col">
            <Navbar />
            <Hero />
            <OurServices/>
            <WhyChooseUs />
            <FAQSection />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default Home;