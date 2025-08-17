import Card from "../components/Card";

interface Project {
  title: string;
  dates: string;
  summary: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Finite-Field Linear Algebra",
    dates: "Jan 2022 – Mar 2022",
    summary:
      "Studied numerical ranges over finite fields and presented findings at the UNO Student Research and Creative Activity Fair.",
    link: "https://digitalcommons.unomaha.edu/srcaf/2022/schedule/95/",
  },
  {
    title: "Integer-Programming Wedding Venue Thesis",
    dates: "Aug 2022 – May 2023",
    summary:
      "Honors thesis using integer programming to select an optimal wedding venue that minimizes guest travel distance.",
    link: "https://digitalcommons.unomaha.edu/university_honors_program/197/",
  },
];

export default function Research() {
  return (
    <section id="research" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Research</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            summary={p.dates}
            detail={
              <>
                <p className="mb-4">{p.summary}</p>
                <a href={p.link} className="text-primary underline">
                  Learn more
                </a>
              </>
            }
          />
        ))}
      </div>
    </section>
  );
}

