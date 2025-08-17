import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './luis-site/src/components/Navbar';
import ResumeSummary from './luis-site/src/sections/ResumeSummary';
import Education from './luis-site/src/sections/Education';
import Research from './luis-site/src/sections/Research';
import Experience from './luis-site/src/sections/Experience';
import Awards from './luis-site/src/sections/Awards';
import Leadership from './luis-site/src/sections/Leadership';
import Timeline from './luis-site/src/components/Timeline';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar />
      <ResumeSummary />
      <Education />
      <Research />
      <Experience />
      <Awards />
      <Leadership />
      <section id="timeline" className="min-h-screen p-8">
        <Timeline />
      </section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
