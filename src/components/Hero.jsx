import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, ArrowRight, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    /* overflow-hidden clips the star and the gradient blobs */
    <main className="relative z-10 max-w-[1440px] mx-auto px-8 md:px-16 mt-0 grid grid-cols-1 md:grid-cols-12 gap-12 items-center min-h-[700px] overflow-hidden">
      
      {/* --- NEW: SOFT GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Primary soft blue glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-100/50 blur-[120px]" />
        {/* Secondary subtle teal/blue glow for depth */}
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-sky-50/60 blur-[100px]" />
      </div>

      {/* --- THE ROAMING STAR (LOCKED TO HERO) --- */}
      <motion.div 
        className="absolute z-0 text-blue-500/30 pointer-events-none"
        animate={{ 
          x: ["2%", "92%", "10%", "85%", "2%"], 
          y: ["5%", "80%", "20%", "70%", "5%"], 
          rotate: [0, 360, 720] 
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <Sparkles size={28} fill="currentColor" />
      </motion.div>

      {/* Left Content */}
      <div className="col-span-1 md:col-span-7 relative z-10">
        <h1 className="text-6xl md:text-[80px] font-bold leading-[1.1] tracking-tight text-slate-900">
          Hire Top <span className="text-blue-700">Freelance</span> <br /> Talent Today
        </h1>
        <p className="mt-8 text-xl text-slate-500 max-w-xl leading-relaxed">
          Connect with exceptional professionals across design, development, marketing, and more. 
        </p>

        {/* Search Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <div className="relative w-full max-w-lg group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={22} />
            <input 
              type="text" 
              placeholder="Search for designers, developers..." 
              className="w-full pl-14 pr-12 py-5 border border-slate-200 bg-white/60 backdrop-blur-xl rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all shadow-sm"
            />
          </div>
          <button className="w-full sm:w-auto bg-blue-700 text-white px-12 py-5 rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200/50">
            Search
          </button>
        </div>

        <div className="flex gap-4 mt-10">
          <button className="flex items-center gap-2 px-8 py-3.5 border border-slate-200 rounded-full font-bold text-slate-700 hover:bg-slate-50 transition-all group bg-white/40">
            Browse Talent <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-3.5 border border-slate-200 rounded-full font-bold text-slate-700 hover:bg-slate-50 transition-all bg-white/40">
            Post a Job
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex col-span-5 relative justify-end">
        <div className="relative w-full aspect-[1.3/1] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            className="w-full h-full object-cover"
            alt="Teamwork"
          />
        </div>

        {/* Floating Cards */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-10 top-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50"
        >
          <div className="bg-blue-600 p-2.5 rounded-xl text-white"><Zap size={20} fill="currentColor" /></div>
          <div className="pr-4"><p className="text-sm font-bold text-slate-900">Smart Matching</p></div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-6 bottom-10 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-50"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white"><Users size={20} /></div>
          <div className="pr-4"><p className="text-sm font-bold text-slate-900">850+ Experts</p></div>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;