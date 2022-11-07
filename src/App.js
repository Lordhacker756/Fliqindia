import About from "./components/about/About";
import Associate from "./components/associate/Associate";
// import Discover from "./components/discover/Discover";
import Features from "./components/features/Features";
import Divider from "./components/helpers/Divider";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Divider width={"80vw"} />
      <Associate />
      <Features />
      {/* <Discover /> */}
    </>
  );
}

export default App;
