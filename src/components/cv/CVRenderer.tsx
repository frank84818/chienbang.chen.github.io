'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

type Lang = 'EN' | 'ZH';

export default function CVRenderer() {
  const [lang, setLang] = useState<Lang>('EN');
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const loadContent = async () => {
      const fileName = lang === 'EN' ? 'cv-en' : 'cv-zh';
      try {
        const res = await fetch(`/data/cv/${fileName}.md`);
        if (res.ok) {
          const text = await res.text();
          setContent(text);
        } else {
          setContent(`Failed to load ${fileName}.md. Please ensure the file exists in /public/data/cv/`);
        }
      } catch (err) {
        setContent("Error loading CV content.");
      }
    };
    loadContent();
  }, [lang]);

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-8 md:py-16">
      {/* Control Panel */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6 no-print">
        <h2 className="text-xs font-black tracking-[0.4em] uppercase opacity-40 text-center sm:text-left">
          Professional / Dossier
        </h2>
        <div className="flex bg-white dark:bg-slate-800 p-1.5 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
          {(['EN', 'ZH'] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-8 py-2 rounded-xl text-xs font-black tracking-widest transition-all ${
                lang === l 
                  ? 'bg-gray-900 text-white shadow-xl' 
                  : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Using full width on desktop */}
      <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
        {/* Left Side: Professional Summary & Contact */}
        <aside className="w-full lg:w-[30%] xl:w-[25%] no-print">
          <div className="lg:sticky lg:top-32 p-8 md:p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl mb-10 flex items-center justify-center text-white text-2xl font-black">
              CB
            </div>
            <div className="space-y-10">
              <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Location</h3>
                <p className="font-bold text-lg leading-tight">Taipei, Taiwan</p>
              </section>
              <section>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-4">Architecture</h3>
                <div className="space-y-3">
                  <p className="font-bold text-sm md:text-base break-all">chienbang.chen@example.com</p>
                  <p className="font-bold text-sm md:text-base break-all">github.com/chienbang</p>
                </div>
              </section>
            </div>
            <button 
              onClick={() => window.print()} 
              className="w-full mt-12 py-5 bg-blue-600 text-white rounded-2xl text-xs font-black tracking-widest uppercase hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              Export PDF
            </button>
          </div>
        </aside>

        {/* Right Side: Detailed Markdown Content */}
        <div className="w-full lg:w-[70%] xl:w-[75%] bg-white dark:bg-slate-900/50 p-8 md:p-16 lg:p-20 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden print:p-0 print:border-none print:shadow-none">
          <article className="prose prose-slate prose-lg md:prose-xl dark:prose-invert max-w-none 
            prose-h1:text-5xl md:prose-h1:text-7xl prose-h1:font-black prose-h1:tracking-tighter prose-h1:mb-10 prose-h1:leading-[0.9]
            prose-h2:text-xs prose-h2:font-black prose-h2:uppercase prose-h2:tracking-[0.5em] prose-h2:text-blue-600 prose-h2:border-b-2 prose-h2:border-gray-100 dark:prose-h2:border-slate-800 prose-h2:pb-6 prose-h2:mt-24 prose-h2:mb-12
            prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:font-bold prose-h3:mb-3
            prose-p:text-gray-500 dark:prose-p:text-gray-400 prose-p:leading-relaxed prose-p:text-lg md:prose-p:text-xl
            prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-black
            prose-hr:border-gray-100 dark:prose-hr:border-gray-800 prose-hr:my-20
            prose-li:marker:text-blue-500 prose-li:text-gray-500 dark:prose-li:text-gray-400 prose-li:text-lg
          ">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}
