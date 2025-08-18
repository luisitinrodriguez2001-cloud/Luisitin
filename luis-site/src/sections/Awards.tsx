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
    <section
      id="awards"
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-gray-50"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Awards</h2>
      <div className="flex flex-col justify-center mb-12 sm:flex-row sm:flex-wrap">
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

