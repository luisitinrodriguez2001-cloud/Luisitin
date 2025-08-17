import { useRef, useState } from "react";
import events from "../../data/timeline.json";

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  links?: string[];
};

export default function Timeline() {
  const data = events as TimelineEvent[];
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleSelect = (index: number) => {
    setActive(index);
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>, idx: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      const next = (idx + 1) % data.length;
      navRefs.current[next]?.focus();
      handleSelect(next);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      const prev = (idx - 1 + data.length) % data.length;
      navRefs.current[prev]?.focus();
      handleSelect(prev);
    }
  };

  return (
    <div>
      <div className="flex overflow-x-auto space-x-4 pb-4" role="tablist">
        {data.map((ev, i) => (
          <button
            key={ev.title}
            ref={(el) => (navRefs.current[i] = el)}
            className={`px-3 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 ${i === active ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
            role="tab"
            tabIndex={0}
            aria-selected={i === active}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => handleSelect(i)}
            onKeyDown={(e) => handleKey(e, i)}
            title={ev.title}
          >
            {ev.date}
          </button>
        ))}
      </div>
      <div>
        {data.map((ev, i) => (
          <div
            key={ev.title}
            ref={(el) => (sectionRefs.current[i] = el)}
            hidden={active !== i}
            role="tabpanel"
            aria-labelledby={ev.title}
            className="p-4"
          >
            <h3 className="text-xl font-semibold">{ev.title}</h3>
            <p className="mb-2">{ev.description}</p>
            {ev.links && (
              <ul className="list-disc list-inside space-y-1">
                {ev.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
