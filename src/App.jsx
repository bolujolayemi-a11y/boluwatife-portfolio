import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';

import { Home } from './components/Home';
import { AboutView } from './components/AboutView';
import { Resume } from './components/Resume';
import { WorkView } from './components/WorkView';
import { ContactView } from './components/ContactView';
import { ScheduleView } from './components/ScheduleView';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false); 

  const handleViewChange = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    /* DYNAMIC CANVAS WRAPPER: Fixed to enable the 'dark' prefix class and restored your sleek gradient colors */
    <div 
      className={`min-h-screen font-sans overflow-x-hidden antialiased transition-colors duration-300 ${
        isLightMode 
          ? 'light bg-[#fcfaf2] text-[#5d477a]' 
          : 'dark bg-linear-to-br from-[#9a7cc2] via-[#c574d3] to-[#b44f8a] text-white/90'
      }`}
    >
      
      {/* HEADER NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b px-6 py-5 flex justify-between items-center transition-colors duration-300 ${
        isLightMode 
          ? 'bg-[#fcfaf2]/60 border-[#1b0b30]/10' 
          : 'bg-[#1b0b30]/40 border-white/10'
      }`}>
        <button 
          onClick={() => handleViewChange('home')} 
          className={`font-black text-2xl tracking-tighter focus:outline-none transition-colors ${
            isLightMode ? 'text-[#7a5ca0]' : 'text-white'
          }`}
        >
          BJ<span className="text-pink-400">.</span>
        </button>
        
        {/* Desktop Links Switcher */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-8 mr-2">
            {['home', 'about', 'resume', 'work', 'contact'].map((view) => (
              <button
                key={view}
                onClick={() => handleViewChange(view)}
                className={`text-[10px] font-sans font-bold uppercase tracking-widest transition-colors focus:outline-none relative py-1 ${
                  currentView === view && currentView !== 'schedule'
                    ? (isLightMode ? 'text-[#7b5da3]' : 'text-white')
                    : (isLightMode ? 'text-[#1b0b30]/50 hover:text-[#69508a]' : 'text-pink-200/60 hover:text-white')
                }`}
              >
                {view === 'home' ? 'Home' : view === 'about' ? 'About Me' : view}
                {currentView === view && (
                  <motion.span 
                    layoutId="activeUnderline" 
                    className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${
                      isLightMode ? 'bg-[#4f3d66]' : 'bg-white'
                    }`} 
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleViewChange('schedule')}
              className={`px-4 py-2 text-[10px] uppercase font-bold tracking-wider font-sans rounded-lg transition-all border ${
                currentView === 'schedule' 
                  ? (isLightMode ? 'bg-[#1b0b30] text-white border-[#1b0b30]' : 'bg-white text-[#1b0b30] border-white') 
                  : (isLightMode ? 'bg-[#1b0b30]/5 text-[#1b0b30] border-[#1b0b30]/10 hover:bg-[#1b0b30]/10' : 'bg-white/5 text-white border-white/10 hover:bg-white/10')
              }`}
            >
              Schedule a Meeting
            </button>

            <button 
              onClick={() => handleViewChange('contact')}
              className={`px-4 py-2 text-[10px] uppercase font-bold tracking-wider font-sans rounded-lg transition-all border ${
                currentView === 'contact'
                  ? (isLightMode ? 'bg-[#1b0b30] text-white border-[#1b0b30]' : 'bg-white text-[#1b0b30] border-white')
                  : (isLightMode ? 'bg-[#1b0b30]/10 text-[#1b0b30] border-[#1b0b30]/20' : 'bg-white/10 text-white border-white/20 hover:bg-white/20')
              }`}
            >
              Hire Me
            </button>
          </div>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(true)} 
          className={`md:hidden p-2 focus:outline-none transition-colors ${isLightMode ? 'text-[#1b0b30]' : 'text-white'}`}
        >
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
            className={`fixed inset-y-0 right-0 w-full max-w-xs z-50 p-6 flex flex-col border-l shadow-2xl transition-colors duration-300 ${
              isLightMode ? 'bg-[#fcfaf2]/95 border-[#1b0b30]/10' : 'bg-[#1b0b30]/95 border-white/10'
            }`}
          >
            <div className="flex justify-between items-center mb-16">
              <div className={`font-black text-2xl transition-colors ${isLightMode ? 'text-[#7a5ca0]' : 'text-white'}`}>
                BJ<span className="text-pink-400">.</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className={`focus:outline-none transition-colors ${isLightMode ? 'text-[#1b0b30]/70 hover:text-[#1b0b30]' : 'text-pink-200 hover:text-white'}`}
              >
                <X size={24} />
              </button>
            </div>
            
            {/* FIXED: Mobile Navigation links text configuration matching the desktop hierarchy style specs */}
            <div className="flex flex-col gap-6 text-left pl-4 mb-12">
              {['home', 'about', 'resume', 'work', 'contact'].map((view) => (
                <button
                  key={view}
                  onClick={() => handleViewChange(view)}
                  className={`text-[11px] font-sans font-black uppercase tracking-widest text-left transition-colors focus:outline-none ${
                    currentView === view && currentView !== 'schedule'
                      ? (isLightMode ? 'text-[#7b5da3]' : 'text-pink-400') 
                      : (isLightMode ? 'text-[#1b0b30]/60 hover:text-[#69508a]' : 'text-pink-200/70 hover:text-white')
                  }`}
                >
                  {view === 'home' ? 'Home' : view === 'about' ? 'About Me' : view}
                </button>
              ))}
            </div>

            {/* FIXED: Mobile Button CTAs mirroring the specific style configurations from desktop layout */}
            <div className="mt-auto flex flex-col gap-3 pl-4">
              <button 
                onClick={() => handleViewChange('schedule')}
                className={`w-full py-3 text-[10px] uppercase font-bold tracking-wider font-sans rounded-lg transition-all border text-center cursor-pointer ${
                  currentView === 'schedule'
                    ? (isLightMode ? 'bg-[#1b0b30] text-white border-[#1b0b30]' : 'bg-white text-[#1b0b30] border-white')
                    : (isLightMode ? 'bg-[#1b0b30]/5 text-[#1b0b30] border-[#1b0b30]/10 hover:bg-[#1b0b30]/10' : 'bg-white/5 text-white border-white/10 hover:bg-white/10')
                }`}
              >
                Schedule a Meeting
              </button>
              <button 
                onClick={() => handleViewChange('contact')}
                className={`w-full py-3 text-[10px] uppercase font-bold tracking-wider font-sans rounded-lg transition-all border text-center cursor-pointer ${
                  currentView === 'contact'
                    ? (isLightMode ? 'bg-[#1b0b30] text-white border-[#1b0b30]' : 'bg-white text-[#1b0b30] border-white')
                    : (isLightMode ? 'bg-[#1b0b30]/10 text-[#1b0b30] border-[#1b0b30]/20' : 'bg-white/10 text-white border-white/20 hover:bg-white/20')
                }`}
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
            {currentView === 'home' && <Home onNavigate={handleViewChange} isLightMode={isLightMode} />}
            {currentView === 'about' && <AboutView onNavigate={handleViewChange} isLightMode={isLightMode} />}
            {currentView === 'resume' && <Resume isLightMode={isLightMode} />}
            {currentView === 'work' && <WorkView isLightMode={isLightMode} />}
            {currentView === 'contact' && <ContactView onNavigate={handleViewChange} isLightMode={isLightMode} />}
            {currentView === 'schedule' && <ScheduleView onNavigate={handleViewChange} isLightMode={isLightMode} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FLOATING ACTION MODE TOGGLE BUTTON */}
      <button
        onClick={() => setIsLightMode(!isLightMode)}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-200 cursor-pointer shadow-xl active:scale-95 z-50 ${
          isLightMode 
            ? 'bg-[#1b0b30] text-white border-[#1b0b30] hover:bg-[#1b0b30]/90' 
            : 'bg-white text-[#1b0b30] border-white hover:bg-pink-100'
        }`}
      >
        {isLightMode ? <Moon size={18} /> : <Sun size={18} />}
      </button>

      <footer className={`border-t py-8 px-6 text-center transition-colors duration-300 ${
        isLightMode ? 'border-[#1b0b30]/10 bg-[#1b0b30]/5' : 'border-white/10 bg-[#1b0b30]/20'
      }`}>
        <p className={`text-[9px] font-mono uppercase tracking-widest ${isLightMode ? 'text-[#1b0b30]/40' : 'text-white/40'}`}>
          SYS_STATUS: • CODED BY JOLAYEMI BOLUWATIFE • 2026
        </p>
      </footer>
      <Analytics />
    </div>
  );
};

export default App;