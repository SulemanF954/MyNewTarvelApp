import Hero from "./components/HeroSection";
import Feature from "./components/Feature";
import GetApp from "./components/GetApp";
import Guide from "./components/Guide"; 
import Camp from "./components/Camp"; 

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Feature />
      <GetApp />
    </>
  );
}