import { useEffect, useState } from "react";

const sections = [
  "about",
  "education",
  "experience",
  "leadership",
  "projects",
  "timeline",
  "contact",
];

export default function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background">
      <div className="p-4 sm:hidden">
        <button
          aria-controls="navbar-menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          ☰<span className="sr-only">Toggle menu</span>
        </button>
      </div>
      <ul
        id="navbar-menu"
        className={`${open ? "flex" : "hidden"} flex-col space-y-2 p-4 sm:flex sm:flex-row sm:space-y-0 sm:space-x-4`}
      >
        {sections.map((id) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? "font-bold" : ""}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
