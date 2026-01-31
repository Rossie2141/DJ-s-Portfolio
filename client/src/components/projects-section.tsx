import { Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RAG Assistant with Knowledge Base",
    description: "AI-powered chatbot using retrieval-augmented generation to answer questions from uploaded documents with context-aware responses",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.8,
    tech: "React, Vercel, RAG, NLP",
    liveLink: "https://ragbot-ashy.vercel.app"
  },
   {
    id: 2,
    title: "Food Ordering Application",
    description: "Full-featured restaurant app with user authentication, interactive menu, shopping cart with tax calculation, and item favorites with modern React UI design",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.8,
    tech: "React.js, State Management, UI/UX",
    liveLink: "https://foodi-res-app.vercel.app/"
  },
  {
    id: 3,
    title: "Image Classification System",
    description: "Deep learning model for automated image classification with 96% accuracy",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.7,
    tech: "TensorFlow, CNN, Python",
    liveLink: "https://github.com/Rossie2141/Skin-Disease"
  },
  {
    id: 4,
    title: "Market Sentiment Analysis",
    description: "NLP solution analyzing social media sentiment for market prediction",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.8,
    tech: "PyTorch, NLTK, Twitter API",
    // liveLink: "https://example.com/sentiment-analysis"
  },
  {
    id: 5,
    title: "Supply Chain Optimization",
    description: "Optimization algorithm reducing logistics costs by 23% using linear programming",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.9,
    tech: "Python, OR-Tools, Optimization",
    // liveLink: "https://example.com/supply-chain"
  },
  {
    id: 6,
    title: "Healthcare Data Analysis",
    description: "Predictive model for patient readmission risk with clinical decision support",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.8,
    tech: "R, Random Forest, Healthcare",
    // liveLink: "https://example.com/healthcare-analysis"
  },
  {
    id: 7,
    title: "Financial Risk Assessment",
    description: "ML model for credit risk assessment and loan default prediction",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.7,
    tech: "Python, XGBoost, Finance",
    // liveLink: "https://example.com/risk-assessment"
  },
  {
    id: 8,
    title: "Real-time Analytics Platform",
    description: "Streaming data pipeline processing 1M+ events per second",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.9,
    tech: "Apache Kafka, Spark, Python",
    // liveLink: "https://example.com/analytics-platform"
  }
];

export default function ProjectsSection() {
  const handleCardClick = (liveLink) => {
    window.open(liveLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4" data-testid="projects-title">Featured Data Science Projects</h2>
        <p className="text-muted-foreground text-lg mb-12" data-testid="projects-description">
          Explore my most impactful data science solutions and machine learning applications
        </p>
        
        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-6 w-max">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-card rounded-lg overflow-hidden card-hover cursor-pointer netflix-shadow w-72 flex-shrink-0 transition-transform hover:scale-105"
                data-testid={`project-card-${project.id}`}
                onClick={() => handleCardClick(project.liveLink)}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  data-testid={`project-image-${project.id}`}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3" data-testid={`project-tech-${project.id}`}>
                    {project.tech}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-sm font-semibold flex items-center" data-testid={`project-rating-${project.id}`}>
                      <Star className="mr-1 h-4 w-4 fill-current" /> {project.rating}
                    </span>
                    <span className="text-muted-foreground text-xs">Portfolio Project</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}