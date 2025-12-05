import { ArrowRight } from "lucide-react";
import Img from '../Images/IMG_0676.jpg'

export default function ProfileSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-background-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={Img}
              alt="Professional data scientist portrait"
              className="rounded-lg netflix-shadow w-full"
              data-testid="profile-image"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6" data-testid="profile-title"></h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="profile-description-1">
  Hi, I'm Shriprasad, a passionate data scientist and recent graduate from UMass Dartmouth with expertise in Python, R, and machine learning frameworks. 
  I specialize in transforming complex datasets into meaningful insights that drive business decisions, and I also bring experience as a full stack developer.
</p>
<p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="profile-description-2">
  My journey combines advanced statistical analysis with practical application, focusing on predictive modeling, 
  data visualization, and building scalable machine learning solutions for real-world problems. Alongside my data science expertise, 
  I have hands-on experience developing full stack applications, integrating front-end and back-end technologies to deliver end-to-end solutions.
</p>

            <div className="flex gap-4">
              <button 
                onClick={scrollToContact}
                className="text-primary hover:text-secondary transition-colors text-lg font-semibold flex items-center"
                data-testid="link-get-in-touch"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
