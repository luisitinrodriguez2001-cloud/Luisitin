import { useEffect, useRef, useState } from "react";

interface LeadershipRole {
  role: string;
  organization: string;
  period: string;
  link?: string;
  descriptions?: string[];
}

function LeadershipItem({
  role,
  organization,
  period,
  link,
  descriptions,
}: LeadershipRole) {
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
        {descriptions && (
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2 leading-relaxed">
            {descriptions.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Leadership() {
  const roles: LeadershipRole[] = [
    {
      role: "Student Representative, GIPS Board of Education",
      organization: "Grand Island Public Schools",
      period: "Aug 2018 – May 2019",
      link: "https://meeting.assemblemeetings.com/Public/Agenda/63?meeting=39306",
      descriptions: ["Provided student perspective on district decisions."],
    },
    {
      role: "Treasurer, UNO Economics Club",
      organization: "UNO Economics Club",
      period: "Jan 2020 – Aug 2021",
      link: "https://www.unomaha.edu/college-of-business-administration/economics/index.php",
      descriptions: ["Managed club finances and budgeting."],
    },
    {
      role: "President, UNO Economics Club",
      organization: "UNO Economics Club",
      period: "Aug 2021 – May 2023",
      link: "https://www.unomaha.edu/college-of-business-administration/economics/index.php",
      descriptions: ["Led meetings and organized member events."],
    },
    {
      role: "Treasurer, UNO Honors Student Association",
      organization: "UNO Honors Student Association",
      period: "May 2020 – May 2021",
      link: "https://www.unomaha.edu/honors-program/honors-student-association.php",
      descriptions: ["Oversaw budgets and financial records for honors community."],
    },
    {
      role: "Vice-President, UNO Financial Management Association",
      organization: "UNO FMA",
      period: "Sep 2021 – Jan 2022",
      link: "https://www.unomaha.edu/college-of-business-administration/finance-banking/fma.php",
      descriptions: ["Coordinated professional development activities."],
    },
    {
      role: "Mission-Moment Speaker",
      organization: "GIPS Harvest Gala",
      period: "Sep 26, 2024",
      link: "https://www.harvestomaha.org/mission-moment",
      descriptions: [
        "Selected keynote moment to inspire donor community; spotlight on scholarship impact.",
      ],
    },
  ];

  return (
    <section
      id="leadership"
      className="px-4 py-6 sm:px-6 lg:px-8 bg-background"
    >
      <h2 className="text-3xl font-bold text-center mb-4">Leadership</h2>
      <div className="flex flex-col space-y-6 max-w-2xl mx-auto">
        {roles.map((item) => (
          <LeadershipItem key={item.role} {...item} />
        ))}
      </div>
    </section>
  );
}

