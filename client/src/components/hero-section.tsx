import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=1200" 
          alt="Data visualization and analytics background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 hero-gradient z-10"></div>
      
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="hero-title">
          Analyze. Innovate. <span className="text-primary">Transform.</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-description">
          UMass Dartmouth graduate specializing in data science, machine learning, and transforming complex data into actionable insights
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            className="bg-primary hover:bg-secondary text-primary-foreground px-8 py-4 rounded text-lg font-semibold transition-all netflix-shadow hover:scale-105"
            data-testid="button-view-projects"
          >
            <Play className="mr-2 h-5 w-5" /> View Projects
          </Button>
          <Button 
            onClick={scrollToAbout}
            variant="outline"
            className="bg-card hover:bg-opacity-80 text-card-foreground px-8 py-4 rounded text-lg font-semibold transition-all netflix-shadow hover:scale-105 border border-border"
            data-testid="button-learn-more"
          >
            <Info className="mr-2 h-5 w-5" /> Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
