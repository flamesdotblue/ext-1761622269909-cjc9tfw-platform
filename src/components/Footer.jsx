import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 dark:border-slate-800">
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h3 className="text-xl font-semibold">Get in touch</h3>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-prose">
          I’m open to consulting, collaborations, and full-time opportunities.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-5 text-sm">
          <a
            href="mailto:alex.ai.engineer@example.com"
            className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-white hover:bg-violet-700"
          >
            <Mail className="h-4 w-4" /> Email me
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-400">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-400">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
        <p className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Alex Chen. All rights reserved.</p>
      </section>
    </footer>
  );
}
