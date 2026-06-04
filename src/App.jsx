import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { Home } from './components/Home';
import { AboutView } from './components/AboutView';
import { Resume } from './components/Resume';
import { WorkView } from './components/WorkView';
import { ContactView } from './components/ContactView';
import { ScheduleView } from './components/ScheduleView';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleViewChange = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    /* THE GRADIENT CANVAS: From deep dark purple to light pink across the whole site */
    <div className="min-h-screen bg-linear-to-br from-[#1b0b30] via-[#4c1256] to-[#693553] font-sans text-white/90 overflow-x-hidden antialiased">
      
      {/* HEADER NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#1b0b30]/40 backdrop-blur-md border-b border-white/10 px-6 py-5 flex justify-between items-center">
        <button 
          onClick={() => handleViewChange('home')} 
          className="font-black text-2xl tracking-tighter text-white focus:outline-none"
        >
          BJ<span className="text-pink-300">.</span>
        </button>
        
        {/* Desktop Links Switcher */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-8 mr-2">
            {['home', 'about', 'resume', 'work', 'contact'].map((view) => (
              <button
                key={view}
                onClick={() => handleViewChange(view)}
                className={`text-[10px] font-sans font-bold uppercase tracking-widest transition-colors focus:outline-none relative py-1 ${
                  currentView === view && currentView !== 'schedule' ? 'text-white' : 'text-pink-200/60 hover:text-white'
                }`}
              >
                {view === 'home' ? 'Home' : view === 'about' ? 'About Me' : view}
                {currentView === view && (
                  <motion.span 
                    layoutId="activeUnderline" 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" 
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* SCHEDULE MEETING TRIGGER ROUTER */}
          <button 
            onClick={() => handleViewChange('schedule')}
            className={`px-4 py-2 text-[10px] uppercase font-bold tracking-wider font-sans rounded-lg transition-all border ${
              currentView === 'schedule' 
                ? 'bg-white text-[#1b0b30] border-white' 
                : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
            }`}
          >
            Schedule a Meeting
          </button>

          {/* FIXED: "Hire Me" now routes directly to your custom view matching image_ecbe4f.png */}
          <button 
            onClick={() => handleViewChange('contact')}
            className={`px-4 py-2 text-[10px] uppercase font-bold tracking-wider font-sans rounded-lg transition-all border ${
              currentView === 'contact'
                ? 'bg-white text-[#1b0b30] border-white'
                : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
            }`}
          >
            Hire Me
          </button>
          </div>
        </div>

        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white p-2 focus:outline-none">
          <Menu size={24} />
        </button>
      </nav>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#1b0b30]/95 backdrop-blur-lg z-50 p-6 flex flex-col border-l border-white/10 shadow-2xl"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="font-black text-2xl text-white">BJ<span className="text-pink-300">.</span></div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-pink-200 hover:text-white focus:outline-none">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 text-left pl-4 mb-12">
              {['home', 'about', 'resume', 'work', 'contact', 'schedule'].map((view) => (
                <button
                  key={view}
                  onClick={() => handleViewChange(view)}
                  className={`text-xl font-bold uppercase tracking-wider text-left transition-colors focus:outline-none ${
                    currentView === view ? 'text-pink-300' : 'text-pink-200/70 hover:text-white'
                  }`}
                >
                  {view === 'home' ? 'Home' : view === 'about' ? 'About Me' : view === 'schedule' ? 'Schedule Meeting' : view}
                </button>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-3 pl-4">
              <button 
                onClick={() => handleViewChange('schedule')}
                className="text-center w-full py-3 bg-white/5 border border-white/10 text-white font-sans font-bold text-[11px] uppercase tracking-wider rounded-lg"
              >
                Schedule a Meeting
              </button>
              {/* FIXED MOBILE ROUTE */}
              <button 
                onClick={() => handleViewChange('contact')}
                className="text-center w-full py-3 bg-white/10 border border-white/20 text-white font-sans font-bold text-[11px] uppercase tracking-wider rounded-lg"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMPONENT VIEWPORTS */}
      <main className="min-h-[calc(100vh-140px)] pt-24 md:pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {currentView === 'home' && <Home onNavigate={handleViewChange} />}
            {currentView === 'about' && <AboutView onNavigate={handleViewChange} />}
            {currentView === 'resume' && <Resume />}
            {currentView === 'work' && <WorkView />}
            {currentView === 'contact' && <ContactView onNavigate={handleViewChange} />}
            {currentView === 'schedule' && <ScheduleView onNavigate={handleViewChange} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/10 py-8 px-6 text-center bg-[#1b0b30]/20">
        <p className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
          SYS_STATUS: • CODED BY JOLAYEMI BOLUWATIFE • 2026
        </p>
      </footer>
    </div>
  );
};

export default App;