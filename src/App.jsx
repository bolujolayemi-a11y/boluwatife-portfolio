import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { Home } from './components/Home';
import { AboutView } from './components/AboutView';
import { Resume } from './components/Resume';
import { WorkView } from './components/WorkView';
import { ContactView } from './components/ContactView';
import { ScheduleView } from './components/ScheduleView';

import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleViewChange = (view) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    /* FIXED THEME CANVAS: Locked completely into your signature dark layout canvas with clean dark text styling */
    <div className="min-h-screen font-sans overflow-x-hidden antialiased bg-linear-to-br from-[#b592e2] via-[#dc86eb] to-[#c05a96] text-[#1b0b30]">
      <Analytics />
      {/* HEADER NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-[#1b0b30]/10 border-[#1b0b30]/10 px-6 py-5 flex justify-between items-center">
        <button
          onClick={() => handleViewChange('home')}
          className="font-black text-2xl tracking-tighter focus:outline-none text-[#1b0b30]"
        >
          BJ<span className="text-pink-600">.</span>
        </button>

        {/* Desktop Links Switcher */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex gap-8 mr-2">
            {['home', 'about', 'resume', 'work', 'contact'].map((view) => (
              <button
                key={view}
                onClick={() => handleViewChange(view)}
                className={`text-[10px] font-sans font-bold uppercase tracking-widest transition-colors focus:outline-none relative py-1 ${
                  currentView === view && currentView !== 'schedule' ? 'text-[#1b0b30]' : 'text-[#1b0b30]/60 hover:text-[#1b0b30]'
                }`}
              >
                {view === 'home' ? 'Home' : view === 'about' ? 'About Me' : view}
                {currentView === view && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-[#1b0b30]"
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
                  ? 'bg-[#1b0b30] text-white border-[#1b0b30]'
                  : 'bg-[#1b0b30]/5 text-[#1b0b30] border-[#1b0b30]/10 hover:bg-[#1b0b30]/10'
              }`}
            >
              Schedule a Meeting
            </button>

            <button
              onClick={() => handleViewChange('contact')}
              className={`px-4 py-2 text-[10px] uppercase font-bold tracking-wider font-sans rounded-lg transition-all border ${
                currentView === 'contact'
                  ? 'bg-[#1b0b30] text-white border-[#1b0b30]'
                  : 'bg-[#1b0b30]/10 text-[#1b0b30] border-[#1b0b30]/20 hover:bg-[#1b0b30]/20'
              }`}
            >
              Hire Me
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 focus:outline-none text-[#1b0b30]"
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
            className="fixed inset-y-0 right-0 w-full max-w-xs z-50 p-6 flex flex-col border-l shadow-2xl bg-[#9a7cc2]/95 border-[#1b0b30]/10"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="font-black text-2xl text-[#1b0b30]">
                BJ<span className="text-pink-600">.</span>
              </div>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="focus:outline-none text-[#1b0b30]/70 hover:text-[#1b0b30]"
              >
                <X size={24} />
              </button>
            </div>

            {/* FIXED: Removed internal theme logic checks to fix variable scope compilation errors */}
            <div className="flex flex-col gap-6 text-left pl-4 mb-12">
              {['home', 'about', 'resume', 'work', 'contact'].map((view) => (
                <button
                  key={view}
                  onClick={() => handleViewChange(view)}
                  className={`text-[10px] font-sans font-bold uppercase tracking-widest relative py-1 w-max focus:outline-none ${
                    currentView === view ? 'text-[#1b0b30]' : 'text-[#1b0b30]/60 hover:text-[#1b0b30]'
                  }`}
                >
                  {view === 'home' ? 'Home' : view === 'about' ? 'About Me' : view}
                  {currentView === view && (
                    <motion.span
                      layoutId="activeMobileUnderline"
                      className="absolute bottom-0 left-0 w-full h-0.5 rounded-full bg-[#1b0b30]"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-3 pl-4">
              <button
                onClick={() => handleViewChange('schedule')}
                className={`w-full py-2 text-[10px] uppercase font-bold rounded-lg border focus:outline-none cursor-pointer transition-all ${
                  currentView === 'schedule'
                    ? 'bg-[#1b0b30] text-white border-[#1b0b30]'
                    : 'bg-[#1b0b30]/5 text-[#1b0b30] border-[#1b0b30]/10 hover:bg-[#1b0b30]/10'
                }`}
              >
                Schedule a Meeting
              </button>

              <button
                onClick={() => handleViewChange('contact')}
                className={`w-full py-2 text-[10px] uppercase font-bold rounded-lg border focus:outline-none cursor-pointer transition-all ${
                  currentView === 'contact'
                    ? 'bg-[#1b0b30] text-white border-[#1b0b30]'
                    : 'bg-[#1b0b30]/10 text-[#1b0b30] border-[#1b0b30]/20 hover:bg-[#1b0b30]/20'
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
            {/* Setting isLightMode={true} preserves your dark purple layout formatting universally across views */}
            {currentView === 'home' && <Home onNavigate={handleViewChange} isLightMode={true} />}
            {currentView === 'about' && <AboutView onNavigate={handleViewChange} isLightMode={true} />}
            {currentView === 'resume' && <Resume isLightMode={true} />}
            {currentView === 'work' && <WorkView isLightMode={true} />}
            {currentView === 'contact' && <ContactView onNavigate={handleViewChange} isLightMode={true} />}
            {currentView === 'schedule' && <ScheduleView onNavigate={handleViewChange} isLightMode={true} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t py-8 px-6 text-center border-[#1b0b30]/10 bg-[#1b0b30]/5">
        <p className="text-[9px] font-mono uppercase tracking-widest text-[#1b0b30]/40">
          SYS_STATUS: • CODED BY JOLAYEMI BOLUWATIFE • 2026
        </p>
      </footer>
    </div>
  );
};

export default App;