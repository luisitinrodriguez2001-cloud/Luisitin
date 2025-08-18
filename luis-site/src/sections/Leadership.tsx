import { useEffect, useRef, useState } from "react";

interface LeadershipRole {
  role: string;
  organization: string;
  period: string;
  link?: string;
}

function LeadershipItem({ role, organization, period, link }: LeadershipRole) {
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
      className={`transition-opacity transition-transform duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="pl-4 border-l-2 border-primary">
        <h3 className="text-xl font-semibold">{role}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {link ? (
            <a href={link} className="text-primary underline" target="_blank" rel="noopener noreferrer">
              {organization}
            </a>
          ) : (
            organization
          )}
        </p>
        <p className="text-xs text-gray-500 leading-relaxed">{period}</p>
      </div>
    </div>
  );
}

export default function Leadership() {
  const roles: LeadershipRole[] = [
    {
      role: "President, Economics Club",
      organization: "UNO Economics Club",
      period: "Aug 2023 – May 2024",
      link: "https://www.unomaha.edu/college-of-business-administration/economics/index.php",
    },
    {
      role: "Vice President, Financial Management Association",
      organization: "UNO FMA",
      period: "Aug 2022 – May 2023",
      link: "https://www.unomaha.edu/college-of-business-administration/finance-banking/fma.php",
    },
    {
      role: "Student Representative, GIPS Board of Education",
      organization: "Grand Island Public Schools",
      period: "Aug 2018 – May 2019",
      link: "https://meeting.assemblemeetings.com/Public/Agenda/63?meeting=39306",
    },
  ];

  return (
    <section
      id="leadership"
      className="min-h-screen px-4 py-8 sm:px-6 lg:px-8 bg-gray-50"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Leadership</h2>
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {roles.map((item) => (
          <LeadershipItem key={item.role} {...item} />
        ))}
      </div>
    </section>
  );
}

