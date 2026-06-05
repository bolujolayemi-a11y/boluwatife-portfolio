import React from 'react';

export const Home = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-left select-none min-h-[80vh] flex flex-col justify-center">
      
      {/* 1. BADGE LABEL */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b0b30]/5 border border-[#1b0b30]/10 mb-8 w-max backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-pink-600 animate-pulse"></span>
        <span className="text-[10px] font-sans font-black uppercase tracking-[0.2em] text-[#1b0b30]/80">
          Frontend Developer & Data Analyst
        </span>
      </div>

      {/* 2. LOCKED DETAILED CONTRAST HEADLINE */}
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] text-[#1b0b30] mb-10">
        Building <span className="text-pink-600 italic font-serif font-normal">Interfaces</span>.
        <br />
        Analyzing <span className="text-[#1b0b30]/30 font-serif font-normal">Data</span>.
      </h1>

      {/* 3. INTRODUCTORY PARAGRAPH */}
      <p className="text-base sm:text-lg text-[#1b0b30]/80 max-w-2xl font-normal leading-relaxed mb-12">
        Hi, I'm{' '}
        <span className="text-[#1b0b30] font-bold underline decoration-pink-600 decoration-4 underline-offset-8">
          Boluwatife Jolayemi
        </span>
        . I build high-performance React applications backed by data-driven logic.
      </p>

      {/* 4. SOLID CONTRAST ACTIONS */}
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <button 
          onClick={() => onNavigate('work')}
          className="px-8 py-4 bg-[#1b0b30] hover:bg-[#1b0b30]/90 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all duration-200 flex items-center justify-center gap-2 shadow-xl shadow-black/5 active:scale-98 cursor-pointer"
        >
          View My Projects <span className="text-xs">→</span>
        </button>
        <button 
          onClick={() => onNavigate('resume')}
          className="px-8 py-4 bg-transparent border border-[#1b0b30]/20 text-[#1b0b30] hover:bg-[#1b0b30]/5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all duration-200 active:scale-98 cursor-pointer"
        >
          View Resume
        </button>
      </div>

      {/* 5. MINIMAL SOCIAL FOOTER DISPATCH CHANNELS */}
      <div className="flex gap-4 border-t border-[#1b0b30]/10 pt-6 w-max">
        {[
          {
            name: 'GitHub',
            url: 'https://github.com/bolujolayemi-a11y',
            icon: (
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.57-.18-3.14-.79-3.14-3.42 0-.75.27-1.37.71-1.85-.07-.17-.31-.88.07-1.85 0 0 .58-.18 1.91.71A6.5 6.5 0 0 1 8 3.44c.51.02 1.03.07 1.52.21 1.33-.9 1.91-.71 1.91-.71.39.97.14 1.68.07 1.85.44.48.71 1.1 0 3.42 0 2.63-1.57 3.23-3.14 3.41.25.21.47.63.47 1.28 0 .93-.01 1.68-.01 1.92 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            ),
            hoverColor: 'hover:text-black'
          },
          {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/boluwatife-jolayemi-195593218/',
            icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            ),
            hoverColor: 'hover:text-[#0077B5]'
          },
          {
            name: 'WhatsApp',
            url: 'https://wa.me/2349066237453',
            icon: (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.847.001-2.633-1.03-5.107-2.905-6.98-1.876-1.874-4.374-2.906-7.01-2.907-5.438 0-9.863 4.414-9.866 9.848-.001 1.734.463 3.427 1.345 4.927l-.993 3.626 3.741-.98z"/>
              </svg>
            ),
            hoverColor: 'hover:text-[#25D366]'
          }
        ].map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className={`w-10 h-10 bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl flex items-center justify-center text-[#1b0b30]/50 ${social.hoverColor} hover:border-[#1b0b30]/20 hover:scale-105 transition-all duration-200 relative group backdrop-blur-sm`}
          >
            {/* Tooltip Label */}
            <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/90 border border-white/10 text-white font-mono text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded pointer-events-none transform translate-y-1 group-hover:translate-y-0 z-30">
              {social.name}
            </div>

            {social.icon}
          </a>
        ))}
      </div>

    </div>
  );
};