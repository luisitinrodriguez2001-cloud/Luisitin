import Navbar from "@/components/Navbar";
import ResumeSummary from "@/sections/ResumeSummary";
import Education from "@/sections/Education";
import Research from "@/sections/Research";
import Experience from "@/sections/Experience";
import Achievements from "@/sections/Achievements";
import Leadership from "@/sections/Leadership";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      {/* Hero banner would appear here */}
      <ResumeSummary />
      <Education />
      <Research />
      <Experience />
      <Achievements />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}
