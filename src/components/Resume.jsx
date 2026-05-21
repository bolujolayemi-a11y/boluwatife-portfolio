import React from 'react';
import { X, Mail, MapPin, User, ExternalLink, Award, Zap, Briefcase, HeartPulse, Code2, ShoppingBag, Terminal } from 'lucide-react';

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
                Analytical Frontend Developer and Data Analyst specializing in building high-performance web systems and interactive interfaces. Expert in React.js and Tailwind CSS, combining responsive UI architecture with python-driven dataset visualization to deliver impact-focused applications.
              </p>
            </section>

            <section>
              <h3 className="flex items-center gap-3 font-black text-sm uppercase tracking-[0.3em] text-slate-300 mb-8">
                <Briefcase size={18} /> Key Projects
              </h3>
              
              <div className="space-y-10">
                {/* ALAAFIA PLATFORM - INTEGRATED PRESTIGE POSITION */}
                <div className="relative pl-6 border-l-2 border-orange-100">
                  <div className="absolute -left-2.25 top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-black text-slate-900">Alaafia Platform</h4>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-4">Founder & Lead Developer</p>
                  <ul className="text-slate-600 text-sm space-y-2 font-medium">
                    <li>• Engineered a mobile-responsive **AI health information application** built to deliver culturally aware health literacy context across Nigeria.</li>
                    <li>• Integrated **Groq Inference Engine API** to process conversation states under a customized multi-routing prompt framework.</li>
                    <li>• Configured backend persistent pipelines using **Appwrite BaaS** for user account authentication and relational document streaming.</li>
                    <li>• Implemented client-side guardrails to run pre-flight emergency triaging, safely directing high-risk indicators to professional care.</li>
                  </ul>
                </div>

                {/* VENDRA */}
                <div className="relative pl-6 border-l-2 border-orange-100">
                  <div className="absolute -left-2.25 top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-black text-slate-900">Vendra Commerce</h4>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-4">Founder & Lead Software Engineer</p>
                  <ul className="text-slate-600 text-sm space-y-2 font-medium">
                    <li>• Architected a **multi-tenant e-commerce engine** allowing users to deploy personalized storefronts with unique subdomains.</li>
                    <li>• Integrated **Paystack Gateway** to handle secure, real-time local currency transactions and automated order fulfillment.</li>
                    <li>• Developed a premium **Boutique Inventory Vault** featuring real-time valuation, stock scaling, and clearance logic.</li>
                    <li>• Engineered a mobile-first UI using functional components and custom hooks, optimizing for low-bandwidth performance.</li>
                  </ul>
                </div>

                {/* SNIPPETFLOW */}
                <div className="relative pl-6 border-l-2 border-orange-100">
                  <div className="absolute -left-2.25 top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-black text-slate-900">SnippetFlow</h4>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-4">Lead Developer & Frontend Engineer</p>
                  <ul className="text-slate-600 text-sm space-y-2 font-medium">
                    <li>• Engineered a minimalist code management SaaS featuring an integrated **AI Refinement System** for logic debugging.</li>
                    <li>• Implemented secure database architecture using modern storage abstractions, ensuring strict data isolation for user snippets.</li>
                    <li>• Developed a side-by-side comparison modal with Framer Motion for visualizing AI-driven optimizations.</li>
                  </ul>
                </div>

                {/* PANTRY GUIDE */}
                <div className="relative pl-6 border-l-2 border-orange-100">
                  <div className="absolute -left-2.25 top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-black text-slate-900">Pantry Guide</h4>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-4">Lead Developer & Analyst</p>
                  <ul className="text-slate-600 text-sm space-y-2 font-medium">
                    <li>• Built responsive React app targeting food waste containment via intelligent ingredient mapping.</li>
                    <li>• Analyzed local supply patterns to prioritize social-impact features and real-time inventory management.</li>
                  </ul>
                </div>

                {/* RETAIL SALES DASHBOARD */}
                <div className="relative pl-6 border-l-2 border-orange-100">
                  <div className="absolute -left-2.25 top-0 w-4 h-4 bg-orange-500 rounded-full border-4 border-white"></div>
                  <h4 className="text-xl font-black text-slate-900">Retail Sales Dashboard</h4>
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-4">Data Analyst</p>
                  <ul className="text-slate-600 text-sm space-y-2 font-medium">
                    <li>• Processed 1,000+ retail transactions using **Python and Pandas** to identify supply chain gaps and seasonal trends.</li>
                    <li>• Engineered an interactive Streamlit dashboard to provide actionable KPIs for inventory optimization.</li>
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
                    {['React.js', 'Tailwind CSS', 'Appwrite BaaS', 'Supabase', 'Vite', 'HTML', 'CSS'].map(s => (
                      <span key={s} className="px-3 py-1 bg-slate-50 text-slate-600 text-[10px] font-bold rounded-full border border-slate-100">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Data Analytics</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Pandas', 'Power BI', 'Streamlit', 'Matplotlib'].map(s => (
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
                  <h4 className="text-xs font-black text-slate-900 uppercase leading-tight">Frontend Development Cohort</h4>
                  <p className="text-[10px] font-bold text-slate-400">Completed 2026</p>
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-900 uppercase leading-tight">Data Science & Analytics</h4>
                  <p className="text-[10px] font-bold text-slate-400">Completed 2025</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;