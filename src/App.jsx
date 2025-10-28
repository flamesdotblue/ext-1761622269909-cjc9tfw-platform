import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <NavBar />
      <main className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
