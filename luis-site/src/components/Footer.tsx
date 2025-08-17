import React from "react";

export default function Footer() {
  return (
    <footer className="p-4 flex flex-col items-center text-center bg-background">
      <div className="flex space-x-4 mb-2">
        <a
          href="mailto:luis@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded bg-primary text-white"
          aria-label="Email"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15A2.25 2.25 0 0 1 21.75 4.5v15a2.25 2.25 0 0 1-2.25 2.25h-15A2.25 2.25 0 0 1 2.25 19.5v-15Zm2.457.75 7.293 5.099 7.293-5.099H4.707ZM20.25 8.34l-8.29 5.8a.75.75 0 0 1-.92 0l-8.29-5.8v10.41a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V8.34Z" />
          </svg>
        </a>
        <a
          href="https://github.com/luis"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded bg-primary text-white"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.762-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 6 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.476 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.903-.015 3.296 0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12 24 5.37 18.63 0 12 0Z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/luis"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded bg-primary text-white"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4v16h-4V8Zm7.98 0h3.83v2.29h.05c.53-1.01 1.84-2.29 3.78-2.29 4.04 0 4.79 2.66 4.79 6.11V24h-4v-7.9c0-1.89-.03-4.32-2.63-4.32-2.63 0-3.03 2.06-3.03 4.19V24h-4V8Z" />
          </svg>
        </a>
      </div>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Luis Rodriguez
      </p>
    </footer>
  );
}

