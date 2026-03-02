import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-20 flex items-center justify-between px-16 py-8 max-w-[1440px] mx-auto w-full bg-white">
      <div className="text-2xl font-black tracking-tighter text-blue-700">LOGO</div>
      
      <div className="flex items-center gap-10 font-medium text-slate-600">
        {['Hire Freelancer', 'Find Work', 'Find Job', 'Sign In'].map((item) => (
          <a key={item} href="#" className="relative group py-1 transition-colors hover:text-blue-700">
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
        
        {/* GET STARTED BUTTON WITH GLOW SHADOW */}
        <button className="relative bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_15px_30px_-5px_rgba(59,130,246,0.6)]">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;