import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FinalCTA from "@/components/FinalCTA";


export default async function Home() {
  return (
     <main className="min-h-screen  px-4">
      <Navbar />
      <HeroSection />
      <FinalCTA />
    </main>
  );
}
