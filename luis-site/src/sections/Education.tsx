import Card from "../components/Card";

function AcademicCapIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11.7 2.13a.75.75 0 01.6 0l9 4a.75.75 0 010 1.36l-2.21.98a4.5 4.5 0 01-8.76 0l-2.21-.98a.75.75 0 010-1.36l9-4z" />
      <path d="M21.75 12a.75.75 0 00-1.5 0v2.763a9.71 9.71 0 01-7.5 3.487 9.71 9.71 0 01-7.5-3.487V12a.75.75 0 00-1.5 0v2.763c0 .748.167 1.481.49 2.15a6.22 6.22 0 001.348 1.86l-.872 2.615a.75.75 0 001.423.474l.87-2.607a11.21 11.21 0 0012.582 0l.87 2.607a.75.75 0 001.423-.474l-.872-2.615a6.22 6.22 0 001.348-1.86 5.6 5.6 0 00.49-2.15V12z" />
    </svg>
  );
}

interface Education {
  institution: string;
  degree: string;
  gpa: string;
  concentration?: string;
  scholarships: string[];
  honors: string[];
}

const schools: Education[] = [
  {
    institution: "University of Nebraska at Omaha",
    degree: "B.S. Economics & Mathematics",
    gpa: "4.0",
    concentration: "Economics and Mathematics",
    scholarships: [
      "Regents Scholarship (full tuition)",
      "Distinguished Scholars Program",
    ],
    honors: [
      "Pi Mu Epsilon (Mathematics)",
      "Omicron Delta Epsilon (Economics)",
    ],
  },
  {
    institution: "Grand Island Senior High",
    degree: "High School Diploma",
    gpa: "4.0",
    concentration: "College Preparatory Curriculum",
    scholarships: ["Local Academic Scholarships"],
    honors: ["National Honor Society"],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-gray-50"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {schools.map((s) => (
          <Card
            key={s.institution}
            icon={<AcademicCapIcon className="h-6 w-6 text-primary" />}
            title={s.institution}
            summary={`${s.degree} — GPA: ${s.gpa}`}
            detail={
              <div>
                {s.concentration && (
                  <p className="mb-4 leading-relaxed">
                    Concentration: {s.concentration}
                  </p>
                )}
                {s.scholarships.length > 0 && (
                  <>
                    <p className="font-medium mb-2 leading-relaxed">Scholarships</p>
                    <ul className="list-disc list-inside mb-4">
                      {s.scholarships.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
                {s.honors.length > 0 && (
                  <>
                    <p className="font-medium mb-2 leading-relaxed">Honor Societies</p>
                    <ul className="list-disc list-inside">
                      {s.honors.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            }
          />
        ))}
      </div>
    </section>
  );
}

