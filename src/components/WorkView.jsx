import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, BarChart, ExternalLink } from 'lucide-react';

import statnexusMockup from '../assets/deno.png'; 
import retailMockup from '../assets/retail.png'; 
import pantryguideMockup from '../assets/demo.png';
import snippetflowMockup from '../assets/snippetflow.png';
import vendraMockup from '../assets/vendra.png';
import pixelstoreMockup from '../assets/pixelstore.png';
import alaafiaMockup from '../assets/alaafia.png';
import entryhubMockup from '../assets/entryhub.png';

export const WorkView = () => {
  const [activeTab, setActiveTab] = useState('development'); 

  const developmentProjects = [
    {
      title: 'StatNexus AI',
      category: 'Professional-Grade Exam Environment',
      desc: 'Precision examination preparation platform tailored for medical professionals. Built to turn highly complex clinical datasets and text layers into streamlined, AI-explained learning pathways and adaptive testing sequences.',
      tags: ['React', 'Supabase', 'Groq AI', 'Tailwind CSS', 'Context API'],
      liveLink: 'https://statnexus.netlify.app/',
      image: statnexusMockup,
      isAI: true
    },
    {
      title: 'Alaafia Platform',
      category: 'Contextual Health Companion',
      desc: 'An AI-powered health companion web application designed specifically for the architectural nuances of the Nigerian ecosystem, featuring interactive health education and localized dietary mapping systems.',
      tags: ['React.js', 'Appwrite Database', 'Tailwind CSS', 'Component Architecture'],
      liveLink: 'https://alaafia-xi.netlify.app',
      image: alaafiaMockup,
      isAI: true
    },
    {
      title: 'SnippetFlow',
      category: 'AI Code Intelligence & Management',
      desc: 'A developer-first syntax storage and management application utilizing deep LLM integration via Groq AI. Allows engineers to structurally refine, optimize, cleanly explain, and catalog modular code blocks.',
      tags: ['React.js', 'Groq AI', 'Tailwind CSS', 'JavaScript (ES6+)'],
      liveLink: 'https://snippet-flow-xi.vercel.app/',
      image: snippetflowMockup,
      isAI: true
    },
    {
      title: 'Vendra Commerce',
      category: 'Multi-Tenant Storefront Engine',
      desc: 'Advanced React and Supabase e-commerce web application engineered specifically for entrepreneurs. Empowers merchants to dynamically generate, configure, and customize their frontend storefront spaces seamlessly on demand.',
      tags: ['React.js', 'Supabase', 'Tailwind CSS', 'PostgreSQL', 'Framer Motion'],
      liveLink: 'https://vendra.name.ng',
      image: vendraMockup
    },    
    {
      title: 'Pantry Guide',
      category: 'Kitchen Logic Application',
      desc: 'Intelligent recipe engine tracking kitchen ingredient inventories and dynamically mapping raw available food components to diverse culinary profile layers and worldwide flavors.',
      tags: ['React.js', 'Vercel Platform', 'Responsive Design', 'CSS Modules'],
      liveLink: 'https://my-pantry-guide.vercel.app/',
      image: pantryguideMockup
    },
    {
      title: 'PixelStore Pro',
      category: 'Generative E-Commerce Storefront Design',
      desc: 'Advanced generative design configuration storefront engine leveraging lightweight generative prompt schemas to dynamically draft layout guidelines for high-end digital brand identities.',
      tags: ['React.js', 'Generative AI', 'Tailwind CSS', 'Asset Structuring'],
      liveLink: 'https://pixel-store-mu.vercel.app/',
      image: pixelstoreMockup,
      isAI: true
    },
    {
      title: 'EntryHub Platform',
      category: 'Collaborative Event Management Ecosystem',
      desc: 'High-logic ticketing and digital validation check platform developed smoothly alongside an engineering cohort team, implementing secure QR verification mechanics and tracking metrics.',
      tags: ['React.js', 'Vite Core', 'Cohort Collaboration', 'REST API Routing'],
      liveLink: 'https://entryhub-web-platform-tuwr.vercel.app/',
      image: entryhubMockup
    }
  ];

  const analyticsProjects = [
    {
      title: 'Retail Sales Dashboard',
      category: 'Supply Chain Diagnostics',
      desc: 'Processed, parsed, and interpreted over 1,000+ custom raw transaction sequence records via code modeling to map metrics, isolate distribution friction, and pinpoint logistics layout gaps.',
      tags: ['Python Data Stack', 'Streamlit App', 'Data Modeling', 'Matplotlib Extraction'],
      liveLink: 'https://retail-performance-dashboard.streamlit.app/',
      image: retailMockup
    }
  ];

  const activeProjects = activeTab === 'development' ? developmentProjects : analyticsProjects;

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 text-left selection:bg-pink-500/20 selection:text-pink-400">
      
      {/* FILTER BUTTON TABS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#1b0b30]/10 dark:border-white/10 pb-6 mb-12 transition-colors duration-300">
        <div>
          <h2 className="text-3xl font-black text-[#1b0b30] dark:text-white tracking-tight transition-colors duration-300">Selected Work</h2>
          <p className="text-[#1b0b30]/50 dark:text-pink-200/50 font-mono text-[10px] uppercase tracking-wider mt-1 transition-colors duration-300">Isolate system directories to view active operations</p>
        </div>
        
        <div className="flex bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/10 p-1 rounded-xl w-max backdrop-blur-sm transition-colors duration-300">
          <button 
            onClick={() => setActiveTab('development')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-sans font-black uppercase tracking-wider transition-all duration-200 ${
              activeTab === 'development' 
                ? 'bg-[#1b0b30] dark:bg-white text-white dark:text-[#1b0b30] shadow-md' 
                : 'text-[#1b0b30]/60 dark:text-pink-200/60 hover:text-[#1b0b30] dark:hover:text-white'
            }`}
          >
            <Code size={12} /> Development ({developmentProjects.length})
          </button>
          <button 
            onClick={() => setActiveTab('analysis')} 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-sans font-black uppercase tracking-wider transition-all duration-200 ${
              activeTab === 'analysis' 
                ? 'bg-[#1b0b30] dark:bg-white text-white dark:text-[#1b0b30] shadow-md' 
                : 'text-[#1b0b30]/60 dark:text-pink-200/60 hover:text-[#1b0b30] dark:hover:text-white'
            }`}
          >
            <BarChart size={12} /> Analytics ({analyticsProjects.length})
          </button>
        </div>
      </div>

      {/* WORK PROJECTS MAIN DISPLAY LOOP */}
      <div className="flex flex-col gap-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="flex flex-col gap-10"
          >
            {activeProjects.map((project, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden border border-[#1b0b30]/10 dark:border-white/10 hover:border-[#1b0b30]/20 dark:hover:border-white/20 transition-all duration-200 shadow-xl relative bg-[#1b0b30]/5 dark:bg-white/5 backdrop-blur-sm"
              >
                {project.isAI && (
                  <div className="absolute top-0 left-0 px-2.5 py-1 bg-pink-500/10 border-b border-r border-[#1b0b30]/10 dark:border-white/10 rounded-tl-xl rounded-br-md z-20 transition-colors duration-300">
                    <span className="text-[8px] font-mono font-bold tracking-widest text-pink-600 dark:text-pink-300 uppercase">AI Node</span>
                  </div>
                )}

                {/* LEFT CONTENT PANEL */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#1b0b30]/10 dark:border-white/10 relative transition-colors duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl md:text-2xl font-black text-[#1b0b30] dark:text-white tracking-tight mb-0.5 transition-colors duration-300">{project.title}</h3>
                    <span className="text-[11px] font-mono font-bold text-pink-600 dark:text-pink-300 uppercase tracking-wider transition-colors duration-300">{project.category}</span>
                  </div>

                  <p className="text-[#1b0b30]/80 dark:text-white/70 text-xs md:text-sm leading-relaxed mb-6 font-normal transition-colors duration-300">
                    {project.desc}
                  </p>

                  {/* MINI BADGES */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[9px] font-mono font-bold px-2 py-1 bg-[#1b0b30]/5 dark:bg-white/5 text-[#1b0b30]/70 dark:text-pink-200/70 border border-[#1b0b30]/5 dark:border-white/5 rounded transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA BUTTON */}
                  <div className="flex w-full mt-auto">
                    {project.liveLink ? (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="flex items-center justify-center gap-2 w-full py-3 bg-[#1b0b30] dark:bg-white text-white dark:text-[#1b0b30] hover:bg-[#1b0b30]/90 dark:hover:bg-pink-100 rounded-xl font-sans font-black text-[10px] uppercase tracking-widest transition-all duration-200 shadow-md text-center"
                      >
                        Live Demo <ExternalLink size={11} />
                      </a>
                    ) : (
                      <div className="text-center w-full py-3 bg-[#1b0b30]/5 dark:bg-white/5 text-[#1b0b30]/40 dark:text-white/40 rounded-xl font-mono text-[9px] uppercase tracking-wider border border-[#1b0b30]/5 dark:border-white/5 transition-colors duration-300">
                        Private Study Node
                      </div>
                    )}
                  </div>
                </div>

                {/* RIGHT MOCKUP CONTAINER - EDGE TO EDGE HORIZONTAL FILL */}
                <div className="lg:col-span-7 bg-[#1b0b30]/5 dark:bg-black/10 min-h-65 md:min-h-85 flex items-center justify-center relative overflow-hidden group transition-colors duration-300">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} Interface`} 
                      className="w-full h-auto block max-h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    />
                  ) : (
                    <div className="w-full h-full min-h-65 md:min-h-85 flex flex-col items-center justify-center text-[#1b0b30]/30 dark:text-white/30 font-mono text-[9px] uppercase tracking-widest gap-2 transition-colors duration-300">
                      <div className="w-5 h-5 rounded-full border border-[#1b0b30]/10 dark:border-white/10 flex items-center justify-center text-[8px] text-[#1b0b30]/40 dark:text-white/40 transition-colors duration-300">
                        {idx + 1}
                      </div>
                      <span>[ {project.title} Interface Node ]</span>
                    </div>
                  )}
                </div>

              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};