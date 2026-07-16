import Hero from "../components/intro/Hero/Hero";
import Features from "../components/intro/Features/Features";
import HowItWorks from "../components/intro/HowItWorks/HowItWorks";
import SupportedFruits from "../components/intro/SupportedFruits/SupportedFruits";
import CTA from "../components/intro/CTA/CTA";

function Intro() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <SupportedFruits />
      <CTA />
    </>
  );
}

export default Intro;