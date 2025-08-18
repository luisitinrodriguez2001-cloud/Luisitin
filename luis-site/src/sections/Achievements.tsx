import { FaInfoCircle } from "react-icons/fa";
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

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="px-4 py-6 sm:px-6 lg:px-8 bg-background"
    >
      <h2 className="text-3xl font-bold text-center mb-4">Achievements</h2>
      <div className="flex flex-col justify-center mb-6 sm:flex-row sm:flex-wrap">
        <AwardBadge title="Chancellor's List (8×)" detail="Top 7.5% of class" />
        <AwardBadge title="Dean's List (8×)" detail="GPA 3.5+ each semester" />
        <AwardBadge title="Phi Kappa Phi" detail="Top 7.5% of students across all disciplines" />
        <AwardBadge title="Pi Mu Epsilon" detail="Mathematics honor society" />
        <AwardBadge title="Omicron Delta Epsilon" detail="Economics honor society" />
        <AwardBadge title="Buffett Scholarship" detail="Competitive Nebraska awards that funded a debt-free path" />
        <AwardBadge title="Jack & Lucile Martin Scholarship" detail="Competitive Nebraska awards that funded a debt-free path" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center">Certifications &amp; Exams</h3>
      <div className="max-w-md mx-auto mb-4 flex items-center justify-center text-center">
        <p className="text-sm">
          SOA FM (Apr 2024), P (Jul 2024), SRM (Sep 2024), PA (Oct 2024)
        </p>
        <Tooltip content="Four prelims passed within one year.">
          <button
            type="button"
            className="ml-2 text-primary focus:outline-none"
            aria-label="Exam details"
          >
            <FaInfoCircle />
          </button>
        </Tooltip>
      </div>
      <div className="max-w-md mx-auto">
        <ul className="list-disc list-inside">
          <li>FINRA Series 7 &amp; 63 (Jul 2023)</li>
          <li>Life/Health Insurance License (since 2021)</li>
          <li>CITI Program (2021)</li>
        </ul>
      </div>
    </section>
  );
}

