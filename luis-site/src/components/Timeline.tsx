import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import events from '../../data/timeline.json';

type TimelineEvent = {
  date: string;
  startDate: string;
  title: string;
  description: string;
  links?: string[];
};

export default function Timeline() {
  const data = (events as TimelineEvent[]).sort(
    (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
  );

  return (
    <VerticalTimeline>
      {data.map((ev) => (
        <VerticalTimelineElement
          key={ev.title}
          date={ev.date}
          contentStyle={{ boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.1)' }}
        >
          <h3 className="text-lg font-semibold">{ev.title}</h3>
          <p className="text-sm leading-relaxed">{ev.description}</p>
          {ev.links && (
            <ul className="list-disc list-inside mt-2">
              {ev.links.map((link) => (
                <li key={link}>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
