import Navbar from "@/components/SelfComponents/Navbar";
import Hero from "@/components/SelfComponents/Hero";
import FeaturedCake from "@/components/SelfComponents/FeaturedCake";
import CategoryCake from "@/components/SelfComponents/CategoryCake";
import WhyUs from "@/components/SelfComponents/WhyUs";
import Reviews from "@/components/SelfComponents/Reviews";
import Faqs from "@/components/SelfComponents/Faqs";
import Contact from "@/components/SelfComponents/Contact";
import Footer from "@/components/SelfComponents/Footer";



export default function Home(){
  return (
    <main>
      <Navbar/>
      <Hero/>
      <FeaturedCake/>
      <CategoryCake/>
      <WhyUs/>
      <Reviews/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </main>
  );
}