import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import ResumeSummary from "@/sections/ResumeSummary";
import Education from "@/sections/Education";
import Research from "@/sections/Research";
import Experience from "@/sections/Experience";
import Awards from "@/sections/Awards";
import Leadership from "@/sections/Leadership";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      {/* Hero banner would appear here */}
      <section id="timeline" className="min-h-screen p-8 bg-gray-50">
        <Timeline />
      </section>
      <ResumeSummary />
      <Education />
      <Research />
      <Experience />
      <Awards />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}
