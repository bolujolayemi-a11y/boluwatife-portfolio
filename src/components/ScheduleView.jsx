import React, { useState } from 'react';

export const ScheduleView = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Constructing direct email payload parameters
    const emailSubject = encodeURIComponent(`Meeting Request: ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Boluwatife,\n\n` +
      `I would like to schedule a 30-minute consultation meeting with you.\n\n` +
      `Proposed Date: ${formData.date}\n` +
      `Proposed Time Slot: ${formData.time}\n\n` +
      `Additional Notes:\n${formData.notes}\n\n` +
      `Best regards,\n${formData.name}\n(${formData.email})`
    );

    // Launch native secure mail client router stream
    window.location.href = `mailto:bolujolayemi@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center select-none min-h-[80vh] flex flex-col justify-center">
      
      {/* HEADER PANELS LAYER */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight text-white mb-4">
          Schedule a <span className="text-pink-300 italic font-normal">Meeting</span>
        </h1>
        <p className="text-sm md:text-base text-pink-200/60 max-w-2xl mx-auto font-normal leading-relaxed">
          Select your preferred slot details below to request a 30-minute alignment session.
        </p>
      </div>

      {/* CUSTOM NATIVE INPUT MATRIX BOX CONTAINER */}
      <div className="w-full bg-black/20 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md p-6 sm:p-10 text-left max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono tracking-wider uppercase text-pink-200/60">Your Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Alex Carter" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-pink-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono tracking-wider uppercase text-pink-200/60">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="alex@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-pink-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono tracking-wider uppercase text-pink-200/60">Preferred Date</label>
              <input 
                type="date" 
                name="date"
                required
                value={formData.date}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-pink-400 transition-colors scheme-dark"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono tracking-wider uppercase text-pink-200/60">Preferred Time Slot</label>
              <input 
                type="time" 
                name="time"
                required
                value={formData.time}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-pink-400 transition-colors scheme-dark"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono tracking-wider uppercase text-pink-200/60">Project Concept Notes (Optional)</label>
            <textarea 
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Briefly detail your core system criteria or analysis objectives..." 
              className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-pink-400 transition-colors resize-none"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-4 mt-2 bg-white hover:bg-pink-100 text-[#1b0b30] rounded-xl font-sans font-black text-xs uppercase tracking-widest transition-all duration-200 shadow-xl shadow-black/10 active:scale-98"
          >
            Request Meeting Schedule
          </button>
        </form>
      </div>

      {/* FALLBACK DIRECT NAVIGATION LINK */}
      <p className="text-xs md:text-sm text-white/50 font-sans mt-10">
        Want to bypass the form setup?{' '}
        <button 
          onClick={() => onNavigate('contact')}
          className="text-pink-300 font-bold hover:underline bg-transparent border-none p-0 cursor-pointer focus:outline-none"
        >
          Contact me directly
        </button>
        {' '}instead.
      </p>

    </div>
  );
};