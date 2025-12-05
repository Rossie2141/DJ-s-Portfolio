import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-blur netflix-shadow' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-primary text-2xl font-bold tracking-tight hover:text-secondary transition-colors"
              data-testid="logo-button"
            >
              DataForge
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="nav-home">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="nav-projects">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="nav-skills">
              Skills
            </button>
            <button onClick={() => scrollToSection('education')} className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="nav-education">
              Education
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="nav-about">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="nav-contact">
              Contact
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-muted-foreground"
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden nav-blur border-t border-border">
          <div className="px-4 pt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="mobile-nav-home">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="mobile-nav-projects">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="mobile-nav-skills">
              Skills
            </button>
            <button onClick={() => scrollToSection('education')} className="block w-full text-left text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="mobile-nav-education">
              Education
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="mobile-nav-about">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-foreground hover:text-muted-foreground transition-colors text-sm font-medium" data-testid="mobile-nav-contact">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
