import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import LiquidEther from './components/background/LiquidEther';

const App = () => (
  <>
<div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
  <LiquidEther
    colors={[ '#b84900', '#b84900', '#006EB8' ]}
    mouseForce={20}
    cursorSize={100}
    isViscous={false}
    viscous={30}
    iterationsViscous={32}
    iterationsPoisson={32}
    resolution={0.5}
    isBounce={false}
    autoDemo={true}
    autoSpeed={0.5}
    autoIntensity={2.2}
    takeoverDuration={0.25}
    autoResumeDelay={3000}
    autoRampDuration={0.6}
  />
</div>
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Navbar />
      <div style={{ paddingTop: "1rem" }}>
        <Hero />
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <TechStack />
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <FeatureCards />
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <ShowcaseSection />
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <Experience />
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <Contact />
      </div>
      <Footer />
    </div>
  </>
);

export default App;
