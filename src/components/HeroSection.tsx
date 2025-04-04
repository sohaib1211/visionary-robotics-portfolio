
import { ArrowRight, Download } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl -ml-10 -mb-10"></div>
      
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
            Muhammad Sohaib
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-metallic-dark mt-3 mb-4">
            Mechanical Engineer | Robotics Enthusiast | Innovator
          </h2>
          <p className="text-lg text-gray-700 mb-8 border-l-4 border-teal pl-4 italic">
            Revolutionizing industrial robotics through intelligent systems and sustainable engineering solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="/src/Portfolio_Online.pdf" 
              download="Portfolio_Muhammad_Sohaib.pdf"
              className="button-primary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Portfolio <ArrowRight size={18} />
            </a>
            <a 
              href="/src/Resume.pdf" 
              download="Resume_Muhammad_Sohaib.pdf"
              className="button-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Download CV <Download size={18} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center animate-fade-in-right">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-navy to-teal/80 rounded-full opacity-20 animate-pulse-glow"></div>
            <Avatar className="w-full h-full border-4 border-white shadow-lg">
              <AvatarImage src="src/img.jpg" alt="Muhammad Sohaib" className="object-cover" />
              <AvatarFallback className="text-4xl font-bold text-navy bg-gradient-to-br from-gray-200 to-gray-300">
                MS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
