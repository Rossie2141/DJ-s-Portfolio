import { Briefcase, Lightbulb, Target, Heart, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const interests = [
    "Machine Learning",
    "Artificial Intelligence",
    "Data Visualization",
    "Computer Vision",
    "Predictive Analytics",
    "Full Stack Development (React JS, Python)",
    "Business Intelligence"
  ];

  const objectives = [
    "Leverage data science and AI to solve real-world challenges in healthcare and automation",
    "Develop intelligent systems that improve decision-making and efficiency",
    "Continue research in deep learning, computer vision, and natural language processing",
    "Collaborate in innovative teams to deliver scalable AI-driven solutions",
    "Mentor and share knowledge with aspiring data scientists and engineers"
  ];

  return (
    <section id="about" className="py-20 bg-background-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center" data-testid="about-title">
          About Me
        </h2>
        <p
          className="text-muted-foreground text-lg mb-12 text-center"
          data-testid="about-description"
        >
          Graduate student in Data Science with hands-on experience in AI, ML, and full-stack development.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div
              className="bg-card rounded-lg p-6 netflix-shadow"
              data-testid="about-background-card"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Briefcase className="text-primary mr-3" size={24} />
                Professional Background
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I’m Shriprasad DJ, currently pursuing my Master’s in Data Science at the University of Massachusetts Dartmouth. 
                With a Bachelor’s in Artificial Intelligence and Machine Learning from Alva’s Institute of Engineering and Technology, 
                I’ve built a strong foundation in data-driven problem solving and AI innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My professional experience spans internships at OneStop AI, Stellium Inc, and Incture Technologies, where I worked on 
                projects involving computer vision, predictive analytics, OCR solutions, and full-stack development using React.js and Python.
              </p>
            </div>

            <div
              className="bg-card rounded-lg p-6 netflix-shadow"
              data-testid="about-philosophy-card"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Lightbulb className="text-primary mr-3" size={24} />
                Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe that impactful innovation comes from combining data, technology, and creativity. 
                My goal is to use data science as a tool to uncover insights that can improve systems, empower people, 
                and drive intelligent decision-making across industries.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div
              className="bg-card rounded-lg p-6 netflix-shadow"
              data-testid="about-objectives-card"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Target className="text-primary mr-3" size={24} />
                Career Objectives
              </h3>
              <ul className="space-y-3">
                {objectives.map((objective, index) => (
                  <li
                    key={index}
                    className="flex items-start"
                    data-testid={`objective-${index}`}
                  >
                    <CheckCircle
                      className="text-primary mr-3 mt-1 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-muted-foreground">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="bg-card rounded-lg p-6 netflix-shadow"
              data-testid="about-interests-card"
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Heart className="text-primary mr-3" size={24} />
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-background px-4 py-2 rounded-full text-sm font-semibold"
                    data-testid={`interest-${index}`}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 text-muted-foreground">
          <p>Shriprasad DJ | Dartmouth, MA | +1 (774)-992-8064 | shriprasaddj7@gmail.com</p>
          <p>
            <a
              href="https://www.linkedin.com/in/shriprasad-dj-485312248"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/shriprasadDJ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
