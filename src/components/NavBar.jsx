import React from 'react';
import { Bot, Folder, Mail } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-indigo-600 text-white">
            <Bot className="h-5 w-5" />
          </span>
          <span className="text-sm sm:text-base">AI Engineer Portfolio</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Home</a>
          <a href="#projects" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors inline-flex items-center gap-2">
            <Folder className="h-4 w-4" />
            Projects
          </a>
          <a href="#contact" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors inline-flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
