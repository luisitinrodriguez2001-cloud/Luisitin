import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  dates: string;
  summary: string;
  link: string;
}

function ProjectCard({ title, dates, summary, link }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-white rounded shadow p-6 transition-opacity transition-transform duration-700 ease-out transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{dates}</p>
      <p className="mb-4">{summary}</p>
      <Link href={link} className="text-primary underline">
        Learn more
      </Link>
    </div>
  );
}

export default function Research() {
  return (
    <section id="research" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Research</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="Finite-Field Linear Algebra"
          dates="Jan 2022 – Mar 2022"
          summary="Studied numerical ranges over finite fields and presented findings at the UNO Student Research and Creative Activity Fair."
          link="https://digitalcommons.unomaha.edu/srcaf/2022/schedule/95/"
        />
        <ProjectCard
          title="Integer-Programming Wedding Venue Thesis"
          dates="Aug 2022 – May 2023"
          summary="Honors thesis using integer programming to select an optimal wedding venue that minimizes guest travel distance."
          link="https://digitalcommons.unomaha.edu/university_honors_program/197/"
        />
      </div>
    </section>
  );
}

