import React from "react";
import Timeline from "../components/Timeline";

export default function ResumeSummary() {
  return (
    <section
      id="resume"
      className="px-4 py-6 flex flex-col items-center text-center bg-background"
    >
      <img
        src="headshot-placeholder.svg"
        alt="Headshot of Luis Rodriguez"
        width={200}
        height={200}
        className="mb-4 rounded-full"
        loading="lazy"
      />
      <p className="max-w-2xl mb-4 leading-relaxed">
        Luis Rodriguez is an Omaha-based Actuarial Analyst with a strong dual background in Economics and Mathematics, evidenced by his 4.0 GPA in both fields. He has a proven track record of applying analytical and programming skills to real-world financial and research problems. His experience spans actuarial science, financial planning, and academic research, complemented by leadership roles and professional certifications. A full résumé is available as a downloadable PDF for detailed viewing.
      </p>
      <div id="timeline" className="w-full max-w-3xl mb-4">
        <Timeline />
      </div>
      <a
        href="LuisRodriguez_Resume.pdf"
        className="px-6 py-3 bg-primary text-white rounded shadow focus:outline-none focus:ring-2 focus:ring-primary"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Résumé (PDF)
      </a>
    </section>
  );
}
