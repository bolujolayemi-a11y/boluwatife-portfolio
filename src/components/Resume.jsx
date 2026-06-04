import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Resume = () => {
  const [activeSubTab, setActiveSubTab] = useState('education');

  const skillsList = [
    { name: 'React.js', icon: <ReactIcon /> },
    { name: 'JavaScript', icon: <JsIcon /> },
    { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    { name: 'Supabase', icon: <SupabaseIcon /> },
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'Pandas Engine', icon: <PandasIcon /> },
    { name: 'Appwrite Core', icon: <AppwriteIcon /> },
    { name: 'GitHub', icon: <GithubIcon /> },
    { name: 'Vercel', icon: <VercelIcon /> },
    { name: 'Netlify', icon: <NetlifyIcon /> }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 text-left selection:bg-pink-500/20 selection:text-pink-400">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT NAVIGATION COLUMN: DYNAMIC ADAPTIVE SIDEBAR */}
        <div className="lg:col-span-3 flex flex-col gap-2.5 sticky top-24">
          {['education', 'skills', 'enthusiasm'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`w-full py-2.5 px-4 rounded-lg border text-[10px] font-sans font-black uppercase tracking-wider text-center transition-all duration-200 backdrop-blur-sm active:scale-98 cursor-pointer ${
                activeSubTab === tab
                  ? 'bg-[#1b0b30] dark:bg-white text-white dark:text-[#1b0b30] border-[#1b0b30] dark:border-white shadow-md'
                  : 'bg-[#1b0b30]/5 dark:bg-white/5 border-[#1b0b30]/10 dark:border-white/5 text-[#1b0b30]/60 dark:text-pink-200/50 hover:border-[#1b0b30]/20 dark:hover:border-white/10 hover:text-[#1b0b30] dark:hover:text-white'
              }`}
            >
              {tab === 'education' ? 'Education' : tab === 'skills' ? 'Skills' : 'Learning Enthusiasm'}
            </button>
          ))}
        </div>

        {/* RIGHT COLUMN: DYNAMIC ADAPTIVE VIEWPORTS CANVAS */}
        <div className="lg:col-span-9 bg-transparent min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSubTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
            >
              
              {/* VIEWPORTS 1: COMPACT EDUCATION CARDS */}
              {activeSubTab === 'education' && (
                <div>
                  <h3 className="text-2xl font-black text-[#1b0b30] dark:text-white tracking-tight mb-6 transition-colors duration-300">Education</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/5 rounded-xl p-5 flex flex-col justify-between hover:border-[#1b0b30]/20 dark:hover:border-white/10 transition-all duration-200 backdrop-blur-sm group">
                      <div>
                        <span className="font-mono font-bold text-[10px] text-pink-600 dark:text-pink-300 block mb-1 transition-colors duration-300">2021 - 2026</span>
                        <h4 className="text-base font-bold text-[#1b0b30] dark:text-white tracking-tight transition-colors duration-300">B.Sc. in Nursing</h4>
                      </div>
                      <p className="text-[#1b0b30]/50 dark:text-white/50 text-xs mt-3 border-t border-[#1b0b30]/10 dark:border-white/5 pt-2.5 font-medium transition-colors duration-300">
                        • Ondo State University of Medical Sciences
                      </p>
                    </div>

                    <div className="bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/5 rounded-xl p-5 flex flex-col justify-between hover:border-[#1b0b30]/20 dark:hover:border-white/10 transition-all duration-200 backdrop-blur-sm group">
                      <div>
                        <span className="font-mono font-bold text-[10px] text-pink-600 dark:text-pink-300 block mb-1 transition-colors duration-300">Graduated 2026</span>
                        <h4 className="text-base font-bold text-[#1b0b30] dark:text-white tracking-tight transition-colors duration-300">Frontend Development</h4>
                      </div>
                      <p className="text-[#1b0b30]/50 dark:text-white/50 text-xs mt-3 border-t border-[#1b0b30]/10 dark:border-white/5 pt-2.5 font-medium transition-colors duration-300">
                        • Techyjaunt Engineering Cohort
                      </p>
                    </div>

                    <div className="bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/5 rounded-xl p-5 flex flex-col justify-between hover:border-[#1b0b30]/20 dark:hover:border-white/10 transition-all duration-200 backdrop-blur-sm sm:col-span-2 group">
                      <div>
                        <span className="font-mono font-bold text-[10px] text-pink-600 dark:text-pink-300 block mb-1 transition-colors duration-300">Graduated 2025</span>
                        <h4 className="text-base font-bold text-[#1b0b30] dark:text-white tracking-tight transition-colors duration-300">Data Analytics Specialization</h4>
                      </div>
                      <p className="text-[#1b0b30]/50 dark:text-white/50 text-xs mt-3 border-t border-[#1b0b30]/10 dark:border-white/5 pt-2.5 font-medium transition-colors duration-300">
                        • GetBundi Techsis Initiative
                      </p>
                    </div>

                  </div>
                </div>
              )}

              {/* VIEWPORTS 2: STREAMLINED SKILLS GRID */}
              {activeSubTab === 'skills' && (
                <div>
                  <h3 className="text-2xl font-black text-[#1b0b30] dark:text-white tracking-tight mb-6 transition-colors duration-300">My Skills</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                    {skillsList.map((skill) => (
                      <div 
                        key={skill.name} 
                        className="bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/5 rounded-2xl aspect-4/3 flex flex-col items-center justify-center group hover:border-[#1b0b30]/30 dark:hover:border-white/20 transition-all duration-200 relative backdrop-blur-sm"
                      >
                        {/* Custom Tooltip adjusted for Dark/Light Contrast profiles */}
                        <div className="absolute top-3 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/90 border border-white/10 text-white font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded pointer-events-none transform translate-y-1 group-hover:translate-y-0 z-10">
                          {skill.name}
                        </div>
                        
                        <div className="w-10 h-10 flex items-center justify-center text-[#1b0b30]/80 dark:text-white/90 transition-transform duration-200 group-hover:scale-105">
                          {skill.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEWPORTS 3: ENTHUSIASM PANE WITH DYNAMIC TEXT CHANNELS */}
              {activeSubTab === 'enthusiasm' && (
                <div className="flex flex-col">
                  <h3 className="text-2xl font-black text-[#1b0b30] dark:text-white tracking-tight mb-2 transition-colors duration-300">Learning Enthusiasm</h3>
                  <p className="text-[#1b0b30]/60 dark:text-pink-200/50 text-xs sm:text-sm leading-relaxed mb-6 font-normal transition-colors duration-300">
                    Implementing targeted intelligence frameworks, modern data backends, and server environments to expand technical production output bounds.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { name: 'Claude AI', icon: <ClaudeIcon />, context: 'Code architecture planning and programmatic layout patterns.' },
                      { name: 'ChatGPT', icon: <ChatGptIcon />, context: 'Logic validation loops and rapid blueprint component testing.' },
                      { name: 'Gemini AI', icon: <GeminiIcon />, context: 'Context analysis tracking and document logic mapping.' },
                      { name: 'Streamlit', icon: <StreamlitIcon />, context: 'Fast internal data dashboards and analytic application staging.' },
                      { name: 'Supabase', icon: <SupabaseIcon />, context: 'Real-time database layers, auth states, and relational models.' },
                      { name: 'Appwrite', icon: <AppwriteIcon />, context: 'Backend cloud schemas, document storage setups, and collection arrays.' }
                    ].map((tool) => (
                      <div 
                        key={tool.name} 
                        className="bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/5 rounded-xl p-4 flex flex-col gap-3.5 hover:border-[#1b0b30]/20 dark:hover:border-white/10 transition-all duration-200 group backdrop-blur-sm"
                      >
                        <div className="w-8 h-8 text-pink-600 dark:text-pink-300 transition-transform group-hover:scale-105 duration-300">
                          {tool.icon}
                        </div>
                        <div>
                          <h4 className="text-[#1b0b30] dark:text-white font-bold text-sm mb-0.5 transition-colors duration-300">{tool.name}</h4>
                          <p className="text-[#1b0b30]/50 dark:text-white/50 text-[11px] leading-relaxed font-normal transition-colors duration-300">{tool.context}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

/* --- VECTOR SVG ASSETS LAYER --- */
const ReactIcon = () => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-full h-full">
    <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
    <g stroke="currentColor">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-7 h-7">
    <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.1 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V231.6h41.4v150.2zm99.5 62.5c-37.6 0-63.9-19.1-74.7-41.4l33.9-19.5c7.4 14.7 17.6 25.1 39.8 25.1 19.1 0 31.6-9.7 31.6-23.7 0-16.1-12.7-22.1-34-31.4l-11.7-5c-33.6-14-55-31.5-55-66.4 0-33.1 25.1-57.5 63.4-57.5 30.7 0 50.1 12.2 61.1 32.8l-32 20s-6.8-12.1-15.6-17.2-28.7-17.2-12.9 0-20.5 6.6-20.5 17.1 0 11.5 7 16.3 24.5 23.8l12.1 5.1c39.6 17 56.4 33.6 56.4 69.5-.2 37.8-29.2 59.9-67.4 59.9z"/>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
    <path d="M12 4.5C7 4.5 3.5 7.5 3.5 12c0 2.5 1 4.5 3 6 1.5-1.5 3-2 5-2 .5 0 1 .5 1.5 1 1 1 2.5 2.5 5 2.5 5 0 7.5-3 7.5-7.5 0-3-1.5-5.5-4-6.5-1.5 1-2.5 1-4 1-.5 0-1-.5-1.5-1-.5-.5-1.5-2-4-2z" fill="currentColor" opacity="0.12"/>
    <path d="M12 4.5C7 4.5 3.5 7.5 3.5 12c0 2.5 1 4.5 3 6m0 0c1.5-1.5 3-2 5-2 .5 0 1 .5 1.5 1 1 1 2.5 2.5 5 2.5 5 0 7.5-3 7.5-7.5 0-3-1.5-5.5-4-6.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SupabaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M21.36 11.12h-7.11l4.74-9.48a.5.5 0 0 0-.74-.61L4.64 11.13a.5.5 0 0 0 .38.87h7.11l-4.74 9.48a.5.5 0 0 0 .74.61l13.61-10.11a.5.5 0 0 0-.38-.86z"/>
  </svg>
);

const PythonIcon = () => (
  <svg viewBox="0 0 448 512" fill="currentColor" className="w-7 h-7">
    <path d="M439.4 153.8c0-28.5-25-53.4-53.4-53.4H284V64c0-35.4-28.7-64-64-64H128C92.6 0 64 28.7 64 64v36.4c-35.4 0-64 28.7-64 64v85.3c0 35.4 28.7 64 64 64h41.7v36.4c0 35.4 28.7 64 64 64h91.2c35.4 0 64-28.7 64-64v-36.4H386c35.4 0 53.4-25 53.4-53.4V153.8zM224 36.6c6.4 0 11.6 5.2 11.6 11.6S230.4 59.7 224 59.7s-11.6-5.2-11.6-11.6 5.2-11.5 11.6-11.5zm-64 438.8c-6.4 0-11.6-5.2-11.6-11.6s5.2-11.6 11.6-11.6 11.6 5.2 11.6 11.6-5.2 11.6-11.6 11.6z"/>
  </svg>
);

const PandasIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M4 2h4v20H4V2zm6 4h4v16h-4V6zm6 5h4v11h-4V11z"/>
  </svg>
);

const AppwriteIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.12 6.8c0-.62.36-.93.97-.93.59 0 .95.31.95.93v4.61c0 .61-.36.92-.95.92-.61 0-.97-.31-.97-.92V8.8zm.97 8.35c-.6 0-.96-.34-.96-.94 0-.59.36-.94.96-.94.61 0 .96.35.96.94 0 .6-.35.94-.96.94z"/>
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" className="w-7 h-7">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.57-.18-3.14-.79-3.14-3.42 0-.75.27-1.37.71-1.85-.07-.17-.31-.88.07-1.85 0 0 .58-.18 1.91.71A6.5 6.5 0 0 1 8 3.44c.51.02 1.03.07 1.52.21 1.33-.9 1.91-.71 1.91-.71.39.97.14 1.68.07 1.85.44.48.71 1.1 0 3.42 0 2.63-1.57 3.23-3.14 3.41.25.21.47.63.47 1.28 0 .93-.01 1.68-.01 1.92 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const VercelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M12 2L1 22h22L12 2z"/>
  </svg>
);

const NetlifyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
    <path d="M23.11 9.81l-3.34-3.33a2.09 2.09 0 00-2.95 0L12 11.35 7.18 6.48a2.09 2.09 0 00-2.95 0L.89 9.81a2.09 2.09 0 000 2.95l3.34 3.33a2.09 2.09 0 002.95 0L12 11.22l4.82 4.87a2.09 2.09 0 002.95 0l3.34-3.33a2.09 2.09 0 000-2.95zM12 2.31a2.09 2.09 0 00-1.48.61L2.92 10.52a2.09 2.09 0 000 2.95l7.6 7.6a2.09 2.09 0 002.95 0l7.6-7.6a2.09 2.09 0 000-2.95l-7.6-7.6a2.09 2.09 0 00-1.47-.61z"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M11.378 14.938l-1.92 4.293a.354.354 0 0 1-.647 0l-1.92-4.293-4.293-1.92a.354.354 0 0 1 0-.647l4.293-1.92 1.92-4.293a.354.354 0 0 1 .647 0l1.92 4.293 4.293 1.92a.354.354 0 0 1 0 .647l-4.293 1.92zm5.725-7.391l-.959 2.146a.177.177 0 0 1-.323 0l-.959-2.146-2.146-.959a.177.177 0 0 1 0-.323l2.146-.959.959-2.146a.177.177 0 0 1 .323 0l.959 2.146 2.146.959a.177.177 0 0 1 0 .323l-2.146.959zM19.14 18.23l-1.439 3.22a.177.177 0 0 1-.323 0l-1.439-3.22-3.22-1.439a.177.177 0 0 1 0-.323l3.22-1.439 1.439-3.22a.177.177 0 0 1 .323 0l1.439 3.22 3.22 1.439a.177.177 0 0 1 0 .323l-3.22 1.439z"/>
  </svg>
);

const ChatGptIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <path d="M4.5 10.5C3.5 12 3.5 14 4.5 15.5l1.5 1c.5-.5 1-1.5 1-2.5V12c0-1-.5-2-1-2.5l-1.5 1z" fill="currentColor" opacity="0.15"/>
    <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M18.25 5.75L5.75 18.25" />
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.2"/>
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 2c0 5.523-4.477 10-10 10 5.523 0 10 4.477 10 10 0-5.523 4.477-10 10-10-5.523 0-10-4.477-10-10z"/>
  </svg>
);

const StreamlitIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
    <polygon points="12 2 2 22 22 22 12 2" fill="currentColor" opacity="0.15"/>
    <circle cx="12" cy="14" r="3" />
    <line x1="12" y1="2" x2="12" y2="11" />
  </svg>
);