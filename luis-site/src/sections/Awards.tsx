import Tooltip from "../components/Tooltip";

interface AwardBadgeProps {
  title: string;
  detail: string;
}

function AwardBadge({ title, detail }: AwardBadgeProps) {
  return (
    <Tooltip content={detail}>
      <button
        type="button"
        className="m-2 px-4 py-2 bg-primary text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
      >
        {title}
      </button>
    </Tooltip>
  );
}

export default function Awards() {
  return (
    <section
      id="awards"
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-gray-50"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Awards</h2>
      <div className="flex flex-col justify-center mb-12 sm:flex-row sm:flex-wrap">
        <AwardBadge
          title="Chancellor's List (8×)"
          detail="Top 7.5% of class"
        />
        <AwardBadge
          title="Dean's List (8×)"
          detail="GPA 3.5+ each semester"
        />
        <AwardBadge
          title="Pi Mu Epsilon"
          detail="Mathematics honor society"
        />
        <AwardBadge
          title="Omicron Delta Epsilon"
          detail="Economics honor society"
        />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center">Certifications</h3>
      <div className="max-w-md mx-auto">
        <ul className="list-disc list-inside">
          <li>
            SOA Exams (P Jul 2024, FM Apr 2024, SRM Sep 2024, PA Oct 2024)
          </li>
          <li>FINRA Series 7 &amp; 63 (Jul 2023)</li>
          <li>Life/Health Insurance License (since 2021)</li>
          <li>CITI Program (2021)</li>
        </ul>
      </div>
    </section>
  );
}

