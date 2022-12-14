import About from "./components/about/About";
import Associate from "./components/associate/Associate";
import Awards from "./components/awards/Awards";
import Blogs from "./components/blogs/Blogs";
import CTA from "./components/cta/CTA";
import Discover from "./components/discover/Discover";
// import Discover from "./components/discover/Discover";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Divider from "./components/helpers/Divider";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Offers from "./components/offers/Offers";
import Photography from "./components/photography/Photography";
import Popular from "./components/popular/Popular";
import Success from "./components/success/Success";
import Testimonial from "./components/testimonial/Testimonial";
import Wedding from "./components/wedding/Wedding";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Divider width={"80vw"} />
      <Associate />
      <Features />
      <Discover />
      <Popular />
      <Blogs />
      <Wedding />
      <Divider width={"80vw"} />
      <Offers />
      <Divider width={"80vw"} />
      <Testimonial />
      <Divider width={"80vw"} />
      <Awards />
      <Success />
      <Photography />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
