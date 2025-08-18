import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './luis-site/src/components/Navbar';
import ResumeSummary from './luis-site/src/sections/ResumeSummary';
import Education from './luis-site/src/sections/Education';
import Research from './luis-site/src/sections/Research';
import Experience from './luis-site/src/sections/Experience';
import Achievements from './luis-site/src/sections/Achievements';
import Leadership from './luis-site/src/sections/Leadership';
import Contact from './luis-site/src/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <ResumeSummary />
      <Education />
      <Research />
      <Experience />
      <Achievements />
      <Leadership />
      <Contact />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
