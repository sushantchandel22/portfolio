import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Articles } from "@/components/Articles";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className="custom-container">    
      <HeroSection/>
      <Skill />
      <AboutMe />
      {/* <Projects /> */}
      {/* <Articles /> */}
      <Footer />
    </main>
  );
}
