import Navbar from "@/components/Navbar";
import ResumeSummary from "@/sections/ResumeSummary";
import Leadership from "@/sections/Leadership";
import Timeline from "@/components/Timeline";
import references from "../../data/references.json";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      {/* Hero banner would appear here */}
      <ResumeSummary />
      <section id="about" className="min-h-screen p-8">About</section>
      <section id="education" className="min-h-screen p-8">Education</section>
      <section id="experience" className="min-h-screen p-8">Experience</section>
      <Leadership />
      <section id="projects" className="min-h-screen p-8">Projects</section>
      <section id="timeline" className="min-h-screen p-8">
        <Timeline />
      </section>
      <section id="contact" className="min-h-screen p-8">Contact</section>
      <section id="references" className="p-8">
        <h2 className="text-xl font-bold mb-4">References</h2>
        <ul className="list-disc pl-6 space-y-2">
          {references.map((ref, index) => (
            <li key={index}>
              <a href={ref.url} target="_blank" rel="noopener noreferrer">
                {ref.text}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
