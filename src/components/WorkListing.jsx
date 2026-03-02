
import { Star, MapPin } from "lucide-react";

const professionals = [
  // ... (Data remains the same as previous)
  {
    name: "Sarah Chen",
    role: "Senior UI/UX Designer",
    rating: 4.9,
    reviews: 127,
    location: "San Francisco, CA",
    skills: ["UI/UX Design", "Figma"],
    price: 85,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Marcus Rodriguez",
    role: "Full-Stack Developer",
    rating: 5,
    reviews: 93,
    location: "Austin, TX",
    skills: ["React", "Node.js"],
    price: 95,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Emily Watson",
    role: "Digital Marketing Strategist",
    rating: 4.8,
    reviews: 165,
    location: "New York, NY",
    skills: ["SEO", "Content Strategy"],
    price: 75,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "David Kim",
    role: "Brand & Logo Designer",
    rating: 4.9,
    reviews: 88,
    location: "Los Angeles, CA",
    skills: ["Branding", "Illustration"],
    price: 70,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Sharma",
    role: "Mobile App Developer",
    rating: 5,
    reviews: 74,
    location: "Seattle, WA",
    skills: ["React Native", "iOS"],
    price: 90,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "James Mitchell",
    role: "Content Writer & Copywriter",
    rating: 4.7,
    reviews: 142,
    location: "Chicago, IL",
    skills: ["Copywriting", "SEO Writing"],
    price: 60,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Aisha Patel",
    role: "Product Manager",
    rating: 4.9,
    reviews: 56,
    location: "Boston, MA",
    skills: ["Product Strategy", "Agile"],
    price: 100,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Alex Thompson",
    role: "Video Editor & Animator",
    rating: 4.8,
    reviews: 101,
    location: "Miami, FL",
    skills: ["After Effects", "Premiere Pro"],
    price: 80,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80",
  },
];

const FeaturedProfessionals = () => {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        
        
        <div className="text-center ">
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="text-blue-700">Professionals</span>
          </h2>
          <p className="text-lg text-slate-500">
            Connect with top-rated freelancers ready to bring your vision to life
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionals.map((pro, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px] hover:border-blue-100 flex flex-col items-center text-center"
            >
              {/* Profile Image & Badge */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img src={pro.image} alt={pro.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-blue-600 rounded-full p-1 border-2 border-white">
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3 text-white" stroke="currentColor" strokeWidth="4">
                    <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">{pro.name}</h3>
              <p className="text-slate-500 font-medium text-sm mb-4">{pro.role}</p>

              <div className="flex items-center gap-1 mb-2">
                <Star className="text-amber-400 fill-amber-400" size={16} />
                <span className="font-bold text-slate-800">{pro.rating}</span>
                <span className="text-slate-400 text-sm">({pro.reviews} reviews)</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400 text-sm mb-6">
                <MapPin size={14} />
                <span>{pro.location}</span>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {pro.skills.map((skill) => (
                  <span key={skill} className="px-4 py-1.5 bg-blue-50/50 text-blue-700 text-xs font-semibold rounded-full border border-blue-50">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto mb-8">
                <span className="text-3xl font-black text-slate-900">${pro.price}</span>
                <span className="text-slate-400 text-sm font-medium">/hour</span>
              </div>

              <button className="w-full py-4 bg-blue-700 text-white font-bold rounded-2xl transition-all duration-300 hover:bg-blue-800">
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* View All Button Wrapper - Increased margin-top to mt-24 */}
        <div className="flex justify-center mt-24"> 
          <button className="px-10 py-3 border border-slate-200 bg-white text-slate-900 font-bold rounded-full shadow-sm hover:shadow-md hover:bg-slate-50 transition-all">
            View All Freelancers
          </button>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProfessionals;