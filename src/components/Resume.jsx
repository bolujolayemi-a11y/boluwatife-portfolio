import React from 'react';
import { X, Mail, MapPin, User, ExternalLink, Globe, Award, Zap, Briefcase } from 'lucide-react';

const Resume = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-200 bg-slate-900/90 backdrop-blur-sm p-4 md:p-10 overflow-y-auto flex justify-center">
      <div className="bg-white w-full max-w-4xl rounded-[40px] p-8 md:p-16 relative shadow-2xl h-fit">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-4 bg-slate-100 rounded-full hover:bg-orange-500 hover:text-white transition-all z-10"
        >
          <X size={24} />
        </button>

        {/* Header Section */}
        <header className="mb-12 border-b border-slate-100 pb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900">
            Boluwatife Jolayemi
          </h2>
          <p className="text-orange-600 font-bold uppercase tracking-[0.3em] text-xs mb-6">
            Frontend Developer & Data Analyst
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-500 font-medium text-sm">
            <div className="space-y-2">
              <a href="mailto:bolujolayemi@gmail.com" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                <Mail size={16} className="text-slate-300" /> bolujolayemi@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={16} className="text-slate-300" /> Lagos, Nigeria
              </p>
            </div>
            <div className="space-y-2">
              <a href="https://github.com/bolujolayemi-a11y" target="_blank" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                <User size={16} className="text-slate-300" /> github.com/bolujolayemi-a11y
              </a>
              <a href="https://linkedin.com/in/boluwatife-jolayemi-195593218" target="_blank" className="flex items-center gap-3 hover:text-orange-500 transition-colors">
                <ExternalLink size={16} className="text-slate-300" /> linkedin.com/in/boluwatife-jolayemi
              </a>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="flex items-center gap-3 font-black text-sm uppercase tracking-[0.3em] text-slate-300 mb-6">
                <Zap size={18} /> Summary
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                Analytical Frontend Developer and Data Analyst with a focus on building high-performance, data-driven web applications. Expert in React.js and Tailwind CSS, with a specialized background in Python and Power BI for market trend analysis.
              </p>
            </section>

            <section>
              <h3 className="flex items-center gap-3 font-black text-sm uppercase tracking-[0.3em] text-slate-300 mb-8">
                <Globe size={18} /> Key Projects
              </h3>
              
              <div className="space-y-10">
                <div className="relative pl-6 border-l-2 border-orange-100">
                  <div className="absolute -left-2.25 top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-black text-slate-900">Pantry Guide</h4>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-4">Lead Developer & Analyst</p>
                  <ul className="text-slate-600 text-sm space-y-2 font-medium">
                    <li>• Built responsive React app with Supabase for real-time data and auth.</li>
                    <li>• Engineered semantic mapping for local Nigerian ingredients to global APIs.</li>
                    <li>• Analyzed data to identify ₦5T market gap, prioritizing social-impact features.</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-orange-100">
                  <div className="absolute -left-2.25 top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-black text-slate-900">EntryHub Platform</h4>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-4">Frontend Developer</p>
                  <ul className="text-slate-600 text-sm space-y-2 font-medium">
                    <li>• Developed secure QR-code verification for seamless event check-ins.</li>
                    <li>• Managed complex state logic for ticket resales and user verification.</li>
                  </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-orange-100">
                  <div className="absolute -left-2.25 top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-black text-slate-900">Retail Sales Dashboard</h4>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-4">Data Analyst</p>
                  <ul className="text-slate-600 text-sm space-y-2 font-medium">
                    <li>• Processed and cleaned 10k+ transactions using Python and SQL.</li>
                    <li>• Built Power BI dashboard to visualize supply chain gaps and trends.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="font-black text-sm uppercase tracking-[0.3em] text-slate-300 mb-6">Skills</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Frontend Engineering</p>
                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'Tailwind CSS', 'Vite', 'HTML', 'CSS'].map(s => (
                      <span key={s} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-full border border-slate-100">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Data Analytics</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Power BI', 'MsExcel', 'Matplotlib', 'Pandas'].map(s => (
                      <span key={s} className="px-3 py-1 bg-orange-50 text-orange-700 text-[10px] font-bold rounded-full border border-orange-100">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-black text-sm uppercase tracking-[0.3em] text-slate-300 mb-6">Learning</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase leading-tight">Frontend Cohort</h4>
                  <p className="text-[10px] font-bold text-slate-400">Completed 2026</p>
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase leading-tight">Data Analytics Training</h4>
                  <p className="text-[10px] font-bold text-slate-400">Completed 2025</p>
                </div>
              </div>
            </section>

            {/* <section>
              <h3 className="font-black text-sm uppercase tracking-[0.3em] text-slate-300 mb-6">Recognition</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Award size={16} className="text-orange-500 shrink-0" />
                  <p className="text-xs font-bold text-slate-600 leading-tight">Hackathon Finalist: Pantry Guide</p>
                </div>
                <div className="flex gap-3">
                  <Briefcase size={16} className="text-orange-500 shrink-0" />
                  <p className="text-xs font-bold text-slate-600 leading-tight">SQA Trained: Vitest & Bug Severity</p>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;