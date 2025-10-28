import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime RAG Chat for Docs',
    description:
      'Low-latency retrieval augmented generation with hybrid search, reranking, and streaming UI. Includes evals and grounding citations.',
    stack: ['Next.js', 'OpenAI', 'Postgres', 'pgvector', 'Vercel'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Agentic ETL for Customer Support',
    description:
      'Automated summarization and tagging of tickets using tools and guardrails. Reduced handling time by 35%.',
    stack: ['Python', 'LangChain', 'Celery', 'Redis', 'Docker'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Vision Quality Inspector',
    description:
      'Edge-deployed vision model for defect detection with active learning loop and human-in-the-loop review.',
    stack: ['PyTorch', 'ONNX', 'TensorRT', 'FastAPI'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Highlighted Projects</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-prose">
          A selection of recent work focused on LLM applications, retrieval, and MLOps.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/70 dark:bg-slate-950/60 hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
          >
            <h3 className="text-lg font-semibold group-hover:text-violet-600 dark:group-hover:text-violet-400">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs rounded-md border border-slate-200 dark:border-slate-800 px-2 py-1 text-slate-600 dark:text-slate-300"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <a
                href={p.github}
                className="inline-flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-400"
              >
                <Github className="h-4 w-4" /> Code
              </a>
              <a
                href={p.demo}
                className="inline-flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-400"
              >
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
