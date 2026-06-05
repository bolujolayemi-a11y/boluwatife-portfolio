import React, { useState } from 'react';

export const ScheduleView = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    notes: ''
  });
  
  // Status states to handle UX responses cleanly
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const availableTimeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", 
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", 
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", 
    "05:00 PM"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    try {
      const response = await fetch('https://formspree.io/f/maqznjzv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email, 
          _subject: `Meeting Request: ${formData.name}`, 
          proposedDate: formData.date,
          proposedTimeSlot: formData.time,
          additionalNotes: formData.notes || 'No custom notes provided.'
        })
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: false });
        setFormData({ name: '', email: '', date: '', time: '', notes: '' });
        
        // FIXED: Automatically flip back to a clean form after 4 seconds
        setTimeout(() => {
          setStatus({ loading: false, success: false, error: false });
        }, 4000);
        
      } else {
        setStatus({ loading: false, success: false, error: true });
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: true });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-center select-none min-h-[80vh] flex flex-col justify-center">
      
      {/* HEADER PANELS LAYER */}
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#1b0b30] mb-4">
          Schedule a <span className="text-pink-600 italic font-serif font-normal">Meeting</span>
        </h1>
        <p className="text-sm md:text-base text-[#1b0b30]/60 max-w-2xl mx-auto font-normal leading-relaxed">
          Select your preferred time details to book a 30-minute consultation to discuss your project needs and how I can help bring your ideas to life.
        </p>
      </div>

      {/* CUSTOM ADAPTIVE CONTAINER MATRIX BOX */}
      <div className="w-full bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md p-6 sm:p-10 text-left max-w-2xl mx-auto">
        
        {status.success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 bg-pink-600/10 text-pink-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">✓</div>
            <h3 className="text-lg font-black text-[#1b0b30]">Schedule Request Transmitted!</h3>
            <p className="text-xs text-[#1b0b30]/60 max-w-sm mx-auto">Thanks! I've received your request and will look over the details. Expect an email from me shortly to confirm our schedule.</p>
            <button 
              onClick={() => setStatus({ loading: false, success: false, error: false })}
              className="mt-4 px-4 py-2 bg-[#1b0b30] text-white text-[10px] uppercase font-black tracking-wider rounded-xl hover:bg-[#1b0b30]/90 transition-all cursor-pointer"
            >
              Book Another Time
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono tracking-wider uppercase text-[#1b0b30]/60">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Alex Carter" 
                  className="w-full bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl p-3.5 text-sm text-[#1b0b30] placeholder:text-[#1b0b30]/30 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono tracking-wider uppercase text-[#1b0b30]/60">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="alex@example.com" 
                  className="w-full bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl p-3.5 text-sm text-[#1b0b30] placeholder:text-[#1b0b30]/30 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono tracking-wider uppercase text-[#1b0b30]/60">Preferred Date</label>
                <input 
                  type="date" 
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl p-3.5 text-sm text-[#1b0b30] focus:outline-none focus:border-pink-500 transition-colors scheme-normal"
                />
              </div>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono tracking-wider uppercase text-[#1b0b30]/60">Preferred Time</label>
                <div className="relative">
                  <select 
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-[#f3eddc] border border-[#1b0b30]/10 rounded-xl p-3.5 text-sm text-[#1b0b30] focus:outline-none focus:border-pink-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-[#1b0b30]/40">Select a time...</option>
                    {availableTimeSlots.map((slot) => (
                      <option key={slot} value={slot} className="text-[#1b0b30]">
                        {slot}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#1b0b30]/40">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-mono tracking-wider uppercase text-[#1b0b30]/60">Tell me about your project (Optional)</label>
              <textarea 
                name="notes"
                rows={4}
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="What are you looking to build? Mention any specific features, goals, or design styles you have in mind..." 
                className="w-full bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl p-3.5 text-sm text-[#1b0b30] placeholder:text-[#1b0b30]/30 focus:outline-none focus:border-pink-500 transition-colors resize-none"
              />
            </div>

            {status.error && (
              <p className="text-xs font-bold text-red-600 mt-1">⚠️ Something went wrong on my end. Please try again, or use the direct contact link below!</p>
            )}

            <button 
              type="submit"
              disabled={status.loading}
              className="w-full py-4 mt-2 bg-[#1b0b30] hover:bg-[#1b0b30]/90 disabled:bg-[#1b0b30]/40 text-white rounded-xl font-sans font-black text-xs uppercase tracking-widest transition-all duration-200 shadow-xl shadow-black/5 active:scale-98 cursor-pointer flex items-center justify-center gap-2"
            >
              {status.loading ? 'Transmitting Signals...' : 'Request Meeting Schedule'}
            </button>
          </form>
        )}
      </div>

      <p className="text-xs md:text-sm text-[#1b0b30]/60 font-sans mt-10">
        Can't find a suitable time? {' '}
        <button 
          onClick={() => onNavigate('contact')}
          className="text-pink-600 font-bold hover:underline bg-transparent border-none p-0 cursor-pointer focus:outline-none"
        >
          Contact me directly
        </button>
        {' '}and we'll work something out.
      </p>

    </div>
  );
};