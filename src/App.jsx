import Resume from './components/Resume';
import React, { useState, useRef } from 'react';
import { 
  Code, BarChart, User, ExternalLink, Terminal, Database, 
  PieChart, ArrowRight, ArrowLeft, Code2, ShoppingBag, 
  Globe, Sparkles, HeartPulse, Brain 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import demoMockup from './assets/deno.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('development');
  const [isResumeOpen, setIsResumeOpen] = useState(false); 
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div 
    className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-orange-100 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="font-black text-xl tracking-tighter">BJ<span className="text-orange-500">.</span></div>
        <div className="flex gap-8 items-center">
          <a href="#work" 
          className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Selected Work</a>
          <a href="https://github.com/bolujolayemi-a11y" 
          target="_blank" rel="noreferrer" className="p-2 bg-slate-50 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
            <User size={18} />
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="px-6 md:px-20 pt-32 md:pt-44 pb-20 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-8">
          <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span></span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">Frontend Developer & Data Analyst</span>
        </motion.div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-10">Building <span className="text-orange-500 italic">Interfaces</span>.<br /> Analyzing <span className="text-slate-300">Data</span>.</h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-12">
          Hi, I'm <span className="text-slate-900 font-bold underline decoration-orange-500 decoration-4 underline-offset-8">Boluwatife Jolayemi</span>. I build high-performance React applications backed by data-driven logic.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#work" className="px-8 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-orange-500 transition-all flex items-center justify-center gap-3 group shadow-xl">
            View My Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button onClick={() => setIsResumeOpen(true)} className="px-8 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:border-orange-500 transition-all">View Resume</button>
        </div>
      </header>

      {/* STATNEXUS FEATURED SECTION */}
      <section className="py-20 px-6 md:px-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-1">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-sky-400 mb-4">Featured Project</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tight mb-6">StatNexus AI<span className="text-slate-600">.</span></h3>
            <p className="text-slate-400 font-medium text-lg leading-relaxed mb-8">
              Precision exam preparation for medical professionals. Built to turn complex clinical datasets into simplified, AI-explained learning paths.
            </p>
            <a href="https://statnexus.netlify.app/" target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all inline-block">Explore Platform</a>
          </div>
          <div className="order-2 bg-slate-800 rounded-[40px] p-6 flex items-center justify-center border-8 border-slate-700 shadow-2xl">
              <img 
              src={demoMockup} 
              alt="StatNexus AI Mockup" 
              className="w-full h-auto object-contain rounded-2xl"
           />
          </div>
        </div>
      </section>

      {/* WORK CAROUSEL */}
      <section id="work" className="pl-6 md:pl-20 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pr-6 md:pr-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Selected Work</h2>
            <p className="text-slate-400 font-medium italic text-sm">Slide horizontally to explore modules</p>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-[18px]">
            <TabButton active={activeTab === 'development'} onClick={() => setActiveTab('development')} label="Development" icon={<Code size={14} />} />
            <TabButton active={activeTab === 'analysis'} onClick={() => setActiveTab('analysis')} label="Data Analysis" icon={<BarChart size={14} />} />
          </div>
        </div>

        <motion.div ref={sliderRef}
           className="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory"
           style={{ scrollBehavior: 'smooth' }}
          >
           {activeTab === 'development' ? (
            <>
            {/* Featured Platforms */}
            <div 
            className="snap-start shrink-0 w-80 sm:w-96">
              <ProjectCard 
              title="StatNexus AI" 
              desc="Professional-grade nursing exam prep with adaptive AI-driven questioning." tags={['React', 'Supabase', 'Groq AI']} 
              icon={<Brain size={20} />} isAI={true} 
              link="https://statnexus.netlify.app/" 
              />
            </div>
            <div 
            className="snap-start shrink-0 w-80 sm:w-96">
              <ProjectCard
               title="Alaafia Platform" 
               desc="Culturally aware health education companion with local nutrition mapping." tags={['React', 'Appwrite']} 
               icon={<HeartPulse size={20} />} 
               link="https://alaafia-xi.netlify.app" isSlidingBadge={true} badgeText="Live" 
               />
            </div>
            
            {/* Core Development Projects */}
            <div 
            className="snap-start shrink-0 w-80 sm:w-96">
              <ProjectCard 
              title="SnippetFlow" 
              desc="Developer-first code management tool with AI-powered refinement." 
              tags={['React', 'Groq']} 
              icon={<Code2 size={20} />} isAI={true} 
              link="https://snippet-flow-xi.vercel.app/" 
              />
            </div>

            <div className="snap-start shrink-0 w-80 sm:w-96">
              <ProjectCard title="Pantry Guide" desc="Intelligent kitchen assistant mapping ingredients to global flavors." tags={['React', 'Vercel']} icon={<HeartPulse size={20} />} link="https://my-pantry-guide.vercel.app/" />
            </div>
            
            <div 
            className="snap-start shrink-0 w-80 sm:w-96">
              <ProjectCard 
              title="Vendra Commerce" 
              desc="Multi-tenant e-commerce engine for Nigerian entrepreneurs." 
              tags={['Next.js', 'Supabase']} 
              icon={<ShoppingBag size={20} />} 
              link="https://vendra.name.ng" 
              />
            </div>
            <div 
            className="snap-start shrink-0 w-80 sm:w-96">
              <ProjectCard 
              title="PixelStore Pro" 
              desc="Generative design engine for high-end e-commerce identities." 
              tags={['React 19', 'LLM']} 
              icon={<Sparkles size={20} />} isAI={true} 
              link="https://pixel-store-mu.vercel.app/" 
              />
            </div>
            <div 
            className="snap-start shrink-0 w-80 sm:w-96">
              <ProjectCard 
              title="EntryHub Platform" 
              desc="High-logic ticketing system with secure QR verification metrics." 
              tags={['React', 'Vite']} 
              icon={<Terminal size={20} />} 
              link="https://entryhub-web-platform-tuwr.vercel.app/" 
              />
            </div>
          </>
        ) : (
          <>
            {/* Data Analysis Projects */}
            <div className="snap-start shrink-0 w-80 sm:w-96">
              <ProjectCard title="Retail Sales Dashboard" desc="Analysis of 1,000+ transactions to identify supply chain gaps." tags={['Python', 'Streamlit']} icon={<PieChart size={20} />} link="https://retail-performance-dashboard.streamlit.app/" />
            </div>
            <div className="snap-start shrink-0 w-80 sm:w-96">
              <ProjectCard title="Economic Waste Study" desc="Analysis of Nigerian agricultural data and loss patterns." tags={['Python', 'Pandas']} icon={<Database size={20} />} />
            </div>
          </>
        )}
        </motion.div>
      </section>

      <footer className="bg-slate-950 text-white py-16 px-6 text-center">
        <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/30">Coded by Jolayemi Boluwatife • 2026</p>
      </footer>
      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

const TabButton = ({ active, onClick, label, icon }) => (
  <button onClick={onClick} className={`flex items-center gap-2 px-6 py-3 rounded-[14px] text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'bg-white shadow-sm' : 'text-slate-400'}`}>
    {icon} {label}
  </button>
);

const ProjectCard = ({ title, desc, tags, icon, link, isAI, isSlidingBadge, badgeText }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-[40px] h-96 flex flex-col justify-between">
    <div>
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-8">{icon}</div>
      <h4 className="text-xl font-black mb-3">{title}</h4>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
    {link && <a href={link} className="text-[10px] font-black uppercase text-orange-600">Live Link <ExternalLink size={14} className="inline" /></a>}
  </div>
);

export default Portfolio;