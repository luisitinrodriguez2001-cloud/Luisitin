import { useRef, useState } from "react";
import events from "../../data/timeline.json";
import {
  FaGraduationCap,
  FaBriefcase,
  FaTrophy,
  FaHeart,
} from "react-icons/fa";

type Link = {
  label: string;
  url: string;
};

type TimelineEvent = {
  date: string;
  startDate: string;
  title: string;
  category: "Education" | "Work" | "Awards" | "Personal";
  snippet: string;
  links?: Link[];
  color?: string;
};

const icons = {
  Education: FaGraduationCap,
  Work: FaBriefcase,
  Awards: FaTrophy,
  Personal: FaHeart,
};

export default function Timeline() {
  const data = (events as TimelineEvent[]).sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const [hint, setHint] = useState(true);

  const scrollBy = (dir: number) => {
    containerRef.current?.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") scrollBy(1);
    if (e.key === "ArrowLeft") scrollBy(-1);
    if (hint) setHint(false);
  };

  const handleInteract = () => setHint(false);

  return (
    <div className="relative my-8">
      <div
        ref={containerRef}
        className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory"
        role="listbox"
        tabIndex={0}
        onKeyDown={handleKey}
        onWheel={handleInteract}
        onTouchStart={handleInteract}
        aria-label="Timeline"
      >
        {data.map((ev) => {
          const Icon = icons[ev.category];
          return (
            <div
              key={ev.title}
              role="option"
              aria-selected="false"
              className="snap-start shrink-0 w-72 bg-white rounded-2xl shadow p-4 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="flex items-center mb-2 text-sm text-gray-600">
                <Icon className="mr-2" style={{ color: ev.color }} aria-hidden="true" />
                {ev.date}
              </div>
              <h3 className="text-base font-semibold">{ev.title}</h3>
              <p className="text-sm mt-1 text-gray-700 leading-relaxed">{ev.snippet}</p>
              {ev.links && (
                <ul className="mt-2 text-sm space-y-1">
                  {ev.links.map((l) => (
                    <li key={l.url}>
                      <a
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-2 decoration-primary hover:decoration-2"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
      {hint && (
        <div className="absolute right-4 top-0 text-xs text-gray-500 animate-pulse select-none">
          drag to scroll →
        </div>
      )}
      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollBy(-1)}
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollBy(1)}
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow"
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
