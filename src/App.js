import About from "./components/about/About";
import Associate from "./components/associate/Associate";
import Blogs from "./components/blogs/Blogs";
// import Discover from "./components/discover/Discover";
import Features from "./components/features/Features";
import Divider from "./components/helpers/Divider";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Popular from "./components/popular/Popular";

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
      <Popular />
      <Blogs />
    </>
  );
}

export default App;
