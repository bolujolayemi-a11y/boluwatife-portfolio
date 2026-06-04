import React, { useState } from 'react';

export const ScheduleView = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    notes: ''
  });

  // Generated clean, human-readable time slots for a professional day schedule
  const availableTimeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", 
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", 
    "05:00 PM"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailSubject = encodeURIComponent(`Meeting Request: ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Boluwatife,\n\n` +
      `I would like to schedule a 30-minute consultation meeting with you.\n\n` +
      `Proposed Date: ${formData.date}\n` +
      `Proposed Time Slot: ${formData.time}\n\n` +
      `Additional Notes:\n${formData.notes}\n\n` +
      `Best regards,\n${formData.name}\n(${formData.email})`
    );

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
        <h1 className="text-4xl md:text-5xl font-black font-serif tracking-tight text-[#1b0b30] dark:text-white mb-4 transition-colors duration-300">
          Schedule a <span className="text-pink-600 dark:text-pink-300 italic font-normal">Meeting</span>
        </h1>
        <p className="text-sm md:text-base text-[#1b0b30]/60 dark:text-pink-200/60 max-w-2xl mx-auto font-normal leading-relaxed transition-colors duration-300">
          Select your preferred slot details below to request a 30-minute alignment session.
        </p>
      </div>

      {/* CUSTOM ADAPTIVE CONTAINER MATRIX BOX */}
      <div className="w-full bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md p-6 sm:p-10 text-left max-w-2xl mx-auto transition-colors duration-300">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono tracking-wider uppercase text-[#1b0b30]/60 dark:text-pink-200/60 transition-colors duration-300">Your Name</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Alex Carter" 
                className="w-full bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/10 rounded-xl p-3.5 text-sm text-[#1b0b30] dark:text-white placeholder:text-[#1b0b30]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono tracking-wider uppercase text-[#1b0b30]/60 dark:text-pink-200/60 transition-colors duration-300">Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                placeholder="alex@example.com" 
                className="w-full bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/10 rounded-xl p-3.5 text-sm text-[#1b0b30] dark:text-white placeholder:text-[#1b0b30]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono tracking-wider uppercase text-[#1b0b30]/60 dark:text-pink-200/60 transition-colors duration-300">Preferred Date</label>
              <input 
                type="date" 
                name="date"
                required
                value={formData.date}
                onChange={handleInputChange}
                className="w-full bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/10 rounded-xl p-3.5 text-sm text-[#1b0b30] dark:text-white focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-colors light:scheme-normal dark:scheme-dark"
              />
            </div>
            
            {/* DROPDOWN SELECT FIX */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono tracking-wider uppercase text-[#1b0b30]/60 dark:text-pink-200/60 transition-colors duration-300">Preferred Time Slot</label>
              <div className="relative">
                <select 
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full bg-[#fcfaf2] dark:bg-[#1b0b30]/80 border border-[#1b0b30]/10 dark:border-white/10 rounded-xl p-3.5 text-sm text-[#1b0b30] dark:text-white focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#fcfaf2] dark:bg-[#1b0b30] text-[#1b0b30]/40 dark:text-white/40">Select a slot...</option>
                  {availableTimeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-[#fcfaf2] dark:bg-[#1b0b30] text-[#1b0b30] dark:text-white">
                      {slot}
                    </option>
                  ))}
                </select>
                {/* Custom Responsive Dropdown Arrow Color */}
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#1b0b30]/40 dark:text-white/40 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-mono tracking-wider uppercase text-[#1b0b30]/60 dark:text-pink-200/60 transition-colors duration-300">Project Concept Notes (Optional)</label>
            <textarea 
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Briefly detail your core system criteria or analysis objectives..." 
              className="w-full bg-[#1b0b30]/5 dark:bg-white/5 border border-[#1b0b30]/10 dark:border-white/10 rounded-xl p-3.5 text-sm text-[#1b0b30] dark:text-white placeholder:text-[#1b0b30]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-pink-500 dark:focus:border-pink-400 transition-colors resize-none"
            />
          </div>

          {/* Dynamic theme submission button button action */}
          <button 
            type="submit"
            className="w-full py-4 mt-2 bg-[#1b0b30] dark:bg-white hover:bg-[#1b0b30]/90 dark:hover:bg-pink-100 text-white dark:text-[#1b0b30] rounded-xl font-sans font-black text-xs uppercase tracking-widest transition-all duration-200 shadow-xl shadow-black/5 dark:shadow-black/10 active:scale-98"
          >
            Request Meeting Schedule
          </button>
        </form>
      </div>

      {/* FALLBACK DIRECT NAVIGATION LINK */}
      <p className="text-xs md:text-sm text-[#1b0b30]/50 dark:text-white/50 font-sans mt-10 transition-colors duration-300">
        Want to bypass the form setup?{' '}
        <button 
          onClick={() => onNavigate('contact')}
          className="text-pink-600 dark:text-pink-300 font-bold hover:underline bg-transparent border-none p-0 cursor-pointer focus:outline-none transition-colors duration-300"
        >
          Contact me directly
        </button>
        {' '}instead.
      </p>

    </div>
  );
};