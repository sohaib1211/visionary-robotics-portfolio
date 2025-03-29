
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="font-bold text-xl text-navy flex items-center gap-2">
          <span className="font-extrabold">MS</span>
          <span className="hidden sm:inline">| Muhammad Sohaib</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('experience')} className="nav-link">Experience</button>
          <button onClick={() => scrollToSection('future')} className="nav-link">Future</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="flex flex-col space-y-3 px-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-md text-navy">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-md text-navy">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-md text-navy">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-md text-navy">Skills</button>
            <button onClick={() => scrollToSection('experience')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-md text-navy">Experience</button>
            <button onClick={() => scrollToSection('future')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-md text-navy">Future</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 px-4 hover:bg-gray-100 rounded-md text-navy">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
