import React, { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

export const ContactView = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch('https://formspree.io/f/maqznjzv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setEmail('');
        setMessage('');
        
        // Hide success banner after 4 seconds
        setTimeout(() => setIsSent(false), 4000);
      }
    } catch (error) {
      console.error("Form transmission failed:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-left selection:bg-pink-500/20 selection:text-pink-400">
      
      {/* TWO-COLUMN GRID SPLIT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[60vh]">
        
        {/* LEFT CONTAINER: THE PRIMARY MESSAGE FORM BOX */}
        <form 
          onSubmit={handleFormSubmit}
          className="lg:col-span-7 bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-2xl p-6 sm:p-10 flex flex-col gap-6 backdrop-blur-sm shadow-xl"
        >
          <div>
            <h3 className="text-2xl font-black text-[#1b0b30] tracking-tight mb-1">Let's Connect</h3>
            <p className="text-[#1b0b30]/60 font-sans text-xs font-normal">
              Get in touch regarding any query for further information.
            </p>
          </div>

          <div className="flex flex-col gap-1.5">
            <input 
              type="email" 
              required
              disabled={isSending}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email" 
              className="w-full bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl p-4 text-sm text-[#1b0b30] placeholder:text-[#1b0b30]/30 focus:outline-none focus:border-pink-500 transition-colors disabled:opacity-50" 
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <textarea 
              rows={5} 
              required
              disabled={isSending}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..." 
              className="w-full bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl p-4 text-sm text-[#1b0b30] placeholder:text-[#1b0b30]/30 focus:outline-none focus:border-pink-500 transition-colors resize-none disabled:opacity-50" 
            />
          </div>

          <button 
            type="submit"
            disabled={isSending || isSent}
            className={`w-full py-4 font-sans font-black rounded-xl text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-md shadow-black/5 active:scale-98 cursor-pointer ${
              isSent 
                ? 'bg-emerald-600/10 text-emerald-700 border border-emerald-500/20' 
                : 'bg-[#1b0b30] hover:bg-[#1b0b30]/90 text-white disabled:opacity-50'
            }`}
          >
            {isSending ? (
              <>Sending Message... <Loader2 size={12} className="animate-spin" /></>
            ) : isSent ? (
              <>Message Sent Successfully! <CheckCircle2 size={12} /></>
            ) : (
              <>Send Message <Send size={12} /></>
            )}
          </button>
        </form>

        {/* RIGHT CONTAINER: STRUCTURAL METRIC SIDEBAR STACK */}
        <div className="lg:col-span-5 flex flex-col gap-5 lg:pl-8">
          
          {/* Node 1: WhatsApp Chat Direct */}
          <div className="bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm group hover:border-[#1b0b30]/20 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#1b0b30]/5 rounded-xl flex items-center justify-center text-pink-600 border border-[#1b0b30]/10">
              <MessageSquare size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-[#1b0b30]/40 tracking-wider block">WhatsApp</span>
              <a 
                href="https://wa.me/2349066237453" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#1b0b30] text-sm font-bold hover:text-pink-600 transition-colors"
              >
                Contact Directly
              </a>
            </div>
          </div>

          {/* Node 2: Email Direct Link */}
          <div className="bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm group hover:border-[#1b0b30]/20 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#1b0b30]/5 rounded-xl flex items-center justify-center text-pink-600 border border-[#1b0b30]/10">
              <Mail size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-[#1b0b30]/40 tracking-wider block">Email Directly</span>
              <a 
                href="mailto:bolujolayemi@gmail.com" 
                className="text-[#1b0b30] text-sm font-bold hover:text-pink-600 transition-colors break-all"
              >
                bolujolayemi@gmail.com
              </a>
            </div>
          </div>

          {/* Node 3: Location Metrics */}
          <div className="bg-[#1b0b30]/5 border border-[#1b0b30]/10 rounded-xl p-4 flex items-center gap-4 backdrop-blur-sm group hover:border-[#1b0b30]/20 transition-colors duration-300">
            <div className="w-12 h-12 bg-[#1b0b30]/5 rounded-xl flex items-center justify-center text-pink-600 border border-[#1b0b30]/10">
              <MapPin size={18} />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase text-[#1b0b30]/40 tracking-wider block">Address</span>
              <span className="text-[#1b0b30] text-sm font-bold">Lagos, Nigeria</span>
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
};