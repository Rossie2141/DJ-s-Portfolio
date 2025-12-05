import { Linkedin, Github, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-background-dark py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div data-testid="footer-brand">
            <h3 className="text-primary text-2xl font-bold mb-4">DataForge</h3>
            <p className="text-muted-foreground text-sm">
              Transforming data into insights, building the future through advanced analytics and machine learning.
            </p>
          </div>
          
          <div data-testid="footer-quick-links">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('education')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Education
                </button>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-resources">
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Resume</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Publications</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div data-testid="footer-connect">
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/shriprasad-dj-485312248" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-2xl"
                data-testid="footer-linkedin"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/dataforge-umass" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-2xl"
                data-testid="footer-github"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://twitter.com/dj_shriprasad" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors text-2xl"
                data-testid="footer-twitter"
              >
                <Twitter size={24} />
              </a>
              <a 
                href="mailto:shriprasaddj7@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors text-2xl"
                data-testid="footer-email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center" data-testid="footer-copyright">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 DJ's Portfolio. All rights reserved. | Designed with <Heart className="inline h-4 w-4 text-primary" /> by Shriprasad.
          </p>
        </div>
      </div>
    </footer>
  );
}
