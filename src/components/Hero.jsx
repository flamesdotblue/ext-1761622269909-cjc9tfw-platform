import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="py-16 sm:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">Hi, I’m</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Alex Chen
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">AI Engineer</span>
          </h1>
          <p className="mt-5 text-slate-600 dark:text-slate-300 max-w-prose">
            I build production-grade AI systems: from LLM apps and retrieval pipelines to computer vision and ML platforms. I care about latency, evals, guardrails, and shipping reliable user experiences.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-violet-600 px-4 py-2 text-white hover:bg-violet-700 active:bg-violet-800 transition-colors">
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              Download CV
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-slate-500">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-violet-500/20 to-indigo-500/10 rounded-3xl blur-2xl" aria-hidden="true" />
          <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 p-6 bg-white/70 dark:bg-slate-950/60">
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                <div>
                  <p className="font-medium">LLM Apps & Retrieval</p>
                  <p className="text-slate-600 dark:text-slate-400">RAG, function calling, structured outputs, evals, guardrails.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
                <div>
                  <p className="font-medium">MLOps</p>
                  <p className="text-slate-600 dark:text-slate-400">Tracking, CI/CD for models, vector stores, observability.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                <div>
                  <p className="font-medium">Vision & Multimodal</p>
                  <p className="text-slate-600 dark:text-slate-400">CLIP, SAM, Whisper, diffusion workflows, prompt engineering.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
