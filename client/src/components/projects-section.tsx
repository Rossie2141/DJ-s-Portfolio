import { Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description: "ML model predicting customer churn with 94% accuracy using ensemble methods",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.9,
    tech: "Python, Scikit-learn, Pandas"
  },
  {
    id: 2,
    title: "Sales Forecasting Dashboard",
    description: "Interactive dashboard for real-time sales prediction and trend analysis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.8,
    tech: "R, Shiny, Time Series"
  },
  {
    id: 3,
    title: "Image Classification System",
    description: "Deep learning model for automated image classification with 96% accuracy",
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.7,
    tech: "TensorFlow, CNN, Python"
  },
  {
    id: 4,
    title: "Market Sentiment Analysis",
    description: "NLP solution analyzing social media sentiment for market prediction",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.8,
    tech: "PyTorch, NLTK, Twitter API"
  },
  {
    id: 5,
    title: "Supply Chain Optimization",
    description: "Optimization algorithm reducing logistics costs by 23% using linear programming",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.9,
    tech: "Python, OR-Tools, Optimization"
  },
  {
    id: 6,
    title: "Healthcare Data Analysis",
    description: "Predictive model for patient readmission risk with clinical decision support",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.8,
    tech: "R, Random Forest, Healthcare"
  },
  {
    id: 7,
    title: "Financial Risk Assessment",
    description: "ML model for credit risk assessment and loan default prediction",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.7,
    tech: "Python, XGBoost, Finance"
  },
  {
    id: 8,
    title: "Real-time Analytics Platform",
    description: "Streaming data pipeline processing 1M+ events per second",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    rating: 4.9,
    tech: "Apache Kafka, Spark, Python"
  }
];

export default function ProjectsSection() {
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
                className="bg-card rounded-lg overflow-hidden card-hover cursor-pointer netflix-shadow w-72 flex-shrink-0"
                data-testid={`project-card-${project.id}`}
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
