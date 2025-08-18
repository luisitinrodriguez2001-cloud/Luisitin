import Card from "../components/Card";

interface Project {
  title: string;
  dates: string;
  summary: string;
  link: { label: string; url: string };
  presentations?: string[];
}

const projects: Project[] = [
  {
    title: "Finite-Field Linear Algebra",
    dates: "Sep 2021 – Apr 2022",
    summary: "Studied numerical ranges over finite fields.",
    presentations: [
      "UNO Student Research and Creative Activity Fair",
      "MAA North Central Section Conference",
    ],
    link: {
      label: "UNO SRCAF Abstract",
      url: "https://digitalcommons.unomaha.edu/srcaf/2022/schedule/95/",
    },
  },
  {
    title: "Integer-Programming Wedding Venue Thesis",
    dates: "Aug 2022 – May 2023",
    summary:
      "Honors thesis using IBM CPLEX to select an optimal wedding venue that minimizes guest travel distance.",
    link: {
      label: "UNO Honors Thesis (PDF)",
      url: "https://digitalcommons.unomaha.edu/cgi/viewcontent.cgi?article=1202&context=university_honors_program",
    },
  },
];

export default function Research() {
  return (
    <section
      id="research"
      className="px-4 py-8 sm:px-6 lg:px-8 bg-background"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Research</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.title}
            title={p.title}
            summary={p.dates}
            detail={
              <>
                <p className="mb-4 leading-relaxed">{p.summary}</p>
                {p.presentations && (
                  <ul className="mb-4 list-disc list-inside">
                    {p.presentations.map((e) => (
                      <li key={e}>{e}</li>
                    ))}
                  </ul>
                )}
                <a
                  href={p.link.url}
                  className="text-primary underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.link.label}
                </a>
              </>
            }
          />
        ))}
      </div>
    </section>
  );
}

