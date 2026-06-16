import Hero from "../../components/Hero/Hero";
import AboutSection from "../../components/AboutSection/AboutSection";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import OurService from "../../components/OurService/OurService"
import FAQ from "../../components/FAQ/Faq";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection/>
      <WhyChooseUs/>
      <OurService/>
      <FAQ/>
    </>
  );
};

export default Home;