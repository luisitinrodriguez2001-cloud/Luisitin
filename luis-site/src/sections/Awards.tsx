import { useState } from "react";

interface AwardBadgeProps {
  title: string;
  detail: string;
}

function AwardBadge({ title, detail }: AwardBadgeProps) {
  const [show, setShow] = useState(false);

  return (
    <button
      type="button"
      aria-label={`${title}. ${detail}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      className="relative m-2 px-4 py-2 bg-primary text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {title}
      <span
        className={`absolute left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap bg-gray-800 text-white text-xs rounded px-2 py-1 transition-opacity ${show ? "opacity-100" : "opacity-0"}`}
      >
        {detail}
      </span>
    </button>
  );
}

interface CertificationProps {
  name: string;
  progress: number;
}

function Certification({ name, progress }: CertificationProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span>{name}</span>
        <span>{progress}%</span>
      </div>
      <div
        className="w-full bg-gray-200 rounded h-2"
        role="progressbar"
        aria-label={`${name} progress`}
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="bg-primary h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default function Awards() {
  return (
    <section id="awards" className="min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Awards</h2>
      <div className="flex flex-wrap justify-center mb-12">
        <AwardBadge title="Chancellor's List" detail="Top 7.5% of class" />
        <AwardBadge title="Dean's List" detail="GPA 3.5+ each semester" />
        <AwardBadge title="Regents Scholarship" detail="Full tuition scholarship" />
        <AwardBadge title="Distinguished Scholars Program" detail="Selected for academic excellence" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center">Certifications</h3>
      <div className="max-w-md mx-auto">
        <Certification name="SOA Exam P" progress={100} />
        <Certification name="SOA Exam FM" progress={60} />
        <Certification name="FINRA SIE" progress={100} />
        <Certification name="NE Life & Health Insurance License" progress={100} />
      </div>
    </section>
  );
}

