import { Code, Brain, Database, BarChart3 } from "lucide-react";
import { SiPython, SiR, SiJavascript } from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code className="text-primary" size={24} />,
    skills: [
      { name: "Python", icon: <SiPython className="text-3xl text-primary" />, level: 5 },
      { name: "R", icon: <SiR className="text-3xl text-primary" />, level: 4 },
      { name: "JavaScript", icon: <SiJavascript className="text-3xl text-primary" />, level: 5 }
    ]
  },
  {
    title: "ML Frameworks",
    icon: <Brain className="text-primary" size={24} />,
    skills: [
      { name: "PyTorch", icon: <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">PT</div>, level: 4 },
      { name: "TensorFlow", icon: <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">TF</div>, level: 4 },
      { name: "Scikit-learn", icon: <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">SK</div>, level: 5 }
    ]
  },
  {
    title: "Data Tools",
    icon: <Database className="text-primary" size={24} />,
    skills: [
      { name: "Pandas", icon: <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">PD</div>, level: 5 },
      { name: "NumPy", icon: <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">NP</div>, level: 5 },
      { name: "SQL", icon: <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">SQL</div>, level: 4 }
    ]
  },
  {
    title: "Visualization & Tools",
    icon: <BarChart3 className="text-primary" size={24} />,
    skills: [
      { name: "Matplotlib", icon: <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">MP</div>, level: 5 },
      { name: "Seaborn", icon: <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">SB</div>, level: 4 },
      { name: "Git/GitHub", icon: <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold text-sm">GH</div>, level: 5 }
    ]
  }
];

export default function SkillsSection() {
  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-3 h-3 rounded-full ${dot <= level ? 'bg-primary' : 'bg-muted'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-background-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center" data-testid="skills-title">Technical Competencies</h2>
        <p className="text-muted-foreground text-lg mb-12 text-center" data-testid="skills-description">
          Advanced skills in data science, machine learning, and software development
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="bg-card rounded-lg p-8 netflix-shadow" data-testid={`skill-category-${categoryIndex}`}>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                {category.icon}
                <span className="ml-3">{category.title}</span>
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="flex items-center justify-between" data-testid={`skill-${categoryIndex}-${skillIndex}`}>
                    <div className="flex items-center">
                      {skill.icon}
                      <span className="text-lg font-semibold ml-3">{skill.name}</span>
                    </div>
                    {renderSkillLevel(skill.level)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
