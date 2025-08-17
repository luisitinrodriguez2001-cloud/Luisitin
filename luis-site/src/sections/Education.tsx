import { useState } from "react";

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

interface EducationCardProps {
  institution: string;
  degree: string;
  gpa: string;
  concentration?: string;
  scholarships: string[];
  honors: string[];
}

function EducationCard({
  institution,
  degree,
  gpa,
  concentration,
  scholarships,
  honors,
}: EducationCardProps) {
  const [showScholarships, setShowScholarships] = useState(false);
  const [showHonors, setShowHonors] = useState(false);

  return (
    <div className="bg-white rounded shadow p-6 flex flex-col">
      <div className="flex items-center mb-4">
        <AcademicCapIcon className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-xl font-semibold">{institution}</h3>
      </div>
      <p className="font-medium mb-1">{degree}</p>
      {concentration && <p className="mb-1">Concentration: {concentration}</p>}
      <p className="mb-2">GPA: {gpa}</p>
      <div className="mt-auto">
        <button
          onClick={() => setShowScholarships(!showScholarships)}
          className="text-primary underline mb-2"
        >
          Scholarships
        </button>
        {showScholarships && (
          <ul className="list-disc list-inside mb-4">
            {scholarships.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <button
          onClick={() => setShowHonors(!showHonors)}
          className="text-primary underline"
        >
          Honor Societies
        </button>
        {showHonors && (
          <ul className="list-disc list-inside mt-2">
            {honors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <EducationCard
          institution="University of Nebraska at Omaha"
          degree="B.S. Economics & Mathematics"
          gpa="4.0"
          concentration="Economics and Mathematics"
          scholarships={[
            "Regents Scholarship (full tuition)",
            "Distinguished Scholars Program",
          ]}
          honors={[
            "Pi Mu Epsilon (Mathematics)",
            "Omicron Delta Epsilon (Economics)",
          ]}
        />
        <EducationCard
          institution="Grand Island Senior High"
          degree="High School Diploma"
          gpa="4.0"
          concentration="College Preparatory Curriculum"
          scholarships={["Local Academic Scholarships"]}
          honors={["National Honor Society"]}
        />
      </div>
    </section>
  );
}

