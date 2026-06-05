import React from 'react';
import { Terminal, Layout, Cpu, BookOpen } from 'lucide-react';

export const AboutView = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 text-left selection:bg-pink-500/20 selection:text-pink-400">
      
      {/* SECTION 1: HEADER & BIOGRAPHY SPLIT */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-[#1b0b30] tracking-tight mb-4">
          Crafting <span className="text-pink-600 italic font-serif font-normal">Modern</span> <br className="sm:hidden" /> Web Interfaces
        </h2>
        <p className="text-[#1b0b30]/60 font-sans text-base md:text-lg tracking-wide max-w-2xl mx-auto">
          Frontend Developer & Data Analyst focused on clean UI, performance, and data integrity.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
        {/* Left Column: Journey */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-pink-600"></span>
            <h3 className="text-xl md:text-2xl font-bold text-[#1b0b30] tracking-tight">My Journey</h3>
          </div>
          <div className="space-y-5 text-[#1b0b30]/80 text-sm md:text-base leading-relaxed font-normal">
            <p>
              I started my journey in web development with a strong commitment to building clean, accessible, and intuitive user interfaces. I focus on translating complex design layouts into clean web software using modern frontend choices.
            </p>
            <p>
              I center my practice deeply around <span className="text-pink-600 font-semibold">React.js</span> and <span className="text-pink-600 font-semibold">Tailwind CSS</span>, prioritizing component simplicity, structured local state handling, and minimalist UI layouts.
            </p>
            <p>
              Simultaneously, my technical base extends to extracting insights from raw information structures, allowing me to build clear paths between client presentation layers and database logic.
            </p>
          </div>
        </div>

        {/* Right Column: Approach */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-0.5 bg-pink-600"></span>
            <h3 className="text-xl md:text-2xl font-bold text-[#1b0b30] tracking-tight">My Approach</h3>
          </div>
          <div className="space-y-5 text-[#1b0b30]/80 text-sm md:text-base leading-relaxed font-normal">
            <p>
              I follow a strict <span className="text-pink-600 font-semibold">clean and minimalist UI/UX philosophy</span>. I believe interfaces should look beautiful and clear without overwhelming user attention, keeping complexity managed behind elegant architectures.
            </p>
            <p>
              Responsive breakpoint synchronization, clean styles, and modular component pieces are always built-in defaults in my standard development pipeline.
            </p>
            <p>
              I thrive on continuous code exploration—consistently testing reliable database layers like Supabase, structured frameworks, and accessible UI layouts.
            </p>
          </div>
        </div>
      </div>


      {/* SECTION 2: TECHNICAL STACK MATRIX */}
      <div className="mb-24">
        <h3 className="text-2xl md:text-3xl font-bold text-[#1b0b30] tracking-tight text-center mb-12">
          Technical Stack
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StackCard 
            title="Frontend Core" 
            icon={<Terminal size={16} className="text-pink-600" />}
            skills={['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite Core']}
          />
          <StackCard 
            title="UI & Styling" 
            icon={<Layout size={16} className="text-pink-600" />}
            skills={['HTML5 / CSS3', 'Component Architecture', 'Responsive Design', 'Minimalist UI/UX']}
          />
          <StackCard 
            title="Backend & Data Core" 
            icon={<Cpu size={16} className="text-pink-600" />}
            skills={['Supabase Integration', 'Appwrite Database', 'Python Programming', 'Pandas Engine']}
          />
          <StackCard 
            title="Current Focus" 
            icon={<BookOpen size={16} className="text-pink-600" />}
            skills={['Advanced Data Visualization', 'React Hook Optimization', 'AI API Integration', 'State Engines']}
          />
        </div>
      </div>


      {/* SECTION 3: CURRENT FOCUS PANEL & LIVE METRICS */}
      <div className="mb-12">
        <div className="bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-2xl p-8 md:p-12 text-center max-w-5xl mx-auto mb-16 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-[#1b0b30] tracking-tight mb-8">Current Focus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left text-[#1b0b30]/80 text-sm md:text-base leading-relaxed">
            <div>
              <h4 className="text-pink-600 font-semibold text-base mb-2">Modern Component Architecture</h4>
              <p>Constructing high-speed, interactive, and completely fluid interfaces by leveraging React state mechanics combined with flexible Tailwind utility parameters.</p>
            </div>
            <div>
              <h4 className="text-pink-600 font-semibold text-base mb-2">UI Performance Optimization</h4>
              <p>Refining asset load speeds, building scalable layout states, and guaranteeing clean data delivery across both web builds and analytics projects.</p>
            </div>
          </div>
        </div>

        {/* CTA BUTTON: Routes to Projects View */}
        <div className="flex justify-center mb-20">
          <button 
            onClick={() => onNavigate('work')}
            className="px-8 py-4 bg-[#1b0b30] hover:bg-[#1b0b30]/90 text-white font-bold uppercase tracking-widest text-[10px] rounded-2xl transition-all duration-200 shadow-xl shadow-black/5 active:scale-98 cursor-pointer"
          >
            View My Projects →
          </button>
        </div>

        {/* SYSTEM PERFORMANCE METRICS LOGGER PANEL */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto pt-8 border-t border-[#1b0b30]/10 text-center">
          <MetricBlock value="07" label="Months of Experience" />
          <MetricBlock value="07" label="Frontend Projects" />
          <MetricBlock value="01" label="Data Analytics Project" />
          <MetricBlock value="150+" label="Code Commits" />
        </div>
      </div>

    </div>
  );
};

/* REUSABLE MINI SKILL CARD SYSTEM */
const StackCard = ({ title, icon, skills }) => (
  <div className="bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl p-6 duration-300 hover:border-pink-500/40 backdrop-blur-sm">
    <div className="flex items-center gap-2 mb-6">
      {icon}
      <h4 className="text-[#1b0b30] font-bold text-sm md:text-base tracking-wide">{title}</h4>
    </div>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2.5 text-[#1b0b30]/70 text-xs md:text-sm font-normal">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-600"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

/* REUSABLE METRIC TRACKING ROW COMPONENT */
const MetricBlock = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center p-4">
    <span className="text-4xl md:text-5xl font-black text-[#1b0b30] mb-2zm">{value}</span>
    <span className="text-[10px] md:text-xs font-mono font-bold text-[#1b0b30]/50 uppercase tracking-widest max-w-37.5 leading-tight">
      {label}
    </span>
  </div>
);