import { GraduationCap, Trophy, Award, Star } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-4 text-center" data-testid="education-title">Education</h2>
        <p className="text-muted-foreground text-lg mb-12 text-center" data-testid="education-description">
          Academic foundation for data science innovation
        </p>
        
        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-8 w-max">
            {/* Master’s Card */}
            <div className="bg-card rounded-lg overflow-hidden netflix-shadow w-[800px] flex-shrink-0">
              <div className="grid grid-cols-3">
                <div className="col-span-1 bg-primary p-8 flex items-center justify-center">
                  <img 
                    src="https://www.umassd.edu/media/umassdartmouth/about/social/231031-UMASS-Fall-Aerials-011-1920x1080.jpg" 
                    /* example: UMass Dartmouth architecture image URL */ 
                    alt="UMass Dartmouth campus"
                    className="w-full h-full object-cover rounded"
                    data-testid="education-campus-image-masters"
                  />
                </div>
                <div className="col-span-2 p-8">
                  <div className="flex items-start mb-6">
                    <GraduationCap className="text-4xl text-primary mr-4 mt-1" size={36} />
                    <div>
                      <h3 className="text-2xl font-bold mb-2" data-testid="education-degree-masters">
                        Master of Science in Data Science
                      </h3>
                      <p className="text-xl text-muted-foreground mb-1" data-testid="education-university-masters">
                        University of Massachusetts Dartmouth
                      </p>
                      <p className="text-muted-foreground" data-testid="education-years-masters">2025 - 2027</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">Key Coursework</h4>
                      <div className="flex flex-wrap gap-2" data-testid="education-coursework-masters">
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Machine Learning</span>
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Deep Learning</span>
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Statistical Analysis</span>
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Data Mining</span>
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Big Data Analytics</span>
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Algorithm Design</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">Achievements</h4>
                      <ul className="space-y-2" data-testid="education-achievements-masters">
                        {/* <li className="flex items-start">
                          <Trophy className="text-primary mr-3 mt-1" size={16} />
                          <span>Graduate Research Assistant ‒ AI & Data Analytics Lab</span>
                        </li>
                        <li className="flex items-start">
                          <Award className="text-primary mr-3 mt-1" size={16} />
                          <span>Dean's List ‒ All Semesters</span>
                        </li> */}
                        <li className="flex items-start">
                          <Star className="text-primary mr-3 mt-1" size={16} />
                          <span>Outstanding GPA of 3.56(out of 4)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bachelor’s Card */}
            <div className="bg-card rounded-lg overflow-hidden netflix-shadow w-[800px] flex-shrink-0">
              <div className="grid grid-cols-3">
                <div className="col-span-1 bg-secondary p-8 flex items-center justify-center">
                  <img 
                    src="https://aiet.org.in/icdal2022/images/venue-img_alvas.jpg" 
                    /* replace with actual URL of Alvas Engineering College image */
                    alt="Alvas Engineering College, Moodbidri"
                    className="w-full h-full object-cover rounded"
                    data-testid="education-campus-image-bachelors"
                  />
                </div>
                <div className="col-span-2 p-8">
                  <div className="flex items-start mb-6">
                    <GraduationCap className="text-4xl text-primary mr-4 mt-1" size={36} />
                    <div>
                      <h3 className="text-2xl font-bold mb-2" data-testid="education-degree-bachelors">
                        Bachelor of Engineering in AI & ML
                      </h3>
                      <p className="text-xl text-muted-foreground mb-1" data-testid="education-university-bachelors">
                        Alvas Engineering College, Moodbidri
                      </p>
                      <p className="text-muted-foreground" data-testid="education-years-bachelors">2020-2024</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">Key Coursework</h4>
                      <div className="flex flex-wrap gap-2" data-testid="education-coursework-bachelors">
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Artificial Intelligence</span>
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Neural Networks</span>
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Data Structures</span>
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Computer Vision</span>
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Natural Language Processing</span>
                        <span className="bg-background px-3 py-1 rounded-full text-sm">Pattern Recognition</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">Achievements</h4>
                      <ul className="space-y-2" data-testid="education-achievements-bachelors">
                        <li className="flex items-start">
                          <Trophy className="text-primary mr-3 mt-1" size={16} />
                          <span>Best Final Year Project Award (AI-based Drone System)</span>
                        </li>
                        <li className="flex items-start">
                          <Star className="text-primary mr-3 mt-1" size={16} />
                          <span>Published Research Paper in IEEE</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
