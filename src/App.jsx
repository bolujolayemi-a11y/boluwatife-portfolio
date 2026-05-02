import Resume from './components/Resume';
import React, { useState } from 'react';
import { 
  Code, 
  BarChart, 
  User, 
  ExternalLink, 
  Terminal, 
  Database, 
  PieChart, 
  ArrowRight, 
  Smartphone,
  Box, 
  Lightbulb, 
  Code2,
  Globe 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import for the mockup picture
import demoMockup from './assets/demo.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('development');
  const [isResumeOpen, setIsResumeOpen] = useState(false); 

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-100 bg-white/80 backdrop-blur-md border-b border-slate-100 px-4 md:px-6 py-4 flex justify-between items-center">
        <div className="font-black text-xl tracking-tighter">BJ<span className="text-orange-500">.</span></div>
        <div className="flex gap-4 md:gap-8 items-center">
          <a href="#work" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Selected Work</a>
          <a href="https://github.com/bolujolayemi-a11y" target="_blank" rel="noreferrer" className="p-2 bg-slate-50 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
            <User size={18} />
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="px-6 md:px-20 pt-32 md:pt-44 pb-20 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
          </span>
          <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
            Frontend Developer & Data Analyst
          </span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[1.1] md:leading-[0.85] mb-10">
          Building <span className="text-orange-500 italic">Interfaces</span>.<br />
          Analyzing <span className="text-slate-300">Data</span>.
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-12">
          Hi, I'm <span className="text-slate-900 font-bold underline decoration-orange-500 decoration-4 underline-offset-8">Boluwatife Jolayemi</span>. 
          I build high-performance React applications backed by rigorous data-driven decision making.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#work" className="px-8 py-5 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-widest text-[10px] hover:bg-orange-500 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-slate-200">
            View My Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={() => setIsResumeOpen(true)}
            className="px-8 py-5 bg-white border border-slate-200 text-slate-900 rounded-3xl font-black uppercase tracking-widest text-[10px] hover:border-orange-500 transition-all"
          >
            View Resume
          </button>
        </div>
      </header>

      {/* --- CASE STUDY: PANTRY GUIDE --- */}
      <section className="bg-slate-50 py-16 md:py-24 px-6 md:px-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-4">Flagship Project</h2>
            <h3 className="text-3xl md:text-6xl font-black tracking-tight mb-6">Pantry Guide<span className="text-slate-300">.</span></h3>
            <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed mb-8">
              Built to address Nigeria's <span className="text-slate-900 font-bold">₦5 Trillion</span> food waste crisis. An intelligent kitchen assistant that maps local ingredients to global flavors using semantic logic and React.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <StatItem label="Market Problem" value="40M Tonnes Waste" />
              <StatItem label="Tech Stack" value="React + Supabase" />
            </div>
            <a href="https://my-pantry-guide.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full sm:w-auto gap-3 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-orange-500 transition-all">
              Live Demo <ExternalLink size={14} />
            </a>
          </div>
          
          <div className="relative order-1 lg:order-2">
             <div className="aspect-4/3 bg-orange-50 rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-8 border-white shadow-2xl relative z-10 p-4 md:p-6 flex items-center justify-center">
                <img 
                  src={demoMockup} 
                  alt="Pantry Guide Mockup" 
                  className="max-w-full max-h-full object-contain"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-48 md:w-64 h-48 md:h-64 bg-orange-500/10 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </section>

      {/* --- DUAL WORK GRID --- */}
      <section id="work" className="px-6 md:px-20 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">Selected Portfolio</h2>
            <p className="text-slate-400 font-medium italic text-sm md:text-base">Toggle between Development and Data Analysis</p>
          </div>
          <div className="flex bg-slate-100 p-1.5 rounded-[20px] self-start overflow-x-auto max-w-full">
            <TabButton active={activeTab === 'development'} onClick={() => setActiveTab('development')} label="Development" icon={<Code size={14} />} />
            <TabButton active={activeTab === 'analysis'} onClick={() => setActiveTab('analysis')} label="Data Analysis" icon={<BarChart size={14} />} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {activeTab === 'development' ? (
              <>
                <ProjectCard 
                  title="EntryHub Platform"
                  desc="High-logic ticketing system with secure QR verification and real-time state management."
                  tags={['React', 'CSS', 'Vite']}
                  icon={<Terminal />}
                  link="https://entryhub-web-platform-tuwr.vercel.app/"
                />
                <ProjectCard 
                  title="SnippetFlow Platform" 
                  desc="A developer-first code management tool featuring an AI-powered Refinement System. Built-in logic for automated code optimization, step-by-step logic explanations, and a side-by-side comparison modal for seamless code review."
                  tags={['React', 'Supabase', 'AI/LLM', 'Tailwind']}
                  icon={<Code2 />}
                  isAI={true}
                  link="https://snippet-flow-xi.vercel.app/"
                />
              </>
            ) : (
              <>
                <ProjectCard 
                  title="Retail Sales Dashboard"
                  desc="Analyzing 1,000+ transactions to identify supply chain gaps and seasonal purchasing trends."
                  tags={['Streamlit', 'Python', 'Data Viz']}
                  icon={<PieChart />}
                  link="https://retail-performance-dashboard.streamlit.app/"
                />
                <ProjectCard 
                  title="Economic Waste Study"
                  desc="Python-driven analysis of Nigerian agricultural data and post-harvest loss patterns."
                  tags={['Python', 'Pandas', 'Matplotlib']}
                  icon={<Database />}
                />
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-20 md:py-32 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-12">
            Let's build the <span className="text-orange-500">future</span> of the Nigerian tech ecosystem.
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
             <a href="mailto:boluwatifejolayemi@gmail.com" className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3 hover:text-orange-500 transition-colors">
               <Globe size={16} /> Lagos, Nigeria
             </a>
             <a href="https://linkedin.com/in/boluwatife-jolayemi-195593218" target="_blank" rel="noreferrer" className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] flex items-center gap-3 hover:text-orange-500 transition-colors">
               <User size={16} /> Contact Me
             </a>
          </div>
          <div className="mt-16 md:mt-24 pt-12 border-t border-white/5 text-[9px] font-black uppercase tracking-[0.5em] text-white/30">
            Coded with 🧡 by Jolayemi Boluwatife • 2026.1.0
          </div>
        </div>
      </footer>

      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

const StatItem = ({ label, value }) => (
  <div>
    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
    <p className="font-bold text-slate-900 text-sm md:text-base">{value}</p>
  </div>
);

const TabButton = ({ active, onClick, label, icon }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-4 md:px-8 py-3 rounded-[14px] text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${active ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
  >
    {icon} {label}
  </button>
);

const ProjectCard = ({ title, desc, tags, icon, link, isAI }) => (
  <div className="group p-6 md:p-10 bg-white border border-slate-100 rounded-[30px] md:rounded-[50px] hover:border-orange-200 transition-all hover:shadow-2xl hover:shadow-orange-500/5 relative overflow-hidden flex flex-col justify-between h-full">
    {isAI && (
      <div className="absolute top-8 right-8 bg-orange-500 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-[0.1em] z-10 shadow-lg shadow-orange-500/20">
        AI Powered
      </div>
    )}
    <div>
      <div className="w-12 h-12 md:w-14 md:h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-6 md:mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
        {icon}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-300 px-3 py-1 border border-slate-100 rounded-full">{tag}</span>
        ))}
      </div>
      <h4 className="text-xl md:text-2xl font-black tracking-tight mb-3 text-slate-900">{title}</h4>
      <p className="text-slate-500 font-medium leading-relaxed mb-6 text-sm md:text-base">{desc}</p>
    </div>
    {link && (
      <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-600 hover:text-orange-700 transition-colors">
        Live Link <ExternalLink size={14} />
      </a>
    )}
  </div>
);

export default Portfolio;