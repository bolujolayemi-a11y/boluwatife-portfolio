import Resume from './components/Resume';
import React, { useState, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { 
  Code, 
  BarChart, 
  User, 
  ExternalLink, 
  Terminal, 
  Database, 
  PieChart, 
  ArrowRight, 
  ArrowLeft,
  Code2,
  ShoppingBag,
  Globe,
  Sparkles,
  HeartPulse 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import for the mockup picture
import demoMockup from './assets/demo.png';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('development');
  const [isResumeOpen, setIsResumeOpen] = useState(false); 
  
  // Ref to track the horizontal slider container for custom navigation buttons
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      <Analytics />
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="font-black text-xl tracking-tighter">BJ<span className="text-orange-500">.</span></div>
        <div className="flex gap-8 items-center">
          <a href="#work" className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">Selected Work</a>
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
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-600">
            Frontend Developer & Data Analyst
          </span>
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] mb-10 text-slate-900">
          Building <span className="text-orange-500 italic">Interfaces</span>.<br />
          Analyzing <span className="text-slate-300">Data</span>.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed mb-12">
          Hi, I'm <span className="text-slate-900 font-bold underline decoration-orange-500 decoration-4 underline-offset-8">Boluwatife Jolayemi</span>. 
          I build high-performance React applications backed by data-driven decision making.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#work" className="px-8 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-orange-500 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-slate-200">
            View My Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <button 
            onClick={() => setIsResumeOpen(true)}
            className="px-8 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:border-orange-500 transition-all"
          >
            View Resume
          </button>
        </div>
      </header>

      {/* --- CASE STUDY: PANTRY GUIDE --- */}
      <section className="bg-slate-50 py-16 md:py-24 px-6 md:px-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-500 mb-4">Flagship Project</h2>
            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-slate-900">Pantry Guide<span className="text-slate-300">.</span></h3>
            <p className="text-slate-600 font-medium text-base md:text-lg leading-relaxed mb-8">
              Built to address Nigeria's <span className="text-slate-900 font-bold">₦5 Trillion</span> food waste crisis. An intelligent kitchen assistant that maps local ingredients to global flavors using semantic logic and React.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <StatItem label="Market Problem" value="40M Tonnes Waste" />
              <StatItem label="Tech Stack" value="React + Supabase" />
            </div>
            <a href="https://my-pantry-guide.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest hover:border-orange-500 transition-all">
              Live Demo <ExternalLink size={14} />
            </a>
          </div>
          
          <div className="relative">
             <div className="aspect-square md:aspect-4/3 bg-orange-50 rounded-[40px] overflow-hidden border-8 border-white shadow-2xl relative z-10 p-6 flex items-center justify-center">
                <img 
                  src={demoMockup} 
                  alt="Pantry Guide Mockup" 
                  className="max-w-full max-h-full object-contain"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl z-0" />
          </div>
        </div>
      </section>

      {/* --- SLIDING WORK CAROUSEL SECTION --- */}
      <section id="work" className="pl-6 md:pl-20 py-20 md:py-32 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pr-6 md:pr-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">Selected Work</h2>
            <p className="text-slate-400 font-medium italic text-sm">Slide horizontally to explore modules</p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            {/* Tab Swappers */}
            <div className="flex bg-slate-100 p-1 rounded-[18px]">
              <TabButton active={activeTab === 'development'} onClick={() => setActiveTab('development')} label="Development" icon={<Code size={14} />} />
              <TabButton active={activeTab === 'analysis'} onClick={() => setActiveTab('analysis')} label="Data Analysis" icon={<BarChart size={14} />} />
            </div>
            
            {/* Navigation Slider Arrow Buttons */}
            <div className="hidden sm:flex gap-2">
              <button 
                onClick={() => scrollSlider('left')}
                className="p-3 border border-slate-200 rounded-xl hover:border-orange-500 hover:text-orange-500 bg-white transition-all text-slate-400"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={() => scrollSlider('right')}
                className="p-3 border border-slate-200 rounded-xl hover:border-orange-500 hover:text-orange-500 bg-white transition-all text-slate-400"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Slider Horizontal Viewport Container Frame */}
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-8 pr-6 md:pr-20 scrollbar-none snap-x snap-mandatory"
            style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
          >
            {activeTab === 'development' ? (
              <>
                <div className="snap-start shrink-0 w-77.5 sm:w-105">
                  <ProjectCard 
                    title="Alaafia Platform"
                    desc="A warm, professional health education companion built with deep cultural awareness. Translates complex diagnostics, local nutrition profiles, and healthcare realities into structured guidance."
                    tags={['React', 'Appwrite BaaS', 'Groq API']}
                    icon={<HeartPulse />}
                    link="https://alaafia-xi.netlify.app"
                    isSlidingBadge={true}
                    badgeText="Live Production"
                  />
                </div>
                <div className="snap-start shrink-0 w-77.5 sm:w-105">
                  <ProjectCard 
                    title="EntryHub Platform"
                    desc="High-logic ticketing system with secure QR verification metrics and real-time dashboard transaction state management."
                    tags={['React', 'CSS', 'Vite']}
                    icon={<Terminal />}
                    link="https://entryhub-web-platform-tuwr.vercel.app/"
                  />
                </div>
                <div className="snap-start shrink-0 w-77.5 sm:w-105">
                  <ProjectCard 
                    title="SnippetFlow Platform" 
                    desc="Developer-first code management tool with an AI-powered Refinement System, step-by-step logic explanations, and side-by-side reviews."
                    tags={['React', 'Supabase', 'AI/LLM']}
                    icon={<Code2 />}
                    isAI={true}
                    link="https://snippet-flow-xi.vercel.app/"
                  />
                </div>
                <div className="snap-start shrink-0 w-77.5 sm:w-105">
                  <ProjectCard 
                    title="Vendra Commerce"
                    desc="A boutique multi-tenant e-commerce engine for Nigerian entrepreneurs. Features a high-end inventory vault, Paystack hooks, and subdomains."
                    tags={['React', 'Supabase', 'Paystack']}
                    icon={<ShoppingBag />} 
                    link="https://vendra.name.ng"
                  />
                </div>
                <div className="snap-start shrink-0 w-77.5 sm:w-105">
                  <ProjectCard 
                    title="PixelStore Pro"
                    desc="A premium generative design engine that uses Llama 3.3 to instantly build high-end e-commerce identities, brand manifestos, and catalogs."
                    tags={['React 19', 'Groq/LLM', 'Tailwind']}
                    icon={<Sparkles />}
                    isAI={true}
                    link="https://pixel-store-mu.vercel.app/"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="snap-start shrink-0 w-77.5 sm:w-105">
                  <ProjectCard 
                    title="Retail Sales Dashboard"
                    desc="Analyzing 1,000+ transactions to identify supply chain gaps, monthly revenue trends, and operations."
                    tags={['Streamlit', 'Python', 'Data Viz']}
                    icon={<PieChart />}
                    link="https://retail-performance-dashboard.streamlit.app/"
                  />
                </div>
                <div className="snap-start shrink-0 w-77.5 sm:w-105">
                  <ProjectCard 
                    title="Economic Waste Study"
                    desc="Python-driven analysis of Nigerian agricultural data, operational variables, and post-harvest loss patterns."
                    tags={['Python', 'Pandas', 'Matplotlib']}
                    icon={<Database />}
                  />
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-white py-16 px-6 md:px-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 leading-[1.1]">
            Building the <span className="text-orange-500">future</span> of the Nigerian tech ecosystem.
          </h2>
          
          <div className="flex flex-col items-center gap-6 mb-12">
             <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
               <a href="mailto:boluwatifejolayemi@gmail.com" className="text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3 hover:text-orange-500 transition-colors">
                 <Globe size={16} className="text-orange-500" /> Lagos, Nigeria
               </a>
               <a href="https://linkedin.com/in/boluwatife-jolayemi-195593218" target="_blank" rel="noreferrer" className="text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-3 hover:text-orange-500 transition-colors">
                 <User size={16} className="text-orange-500" /> LinkedIn
               </a>
             </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-[9px] font-black uppercase tracking-[0.5em] text-white/30">
            Coded by Jolayemi Boluwatife • 2026.1.0
          </div>
        </div>
      </footer>

      <Resume isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

const StatItem = ({ label, value }) => (
  <div>
    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">{label}</p>
    <p className="font-bold text-slate-900 text-sm whitespace-nowrap">{value}</p>
  </div>
);

const TabButton = ({ active, onClick, label, icon }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 rounded-[14px] text-[10px] font-black uppercase tracking-widest transition-all ${active ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
  >
    {icon} {label}
  </button>
);

const ProjectCard = ({ title, desc, tags, icon, link, isAI, isSlidingBadge, badgeText }) => (
  <div className="group p-8 md:p-10 bg-white border border-slate-100 rounded-[40px] hover:border-orange-200 transition-all hover:shadow-2xl hover:shadow-orange-500/5 relative overflow-hidden flex flex-col justify-between h-full min-h-95">
    {isAI && (
      <div className="absolute top-6 right-6 bg-orange-500 text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-10">
        AI Powered
      </div>
    )}

    {/* Sliding Shimmer Infinite Motion Animation Container */}
    {isSlidingBadge && (
      <div className="absolute top-6 right-6 overflow-hidden bg-emerald-500 rounded-full px-3 py-1 z-10">
        <motion.div
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"
        />
        <span className="relative text-white text-[8px] font-black uppercase tracking-widest">
          {badgeText || "Active"}
        </span>
      </div>
    )}

    <div>
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all">
        {icon}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-slate-300 px-3 py-1 border border-slate-100 rounded-full">{tag}</span>
        ))}
      </div>
      <h4 className="text-xl md:text-2xl font-black tracking-tight mb-3 text-slate-900">{title}</h4>
      <p className="text-slate-500 font-medium leading-relaxed mb-6 text-sm md:text-base">{desc}</p>
    </div>
    {link && (
      <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-orange-600 hover:text-orange-700 transition-colors mt-auto">
        Live Link <ExternalLink size={14} />
      </a>
    )}
  </div>
);

export default Portfolio;
